import { Action } from '@ngrx/store';
/**
 * Note to future:
 *
 * I tried making this a genericized type - PayloadAction<T>,
 * but the store action types end up being a union type
 * (e.g. void | string | number | error | etc...)
 * and those are not assignable to parameters of a specific type
 * (e.g. something: string)
 * so you end up having to typecast the payload in your code anyways.
 *
 * So adding T make your payload be a union type rather than a specific type...
 */
export declare class PayloadAction implements Action {
    type: string;
    payload?: any;
    constructor(type: string, payload?: any);
}
