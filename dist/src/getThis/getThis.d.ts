import { StoreState } from '../redux/store';

export declare function getThis(StateName: keyof StoreState["This"], defaultValue?: any): {
    update: (data: any) => any;
    append: (data: any) => never;
    upsert: (...data: any) => never;
    dispatcher: any;
    This: any;
    get: () => never;
    fetch: () => any;
    info: {
        type: string;
    } | undefined;
};
