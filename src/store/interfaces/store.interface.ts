/**
 * Store Structure Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { AuthModelInterface } from '../auth/interfaces/auth.interface';
import { ListingListInterface } from '../listing/interfaces/listing.interface';

export interface StoreInterface {
    AuthReducer: AuthModelInterface;
    ListingReducer: ListingListInterface;
}
