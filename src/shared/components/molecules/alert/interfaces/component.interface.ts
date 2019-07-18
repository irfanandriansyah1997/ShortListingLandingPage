import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    icon?: string;
    theme: 'default';
    title: string;
    description: string;
}
