import * as React from 'react';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { ListingInterface, ListingList } from '@/modules/landing-page/interfaces/listing.interface';
import Shortlist from '@/modules/landing-page/components/molecules/shortlist/shortlist.component';
import Header from '@/shared/components/molecules/header/header.component';

interface StateComponent {
    model: ListingInterface[];
}

class LandingPageModule extends React.Component<DefaultPropsInterface, StateComponent> {
    getPropertyData(): ListingList {
        return {
            count: 2,
            properties: [
                {
                    description: 'string',
                    id: 1,
                    listingType: 1,
                    location: 'string',
                    marketType: 1,
                    picture: 'string',
                    propertyType: 1,
                    rentType: 1,
                    status: 1,
                    title: 'string'
                },
                {
                    description: 'string',
                    id: 1,
                    listingType: 1,
                    location: 'string',
                    marketType: 1,
                    picture: 'string',
                    propertyType: 1,
                    rentType: 1,
                    status: 2,
                    title: 'string'
                }
            ]
        };
    }

    render() {
        return (
            <div className="ui-landing-page-module">
                <Header title="Listing 500 Juta" />
                <div className="ui-landing-page-module__content">
                    <Shortlist propertyData={this.getPropertyData()} />
                </div>
            </div>
        );
    }
}

export default LandingPageModule;