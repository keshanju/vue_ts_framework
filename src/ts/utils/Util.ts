/**
 * 工具类
 */
export default class Util {
    /**
     * 倒计时
     * @param
     * @param interval 间隔，单位:秒
     */
    public static countDown(num: number,interval: number,backFun: any) {
        var updateInvoiceTimer = setInterval(function () {
            num--;
            if(num <= 0) num = 0;
            backFun(num);
            if(num == 0) {
                clearInterval(updateInvoiceTimer);
            }
        },interval*1000);
    }
}