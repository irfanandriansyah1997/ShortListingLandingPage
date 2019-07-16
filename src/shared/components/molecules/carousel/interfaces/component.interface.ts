import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { PictureInterface } from '@/store/listing/interfaces/picture/picture.interface';

export interface PropsInterface extends DefaultPropsInterface {
    images: PictureInterface[];
}
