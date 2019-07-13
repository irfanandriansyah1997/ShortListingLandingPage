import { PropsInterface as ImagePropsInterface } from '@/shared/components/atoms/image/interfaces/component.interface';

export type SizeType = 'small' | 'default' | 'big' | number;

export interface PropsInterface extends ImagePropsInterface {
    size: SizeType;
}
