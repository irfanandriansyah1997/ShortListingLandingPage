/**
 * Listing Store Action
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import {
    SET_LISTING,
    SET_ACTIVE_LISTING,
    REMOVE_LISTING,
    HIDE_LISTING
} from '@/store/listing/reducers/listing.reducers';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

export const setListing = (param: ListingInterface[]) => ({
    type: SET_LISTING,
    payload: {
        param
    }
});

export const setActiveAction = (param: string | number) => ({
    type: SET_ACTIVE_LISTING,
    payload: {
        param
    }
});

export const removeListingAction = (param: string | number) => ({
    type: REMOVE_LISTING,
    payload: {
        param
    }
});

export const hideListingAction = (param: string | number) => ({
    type: HIDE_LISTING,
    payload: {
        param
    }
});
