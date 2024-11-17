import { typeParam_upsert } from 'js-upsert';

/**
 * useThis allows you to use global state in simplified way. Just specify a state name then ready to go.
 * @param StateName
 * @param defaultValue
 * @returns
 */
type StateManager<T> = {
    get: () => T;
    update: (newState: ((previos_state: T) => T) | T) => T;
    append: (newState: ((previos_state: T) => Partial<T>) | Partial<T>) => T;
    upsert: <K>(...partialState: typeParam_upsert<T, keyof K>[]) => T;
    fetch: () => T;
};
export declare function useThis<DefaultValue>(StateName: string, defaultValue?: DefaultValue): StateManager<DefaultValue>;
export {};
