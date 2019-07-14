import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from '@/shared/components/molecules/sidebar/interfaces/component.interface';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

import './style/style.scss';

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
                    <React.Fragment>
                        <img
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            src={item.picture}
                            alt={item.title}
                        />
                        <div>{item.title}</div>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

export default Sidebar;
