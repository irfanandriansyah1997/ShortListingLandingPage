import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { AttributeListingTranslatorInterface } from '@/store/listing/interfaces/translator/translator.interface';

export interface PropsInterface extends DefaultPropsInterface, AttributeListingTranslatorInterface {
    title: string;
}
