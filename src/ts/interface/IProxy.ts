export interface IProxy {
    /**
     * 初始化
     */
    init(): void;

    execute(): void;

    setBaseUrl(url: string): void;
}
