import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

export interface PropsInterface extends DefaultPropsInterface {
    listing: ListingInterface;
}
