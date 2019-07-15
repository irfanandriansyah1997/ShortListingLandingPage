import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { FormattedAttribute } from '@/store/listing/interfaces/listing/listing_model.interface';

export interface PropsInterface extends DefaultPropsInterface {
    dataRow: FormattedAttribute[];
    title: string;
}
