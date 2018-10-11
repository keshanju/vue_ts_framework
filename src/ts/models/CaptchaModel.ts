/***
 * ////////////
 * 此类对应服务端的请求数据接口
 * ////////////
 */

import HttpClient from "@/ts/net/HttpClient";

/**
 * 是否需要图形验证码
 */
export class CaptchaRequestModel {

    public path_method: string = ''; // json数组

    /**
     * 获取手机注册的path
     */
    public getPhoneRegisterPath(): string {
        const obj = {
            path: HttpClient.URL_AUTH_REGISTER,
            method: 'post',
        };
        const obj1 = {
            path: HttpClient.URL_CODE_VOICE,
            method: 'post',
        };
        const obj2 = {
            path: HttpClient.URL_CODE_SMSCODE,
            method: 'post',
        };
        const arr = [obj, obj1, obj2];

        return JSON.stringify(arr);
    }
}

/**
 * 对应服务端返回值
 */
export class CaptchaModel {
    public is_validate: number = 0;
}

/**
 * 图形验证码
 */
export class ImgCaptchaRequestModel {
    public captcha_type: string = 'default';
}

/**
 * 图形验证码服务端返回
 */
export class ImgCaptchaModel {
    public expiry_time: string = '';
    public img: string = '';
    public key: string = '';
}

/**
 * 短信/语言验证码
 */
export class SmsCaptchaRequestModel {
    public phone: string = '';
    public country_code: string = '86'; // 手机区号
    public state: number = 0; // 验证状态字段，0：不验证手机号是否存在，1：验证手机号【是否存在】，2：验证手机号【是否不存在】，3：第三方登录验证
    public checkcode: string = ''; // 图形验证码
    public checkcode_key: string = ''; // 图形验证码Key
    public code: number = 0; // 第三方登录的code ，state=3必传
}

/**
 * 短信/语言验证码服务端返回
 */
export class SmsCaptchaModel {

}