/**
 * 手机注册请求参数
 */
export class PhoneRegisterRequestModel {
    public register_type: string = '1'; // 注册类型，1：国内注册，2：海外注册，默认：1
    public checkcode: string = '';
    public checkcode_key: string = '';

    public phone?: string = '';
    public country_code?: string = '86';
    public smscode?: string = '';
    public smscode_key?: string = '';
    public password?: string = '';

    public package_id: number = 0; //套餐id
    public price_id: number = 0; // 价格id

    public refer_code: string = ''; // 推荐码(可为空)
}

/**
 * 邮箱注册请求参数
 */
export class EmailRegisterRequestModel {
    public register_type: string = '1'; // 注册类型，1：国内注册，2：海外注册，默认：1
    public checkcode: string = '';
    public checkcode_key: string = '';

    public smscode?: string = '';
    public smscode_key?: string = '';
    public username?: string = '';
    public email?: string = '';
    public mailcode?: string = '';
    public mailcode_key?: string = '';
    public password?: string = '';

    public nickname?: string = '';
    public admin_password?: string = '';

    public package_id: number = 0; //套餐id
    public price_id: number = 0; // 价格id

    public refer_code: string = ''; // 推荐码(可为空)
}

/**
 * 注册返回参数
 */
export class RegisterModel {

}