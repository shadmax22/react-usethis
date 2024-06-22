export declare function getThis(StateName: string, defaultValue?: any): {
    update: (data: any) => any;
    append: (data: any) => any;
    upsert: (data: any, config?: {
        returnType?: "object" | "array" | undefined;
    } | undefined) => any;
    dispatcher: any;
    This: any;
    get: () => any;
};
