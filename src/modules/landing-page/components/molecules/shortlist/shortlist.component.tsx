import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import Text from '@/shared/components/atoms/text/text.component';
import ContactAgent from '@/modules/landing-page/components/molecules/contact-agent/contact-agent.component';

import './style.scss';
import TableComponent from '@/shared/components/molecules/table/table.component';

interface ShortlistProps {
    listing: ListingInterface;
}

class Shortlist extends React.Component<ShortlistProps> {
    static propTypes = {
        listing: PropTypes.shape({}).isRequired
    };

    render() {
        const { listing } = this.props;

        return (
            <div className="ui-molecules-shortlist flex relative">
                <div className="ui-molecules-shortlist__heading">
                    <Text
                        name="ui-molecules-shortlist__id mb-8"
                        tag="p"
                        styling="subheading"
                        fontWeight={500}
                    >
                        {listing.id}
                    </Text>
                    <Text
                        name="ui-molecules-shortlist__price mb-16"
                        tag="h3"
                        styling="heading"
                        fontWeight={600}
                    >
                        {listing.attribute.priceTag}
                    </Text>
                    <Text
                        name="ui-molecules-shortlist__title mb-8"
                        tag="h3"
                        styling="subheading"
                        fontWeight={600}
                    >
                        {listing.title}
                    </Text>
                    <Text
                        name="ui-molecules-shortlist__location mb-16"
                        tag="h3"
                        styling="text"
                        fontWeight={400}
                    >
                        {listing.location}
                    </Text>
                </div>
                <div className="ui-molecules-shortlist__table">
                    <TableComponent title="Detail Property" dataRow={listing.formattedAttributes} />
                </div>
                <ContactAgent photo={listing.agent.picture} name={listing.agent.name} />
            </div>
        );
    }
}

export default Shortlist;
