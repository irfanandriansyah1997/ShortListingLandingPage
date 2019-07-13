import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

export interface ReducerInterface {
    type: string;
    payload: DefaultDynamicObject;
}
