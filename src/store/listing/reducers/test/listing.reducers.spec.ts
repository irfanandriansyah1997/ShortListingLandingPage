/**
 * Test Listing Reducers
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

/* eslint-disable */

import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { DefaultListingModel } from '@/store/listing/model/listing.model';
import Reducers, { SET_LISTING, SET_ACTIVE_LISTING, REMOVE_LISTING } from '@/store/listing/reducers/listing.reducers';

require('config/enzyme.config');

const param: ListingInterface[] = DefaultListingModel.properties;

describe('Testing reducers for listing store', () => {
    it('Invoke function set remove listing', () => {
        expect(
            Reducers(
                {
                    count: 2,
                    properties: param,
                    selected: 0
                },
                {
                    type: REMOVE_LISTING,
                    payload: {
                        param: '#PGA68N'
                    }
                }
            )
        ).toStrictEqual({
            count: 1,
            properties: param.filter((item: ListingInterface) => item.id !== '#PGA68N'),
            selected: 0
        });
    });

    it('Invoke function set active listing', () => {
        expect(
            Reducers(
                {
                    count: 2,
                    properties: param,
                    selected: 0
                },
                {
                    type: SET_ACTIVE_LISTING,
                    payload: {
                        param: '#PGA68N'
                    }
                }
            )
        ).toStrictEqual({
            count: 2,
            properties: param,
            selected: 1
        });
    });

    it('Invoke function set active listing with wrong id', () => {
        expect(
            Reducers(
                {
                    count: 2,
                    properties: param,
                    selected: 0
                },
                {
                    type: SET_ACTIVE_LISTING,
                    payload: {
                        param: '#PGA68NA'
                    }
                }
            )
        ).toStrictEqual({
            count: 2,
            properties: param,
            selected: 0
        });
    });

    it('Invoke function set listing', () => {
        expect(
            Reducers(
                {
                    count: 0,
                    properties: [],
                    selected: 0
                },
                {
                    type: SET_LISTING,
                    payload: {
                        param
                    }
                }
            )
        ).toStrictEqual({
            count: 2,
            properties: param,
            selected: 0
        });
    });

    it('Invoke function unknown', () => {
        expect(
            Reducers(
                {
                    count: 0,
                    properties: [],
                    selected: 0
                },
                {
                    type: 'unknown',
                    payload: {}
                }
            )
        ).toStrictEqual({
            count: 0,
            properties: [],
            selected: 0
        });
    });
});
