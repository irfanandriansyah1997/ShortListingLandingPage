import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { PictureInterface } from '@/store/listing/interfaces/picture/picture.interface';

export interface PropsInterface extends DefaultPropsInterface {
    images: PictureInterface[];
}

export interface StateInterface {
    position: number;
}

export enum OnChangePositionEnum {
    MINUS = 0,
    ADD = 1
}
