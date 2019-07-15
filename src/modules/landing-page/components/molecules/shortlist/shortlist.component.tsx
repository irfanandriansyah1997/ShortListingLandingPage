import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import Text from '@/shared/components/atoms/text/text.component';
import ContactAgent from '@/modules/landing-page/components/molecules/contact-agent/contact-agent.component';

import './style.scss';

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
                <Text name="ui-molecules-shortlist__id" tag="p" styling="text" fontWeight={500}>
                    {listing.id}
                </Text>
                <Text
                    name="ui-molecules-shortlist__price"
                    tag="h3"
                    styling="subheading"
                    fontWeight={600}
                >
                    {listing.attribute.priceTag}
                </Text>
                <Text
                    name="ui-molecules-shortlist__title"
                    tag="h3"
                    styling="subheading"
                    fontWeight={600}
                >
                    {listing.title}
                </Text>
                <Text
                    name="ui-molecules-shortlist__location"
                    tag="h3"
                    styling="subheading"
                    fontWeight={600}
                >
                    {listing.location}
                    {listing.agent.contact.telephone}
                </Text>
                <ContactAgent photo={listing.agent.picture} name={listing.agent.name} />
            </div>
        );
    }
}

export default Shortlist;
