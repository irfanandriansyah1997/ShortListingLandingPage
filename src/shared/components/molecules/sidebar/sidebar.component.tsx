import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from '@/shared/components/molecules/sidebar/interfaces/component.interface';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

import './style/style.scss';
import CardListing from '@/shared/components/molecules/card-listing/card-listing.component';

class Sidebar extends React.Component<PropsInterface> {
    static propTypes = {
        listing: PropTypes.shape({
            count: PropTypes.number,
            properties: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired
    };

    render(): React.ReactNode {
        const { listing } = this.props;

        return (
            <div className="ui-molecules-sidebar flex fixed">
                {listing.properties.map((item: ListingInterface) => (
                    <CardListing
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.attribute.priceTag}
                        src={item.mainPicture}
                        location={item.location}
                    />
                ))}
            </div>
        );
    }
}

export default Sidebar;
