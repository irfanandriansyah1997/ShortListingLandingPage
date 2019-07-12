import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListingInterface, ListingList } from '@/modules/landing-page/interfaces/listing.interface';
import Shortlist from '@/modules/landing-page/components/molecules/shortlist/shortlist.component';

import Header from '@/shared/components/molecules/header/header.component';

import '@/shared/styles/app.scss';

interface DefaultPropsInterface {
    children?: React.ReactNode;
    as?: any;
}

interface StateComponent {
    model: ListingInterface[];
}

class App extends React.Component<DefaultPropsInterface, StateComponent> {
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
            <div className="wrapper">
                <Header title="Listing 500 Juta" />
                <div className="content">
                    <Shortlist propertyData={this.getPropertyData()} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
