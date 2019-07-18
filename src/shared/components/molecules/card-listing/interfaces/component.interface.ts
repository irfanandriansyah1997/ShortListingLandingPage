import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    id: string | number;
    title: string;
    src: string;
    price: string | number;
    location: string;
    hide: boolean;
    active: boolean;
    onClick?: () => void;
    onHide?: () => void;
    onDelete?: () => void;
}
