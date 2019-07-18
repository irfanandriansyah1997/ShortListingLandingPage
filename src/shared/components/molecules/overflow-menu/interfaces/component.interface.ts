import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    onHide?: () => void;
    onDelete?: () => void;
}
