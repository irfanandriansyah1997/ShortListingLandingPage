/**
 * Short List Component
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import ContactAgent from '@/modules/landing-page/components/molecules/contact-agent/contact-agent.component';
import Text from '@/shared/components/atoms/text/text.component';
import TableComponent from '@/shared/components/molecules/table/table.component';
import ListingTranslator from '@/store/listing/translator/listing.translator';
import { AttributeListingTranslatorInterface } from '@/store/listing/interfaces/translator/translator.interface';

import './style.scss';
import AttributeInfo from '@/shared/components/atoms/attribute-info/attribute-info.component';

class Shortlist extends React.Component<PropsInterface> {
    static propTypes = {
        listing: PropTypes.shape({}).isRequired
    };

    get attribute(): AttributeListingTranslatorInterface[] {
        const { listing } = this.props;
        return new ListingTranslator(listing, 'attribute').translate();
    }

    render() {
        const { listing } = this.props;
        const { attribute } = this;

        return (
            <div className="ui-molecules-shortlist flex relative">
                <div className="ui-molecules-shortlist__heading">
                    <Text name="ui-molecules-shortlist__id mb-8" tag="p" styling="subheading" fontWeight={500}>
                        {listing.id}
                    </Text>
                    <Text name="ui-molecules-shortlist__price mb-16" tag="h3" styling="heading" fontWeight={600}>
                        {listing.attribute.priceTag}
                    </Text>
                    <Text name="ui-molecules-shortlist__title mb-8" tag="h3" styling="subheading" fontWeight={600}>
                        {listing.title}
                    </Text>
                    <Text name="ui-molecules-shortlist__location mb-16" tag="h3" styling="text" fontWeight={400}>
                        {listing.location}
                    </Text>
                    <div className="ui-molecules-shortlist__atrribute flex">
                        {attribute.map((item: AttributeListingTranslatorInterface) => (
                            <AttributeInfo {...item} key={`attribute-${item.name}`} title={listing.title} />
                        ))}
                    </div>
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
