/**
 * Listing Store Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { ReducerInterface } from '@/shared/interfaces/store.interface';
import { DefaultListingModel } from '@/store/listing/model/listing.model';
import { ListingListInterface } from '../interfaces/listing.interface';

export const SET_LISTING = 'SET_LISTING';

const Reducers = (
    state: ListingListInterface = DefaultListingModel,
    action: ReducerInterface
): ListingListInterface => {
    switch (action.type) {
    case SET_LISTING:
        return {
            count: action.payload.length,
            properties: action.payload
        };
    default:
        return state;
    }
};

export default Reducers;