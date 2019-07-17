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
<<<<<<< HEAD
import Icon from '@/shared/components/atoms/icon/icon.component';
import OverflowMenu from '@/shared/components/molecules/overflow-menu/overflow-menu.component';
import { convert_obj_to_string } from '@/shared/utils/string.utils';
=======
import OverflowMenuComponent from '@/shared/components/molecules/overflow-menu/overflow-menu.component';
>>>>>>> feat(component): Add and improve components.

import './style/style.scss';

class CardListing extends React.Component<PropsInterface> {
    static propTypes = {
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        hide: PropTypes.bool.isRequired,
        active: PropTypes.bool.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        location: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        onHide: PropTypes.func,
        onDelete: PropTypes.func
    };

    static defaultProps = {
        onClick: () => {},
        onHide: () => {},
        onDelete: () => {}
    };

    constructor(props: PropsInterface) {
        super(props);

        this.onClickCard = this.onClickCard.bind(this);
    }

    onClickCard(): void {
        const { onClick } = this.props;

        if (onClick) {
            onClick();
        }
    }

    get className(): string {
        const { hide } = this.props;

        return convert_obj_to_string({
            'ui-molecules-card-listing': true,
            'ui-molecules-card-listing--hide': hide,
            'no-ml': true,
            'no-mr': true
        });
    }

    render(): React.ReactNode {
        const {
            id, title, src, price, location, onDelete, onHide, hide, active
        } = this.props;
        const { className } = this;

        return (
            <Card
                className={className}
                hoverType="elevate-sm"
                type="border"
                onClick={this.onClickCard}
                active={active}
                rounded
            >
                <Image src={src} alt={title} onClick={this.onClickCard} className="ui-molecules-card-listing__image" />
                <div className="ui-molecules-card-listing__content relative">
                    <div className="ui-molecules-card-listing__action absolute flex">
                        {hide ? (
                            <button type="submit" className="ui-molecules-card-listing__action__show-listing flex">
                                <Icon>visibility_off</Icon>
                            </button>
                        ) : null}
                        <OverflowMenu hide={hide} onDelete={onDelete} onHide={onHide} />
                    </div>
                    <Text
                        name="ui-molecules-card-listing__id mb-8"
                        tag="p"
                        styling="text"
                        fontWeight={500}
                        onClick={this.onClickCard}
                    >
                        {id}
                    </Text>
                    <Text
                        name="ui-molecules-card-listing__price mb-8"
                        tag="h3"
                        styling="subheading"
                        fontWeight={600}
                        onClick={this.onClickCard}
                    >
                        {price}
                    </Text>
                    <Text
                        name="ui-molecules-card-listing__title mb-4"
                        tag="h3"
                        styling="subheading"
                        fontWeight={600}
                        onClick={this.onClickCard}
                    >
                        {title}
                    </Text>
                    <Text
                        name="ui-molecules-card-listing__location"
                        tag="span"
                        styling="text"
                        fontWeight={400}
                        onClick={this.onClickCard}
                    >
                        {location}
                    </Text>
                </div>
            </Card>
        );
    }
}

export default CardListing;
