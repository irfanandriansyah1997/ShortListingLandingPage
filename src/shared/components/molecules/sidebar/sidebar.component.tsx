import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from '@/shared/components/molecules/sidebar/interfaces/component.interface';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

import './style/style.scss';
import Card from '../../atoms/card/card.component';

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
                    <Card className="asas" hoverType="elevate-sm" type="border" rounded>
                        <div style={{ padding: '15px' }}>
                            <img
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                src={item.mainPicture}
                                alt={item.title}
                            />
                            <p>{item.attribute.priceTag}</p>
                            <div>{item.title}</div>
                            <div>{item.location}</div>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }
}

export default Sidebar;
