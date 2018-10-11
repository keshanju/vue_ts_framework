import {IHttp} from '@/ts/interface/IHttp';
import axios from 'axios';
import {DataModel, IdataModel} from "@/ts/models/IdataModel";

export default class HttpClient implements IHttp {
    // 成功请求
    public static HTTP_SUCCESS_NET_CODE = 0; // 成功的请求
    // 错误code
    public static HTTP_ERROR_NEW_CODE = -50000; // 网络错误
    public static HTTP_TOKEN_EXPIRE = 400006; // token过期

    // auth
    public static URL_AUTH_LOGIN = '/interface/auth/login';
    public static URL_AUTH_REGISTER = '/interface/auth/register';
    public static URL_AUTH_REGISTER_PACKAGE = '/interface/auth/register/package';
    public static URL_AUTH_RETRIEVE = '/interface/auth/retrieve';
    public static URL_AUTH_LOGOUT = '/interface/auth/logout';
    public static URL_AUTH_BIND_PLAT = '/interface/auth/bind_plat';
    // tools
    public static URL_CODE_CAPTCHA = '/tools/captcha';
    public static URL_CODE_IS_CAPTCHA = '/tools/is_captcha';
    public static URL_CODE_SMSCODE = '/tools/smscode';
    public static URL_CODE_VOICE = '/tools/smscode/voice';
    public static URL_CODE_MAIL = '/tools/mailcode';
    public static URL_GONGGAO_LIST = '/tools/news';
    public static URL_AUTH_COUNTRY = '/tools/auth_country';
    public static URL_IS_CAPTCHA_LIST = '/tools/is_captcha/list';
    // user
    public static URL_USER_INFO = '/interface/user/info';
    public static URL_USER_PACKAGE = '/interface/user/package';
    public static URL_USER_PACKAGE_BUY = '/interface/user/package/buy';
    public static URL_USER_INVOICE_STATE = '/interface/user/invoice/state';
    public static URL_USER_INVOICE = '/interface/user/invoice';
    public static URL_USER_INVOICE_BUY = '/interface/user/invoice/buy';
    public static URL_USER_PACKAGE_SWITCH = '/interface/user/package/switch';
    public static URL_USER_PACKAGE_SWITCH_CONFIRM = '/interface/user/package/switch/confirm';
    public static URL_USER_UPLOAD = '/interface/user/upload';
    public static URL_USER_EDIT = '/interface/user/edit';
    public static URL_USER_PASSWORD = '/interface/user/password';
    //
    protected BASE_URL = '';

    public setBaseUrl(url: string): void {
        this.BASE_URL = url;
    }

    /**
     * get请求
     * @param url
     * @param params
     */
    public async get<T>(url: string, params: any) {
        url = this.BASE_URL + url;
        params['lang'] = 'zh_CN';
        params = {params};
        try {
            let backData = await axios.get(url, params);
            let backData1 = backData.data as IdataModel<T>;

            return backData1;
        } catch (e) {
            const errorData = new DataModel();
            errorData.code = HttpClient.HTTP_ERROR_NEW_CODE;
            errorData.msg = '网络错误!';

            return errorData;
        }
    }

    /**
     * post请求
     * @param url
     * @param params
     */
    public async post<T>(url: string, params: any) {
        url = this.BASE_URL + url;
        params['lang'] = 'zh_CN';
        try {
            let backData = await axios.post(url, params);
            let backData1 = backData.data as IdataModel<T>;

            return backData1;
        } catch (e) {
            const errorData = new DataModel();
            errorData.code = HttpClient.HTTP_ERROR_NEW_CODE;
            errorData.msg = '网络错误!';

            return errorData;
        }
    }
}
