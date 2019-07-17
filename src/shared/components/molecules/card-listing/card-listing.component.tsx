/**
 * Card Listing Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Card from '@/shared/components/atoms/card/card.component';
import Image from '@/shared/components/atoms/image/image.component';
import Text from '@/shared/components/atoms/text/text.component';
import DropdownComponent from '@/shared/components/molecules/dropdown/dropdown.component';

import './style/style.scss';

class CardListing extends React.Component<PropsInterface> {
    static propTypes = {
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        location: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: () => {}
    };

    render(): React.ReactNode {
        const {
            id, title, src, price, location, onClick
        } = this.props;

        return (
            <Card
                className="ui-molecules-card-listing no-ml no-mr"
                hoverType="elevate-sm"
                type="border"
                onClick={onClick}
                rounded
            >
                <Image src={src} alt={title} className="ui-molecules-card-listing__image" />
                <div className="ui-molecules-card-listing__content relative">
                    <DropdownComponent />
                    <Text
                        name="ui-molecules-card-listing__id mb-8"
                        tag="p"
                        styling="text"
                        fontWeight={500}
                    >
                        {id}
                    </Text>
                    <Text
                        name="ui-molecules-card-listing__price mb-8"
                        tag="h3"
                        styling="subheading"
                        fontWeight={600}
                    >
                        {price}
                    </Text>
                    <Text
                        name="ui-molecules-card-listing__title mb-4"
                        tag="h3"
                        styling="subheading"
                        fontWeight={600}
                    >
                        {title}
                    </Text>
                    <Text
                        name="ui-molecules-card-listing__location"
                        tag="span"
                        styling="text"
                        fontWeight={400}
                    >
                        {location}
                    </Text>
                </div>
            </Card>
        );
    }
}

export default CardListing;
