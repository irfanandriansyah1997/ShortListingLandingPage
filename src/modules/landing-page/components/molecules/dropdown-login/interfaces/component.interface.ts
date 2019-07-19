import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
// import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';

export interface PropsInterface extends DefaultPropsInterface {
    onClick?: () => void;
}

export interface StateTypes {
    model: string;
}
