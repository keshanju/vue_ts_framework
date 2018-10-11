/**
 * 所有的tips语言管理
 */
export class TipsMsgUtil {

    /**
     * 中文的字典
     */
    public enMap: Map<string, string> = new Map<string, string>();

    /**
     * 英文字典
     */
    public cnMap: Map<string, string> = new Map<string, string>();
    public static instance: TipsMsgUtil;
    // key
    public static KEY_LOADING: string = 'KEY_LOADING';
    public static KEY_NOTIF_ERROR_TITLE: string = 'KEY_NOTIF_ERROR_TITLE';
    public static KEY_NOTIF_SUCCESS_TITLE: string = 'KEY_NOTIF_SUCCESS_TITLE';
    public static KEY_NOTIF_SMS: string = 'KEY_NOTIF_SMS';

    /**
     * map
     */
    public initMap() {
        this.cnMap.set(TipsMsgUtil.KEY_LOADING,'加载中...');
        this.enMap.set(TipsMsgUtil.KEY_LOADING,'loading...');

        this.cnMap.set(TipsMsgUtil.KEY_NOTIF_ERROR_TITLE,'温馨提醒');
        this.enMap.set(TipsMsgUtil.KEY_NOTIF_ERROR_TITLE,'warm reminder');

        this.cnMap.set(TipsMsgUtil.KEY_NOTIF_SUCCESS_TITLE,'成功提醒');
        this.enMap.set(TipsMsgUtil.KEY_NOTIF_SUCCESS_TITLE,'success to remind');

        this.cnMap.set(TipsMsgUtil.KEY_NOTIF_SMS,'获取验证码成功!');
        this.enMap.set(TipsMsgUtil.KEY_NOTIF_SMS,'The verification code was successfully obtained!');
    }

    /**
     * 获取对应的文字
     * @param ln 当前语言
     */
    public static getTipsMsg(ln: number = 0, key: string): string {
        if(this.instance == null) {
            this.instance = new TipsMsgUtil();
            this.instance.initMap();
        }
        let msg;
        if(ln == 0) {
            msg = this.instance.cnMap.get(key);
        }else {
            msg = this.instance.enMap.get(key);
        }
        return msg as string;
    }
}