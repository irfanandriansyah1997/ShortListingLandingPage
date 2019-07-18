import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    show: boolean;
    onCloseDialog: () => void;
    onAcceptDelete: () => void;
}

export interface StateInterface {
    show: boolean;
}
