/**
 * Listing Store Action
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { SET_LISTING } from '@/store/listing/reducers/listing.reducers';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

export const setListing = (param: ListingInterface[]) => ({
    type: SET_LISTING,
    payload: {
        param
    }
});
