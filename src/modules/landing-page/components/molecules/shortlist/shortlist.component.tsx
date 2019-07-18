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
import CommentForm from '@/modules/landing-page/components/molecules/comment-form/comment-form.component';
import Text from '@/shared/components/atoms/text/text.component';
import Carousel from '@/shared/components/molecules/carousel/carousel.component';
import Alert from '@/shared/components/molecules/alert/alert.component';
import Table from '@/shared/components/molecules/table/table.component';
import TextExpand from '@/shared/components/molecules/text-expand/text-expand.component';
import { PropsInterface as AlertPropTypes } from '@/shared/components/molecules/alert/interfaces/component.interface';
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

    get alertPropertyHide(): AlertPropTypes {
        /* eslint-disable */
        return {
            description:
                'Setiap listing yang disembunyikan tidak akan muncul dalam shortlist dan hanya kamu saja yang dapat melihat listing ini.',
            theme: 'default',
            title: 'Listing ini disembunyikan'
        };
        /* eslint-enable */
    }

    render() {
        const { listing } = this.props;
        const { attribute, alertPropertyHide } = this;

        return (
            <div className="ui-molecules-shortlist flex relative">
                {listing.hide ? <Alert {...alertPropertyHide} /> : null}
                <Carousel images={listing.pictures} />
                <div className="ui-molecules-shortlist__heading mt-25">
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
                    <Table title="Detail Property" dataRow={listing.formattedAttributes} />
                </div>
                <TextExpand content={listing.description} title="Deskripsi" />
                <CommentForm title="Catatan" placeholder="Tulis catatan disini..." />
                <ContactAgent photo={listing.agent.picture} name={listing.agent.name} />
            </div>
        );
    }
}

export default Shortlist;
