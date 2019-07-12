import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

export const convert_obj_to_string = (obj: DefaultDynamicObject) => Object.keys(obj)
    .filter((item) => obj[item] && obj[item] !== '')
    .map((item) => item)
    .join(' ');
