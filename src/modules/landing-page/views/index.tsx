/**
 * Landing Page View
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import Header from '@/shared/components/molecules/header/header.component';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import Shortlist from '@/modules/landing-page/components/molecules/shortlist/shortlist.component';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

interface StateComponent {
    model: ListingInterface[];
}

class LandingPageModule extends React.Component<ControllerProps, StateComponent> {
    render() {
        const { listingModel } = this.props;
        return (
            <div className="ui-landing-page-module">
                <Header title="Listing 500 Juta" />
                <div className="ui-landing-page-module__content">
                    <Shortlist propertyData={listingModel} />
                </div>
            </div>
        );
    }
}

export default LandingPageModule;
