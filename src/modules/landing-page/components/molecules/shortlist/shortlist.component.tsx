import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListingList } from '@/modules/landing-page/interfaces/listing.interface';

import './style.scss';

interface ShortlistProps {
    propertyData: ListingList;
}

class Shortlist extends React.Component<ShortlistProps> {
    static propTypes = {
        propertyData: PropTypes.shape({
            count: PropTypes.number,
            properties: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired
    };

    render() {
        const { propertyData } = this.props;

        return (
            <div className="shortlist">
                <div className="shortlist__sidebar">
                    { propertyData.count }
                </div>
                <hr />
                <div className="shortlist__detail">
                    a
                </div>
            </div>
        );
    }
}

export default Shortlist;