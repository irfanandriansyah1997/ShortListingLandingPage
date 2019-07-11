import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListingInterface } from '@/interfaces/listing.interface';

import Header from '@/components/header/header.component';

import '@/style/app.scss';

interface DefaultPropsInterface {
    children?: React.ReactNode;
    as?: any;
}

interface StateComponent {
    model: ListingInterface[];
}

class App extends React.Component<DefaultPropsInterface, StateComponent> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            model: [
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
        const { model } = this.state;

        return (
            <div className="container">
                <Header title="Hallo" />
                {model.map((item: ListingInterface) => (
                    <div>
                        {item.status === 1 ? (
                            <h1>{item.description}</h1>
                        ) : (
                            <h2>{item.description}</h2>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
