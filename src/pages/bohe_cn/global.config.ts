/**
 * 全局的config
 */
export default class GlobalConfig {
    /**
     * 正式环境请设置成false
     */
    public static isDebug = true;

    /**
     * 1开发环境 2测试 3生产
     */
    public static SERVER_TYPE_CONFIG = 1;

    /**
     * 0中文 1英文
     */
    public static LANGUAGE_TYPE = 0;

    /**
     * cookie
     */
    public static COOKIES_LANGUAGE_TYPE = 'COOKIES_LANGUAGE_TYPE'; // 语言

    /**
     * interface url
     */
    public static getBaseUrl() {
        if (GlobalConfig.SERVER_TYPE_CONFIG === 1) {
            // 开发环境
            // return "http://api.leigod.top";
            return "http://kfapi.bohe.com";
        } else if (GlobalConfig.SERVER_TYPE_CONFIG === 2) {
            // 测试环境
            return "http://testapi.bohe.com";
        } else if (GlobalConfig.SERVER_TYPE_CONFIG === 3) {
            // 生产环境
            return "https://hkapi.bohe.com";
        } else {
            return '';
        }
    }

    /**
     * 切换语言
     * @param ln 0中文 1英文
     */
    public static changeLanguage(ln: number) {
        if (ln == null) {
            // @ts-ignore
            ln = localStorage.getItem(GlobalConfig.COOKIES_LANGUAGE_TYPE);
        }
        if (ln == null) return;
        const origin = window.location.origin;
        let pathname = window.location.pathname;
        let url = '';
        //
        if (ln === 0) {
            // 中文
            url = origin + '/cn' + pathname;
        } else {
            // 英文
            pathname = pathname.replace('/cn', '');
            url = origin + pathname;
        }
        // 保存到cookie
        localStorage.setItem(GlobalConfig.COOKIES_LANGUAGE_TYPE, ln + '');
        //
        window.location.href = url;
    }

    /**
     * 输出
     */
    public static log(...args:any[]) {
        if(GlobalConfig.isDebug) {
            for(let i= 0;i < args.length;i++) {
                console.log(args[i]);
            }
        }
    }
}
