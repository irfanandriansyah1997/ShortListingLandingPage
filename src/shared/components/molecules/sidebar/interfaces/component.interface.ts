import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { ListingListInterface } from '@/store/listing/interfaces/listing.interface';

export interface PropsInterface extends DefaultPropsInterface {
    listing: ListingListInterface;
    onDelete: (id: number | string) => void;
    onHide: (id: number | string) => void;
}
