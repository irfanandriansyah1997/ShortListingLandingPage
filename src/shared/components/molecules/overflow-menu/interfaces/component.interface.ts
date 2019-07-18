import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    hide: boolean;
    onHide?: () => void;
    onDelete?: () => void;
}
