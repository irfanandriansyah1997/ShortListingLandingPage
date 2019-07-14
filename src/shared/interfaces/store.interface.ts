/**
 * Store Interfaces
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

export interface ReducerInterface {
    type: string;
    payload: DefaultDynamicObject | any;
}
