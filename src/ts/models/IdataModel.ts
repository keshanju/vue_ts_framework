export interface IdataModel<T> {
    /**
     * 返回码
     */
    code: number;
    /**
     * 返回消息
     */
    msg: string;
    /**
     * json数据
     */
    data: T;
}

/**
 * data
 */
export class DataModel<T> implements IdataModel<T> {
    public code = 0;
    public msg = '';
    public data: any = null;
}
