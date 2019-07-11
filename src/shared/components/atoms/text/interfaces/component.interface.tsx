import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    styling?: 'heading' | 'subheading' | 'text' | 'caption';
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    fontWeight: 300 | 400 | 500 | 600 | 700;
    align: 'center' | 'left' | 'right' | 'initial';
}
