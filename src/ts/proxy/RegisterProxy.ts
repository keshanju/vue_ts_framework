import Vue from 'vue';
import {IProxy} from "@/ts/interface/IProxy";
import {Loading, Notification} from 'element-ui';
import HttpClient from "@/ts/net/HttpClient";
import {
    CaptchaModel,
    CaptchaRequestModel,
    ImgCaptchaModel,
    ImgCaptchaRequestModel,
    SmsCaptchaModel, SmsCaptchaRequestModel
} from "@/ts/models/CaptchaModel";
import GlobalConfig from "@/pages/bohe_cn/global.config";
import {IdataModel} from "@/ts/models/IdataModel";
import {TipsMsgUtil} from "@/ts/utils/TipsMsgUtil";
import Util from "@/ts/utils/Util";
import {PhoneRegisterRequestModel, RegisterModel} from "@/ts/models/UserModel";

Vue.use(Loading);
Vue.prototype.$notify = Notification;

/**
 * 注册proxy
 */
export class RegisterProxy extends Vue implements IProxy {

    public isLoading: boolean = false;
    public loadingMsg: string = ''; // loading的说明文字
    public resignType: number = 0; // 0手机登录 1邮箱登录 || 2手机找回密码 3邮箱找回密码
    public countryCode: string = ''; // 手机号前缀
    public areaCodeList = []; // 手机区号list
    public phone: string = '';
    public email: string = '';
    public smscode: string = ''; // 短信code
    public password: string = ''; // 手机号密码
    public passwordTwo: string = ''; // 邮箱密码
    public imgCaptchaCode: string = ''; // 输入的图形验证码
    public imgCaptchaM: ImgCaptchaModel = new ImgCaptchaModel(); // 图形验证码model
    public isimgVerification: number = 0; // 是否需要图片验证
    public smsCapchaM: SmsCaptchaModel = new SmsCaptchaModel(); // 短信验证码
    public packageIndex: number = 0; // 选择的活动套餐
    public packageList = null; // 套餐list
    public smsCountDownNum: number = 0; // 短信倒计时
    // http
    public http = new HttpClient();
    public backData: IdataModel<any> | undefined;

    public init(): void {
        this.registerIsCaptcha();
    }

    public execute(): void {
        // TODO...
    }

    public setBaseUrl(url: string): void {
        this.http.setBaseUrl(url);
    }

    /**
     * 注册是否需要图形验证码
     */
    public async registerIsCaptcha() {
        const url = HttpClient.URL_IS_CAPTCHA_LIST;
        const param = new CaptchaRequestModel();
        param.path_method = param.getPhoneRegisterPath();

        this.backData = await this.http.post<CaptchaModel>(url, param);
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.isimgVerification = this.backData.data.is_validate;
            GlobalConfig.log('是否需要图形验证码', this.isimgVerification);
            if (this.isimgVerification == 1) this.onGetCaptcha();
        }
    }

    /**
     * 获取图形验证码
     */
    public async onGetCaptcha() {
        this.isimgVerification = 1;
        const url = HttpClient.URL_CODE_CAPTCHA;
        const param = new ImgCaptchaRequestModel();

        this.backData = await this.http.get<ImgCaptchaModel>(url, param);
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            this.imgCaptchaM = this.backData.data;
            GlobalConfig.log('图形验证码数据', this.imgCaptchaM);
        }
    }

    /**
     * 获取短信/语音验证码
     * @param type 0短信 1语言
     */
    public async onGetSmscode(type: number,state: number) {
        let url = '';
        if(type == 0) {
            url = HttpClient.URL_CODE_SMSCODE;
        }else if(type == 1) {
            url = HttpClient.URL_CODE_VOICE;
        }
        let param = new SmsCaptchaRequestModel();
        param.phone = this.phone;
        param.country_code = this.countryCode;
        param.state = state;
        param.checkcode = this.imgCaptchaCode;
        param.checkcode_key = this.imgCaptchaM.key;
        //loading
        this.isLoading = true;
        this.loadingMsg = TipsMsgUtil.getTipsMsg(0,TipsMsgUtil.KEY_LOADING);
        //
        this.backData = await this.http.post<SmsCaptchaModel>(url, param);
        this.isLoading = false;
        if (this.backData.code == HttpClient.HTTP_SUCCESS_NET_CODE) {
            // 正确返回
            this.smsCapchaM = this.backData.data;
            this.onGetSmscodeSuccess();
        }else {
            // 错误返回
            this.$notify({
                title: TipsMsgUtil.getTipsMsg(0,TipsMsgUtil.KEY_NOTIF_ERROR_TITLE),
                message: this.backData.msg,
                type: 'warning'
            });
            // 获取图形验证码
            this.onGetCaptcha();
        }
        GlobalConfig.log('返回的短信/语音验证码', this.smsCapchaM);
    }

    /**
     * 获取验证码成功
     * TODO... 此方法可以重写，处理短信获取成功后的ui逻辑
     */
    onGetSmscodeSuccess() {
        this.$notify({
            title: TipsMsgUtil.getTipsMsg(0,TipsMsgUtil.KEY_NOTIF_SUCCESS_TITLE),
            message: TipsMsgUtil.getTipsMsg(0,TipsMsgUtil.KEY_NOTIF_SMS),
            type: 'success'
        });
        //倒计时
        this.smsCountDownNum = 60;
        const sefl = this;
        Util.countDown(this.smsCountDownNum,1,(n: number) => {
            sefl.smsCountDownNum = n;
        });
    }

    /**
     * 手机注册
     */
    public onPhoneRegister() {
        let param = new PhoneRegisterRequestModel();
    }

    /**
     * 邮箱注册
     */
    public onEmaillRegister() {

    }

    /**
     * 请求注册
     */
    public async onRegister(url: string,param: any) {
        this.backData = await this.http.post<SmsCaptchaModel>(url, param);
    }
}
