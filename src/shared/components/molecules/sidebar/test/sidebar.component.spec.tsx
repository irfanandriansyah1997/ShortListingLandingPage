/**
 * Sidebar Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.19
 */

import * as React from 'react';
// import { render, mount } from 'enzyme';
import { mount } from 'enzyme';
import Sidebar from '@/shared/components/molecules/sidebar/sidebar.component';
import { LandingPageContext } from '@/modules/landing-page/controller';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import { DefaultListingModel } from '@/store/listing/model/listing.model';

const FIXTURE_CONTEXT: ControllerProps = {
    actionRemoveListing: jest.fn(),
    actionHideListing: jest.fn(),
    actionSetActiveListing: jest.fn(),
    actionSetLogin: jest.fn(),
    actionSetLogout: jest.fn(),
    authModel: {
        email: '',
        password: '',
        username: ''
    },
    listingModel: DefaultListingModel
};

describe('Testing sidebar component in molecules component ', () => {
    it('Test render sidebar component', () => {
        const onDeleteMock = jest.fn();
        const onHideMock = jest.fn();
        const dialog = mount(
            <LandingPageContext.Provider value={FIXTURE_CONTEXT}>
                <Sidebar listing={FIXTURE_CONTEXT.listingModel} onDelete={onDeleteMock} onHide={onHideMock} />
            </LandingPageContext.Provider>
        );

        const component = dialog.find(`CardListing[id="${FIXTURE_CONTEXT.listingModel.properties[0].id}"]`);
        const props: any = component.props();

        /**
         * Before On Click Card Listing
         */
        expect(FIXTURE_CONTEXT.actionSetActiveListing).toHaveBeenCalledTimes(0);

        /**
         * On Click Card Listing
         */
        props.onClick();
        expect(FIXTURE_CONTEXT.actionSetActiveListing).toHaveBeenCalledTimes(1);

        /**
         * Before On Delete Card Listing
         */
        expect(onDeleteMock).toHaveBeenCalledTimes(0);

        /**
         * On Click Card Listing
         */
        props.onDelete();
        expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });
});
