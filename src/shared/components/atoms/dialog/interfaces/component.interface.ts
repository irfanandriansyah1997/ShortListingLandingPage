import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export enum DialogType {
    POPUP = 0
}

export interface PropsInterface extends DefaultPropsInterface {
    type?: DialogType;
    show: boolean;
    onCloseDialog: () => void;
}

export interface StateInterface {
    show: boolean;
}
