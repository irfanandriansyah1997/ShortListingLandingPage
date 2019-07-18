import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LandingPageContext } from '@/modules/landing-page/controller';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import CardListing from '@/shared/components/molecules/card-listing/card-listing.component';
import { PropsInterface } from '@/shared/components/molecules/sidebar/interfaces/component.interface';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

import './style/style.scss';

class Sidebar extends React.Component<PropsInterface> {
    static propTypes = {
        listing: PropTypes.shape({
            count: PropTypes.number,
            properties: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        onDelete: PropTypes.func.isRequired
    };

    render(): React.ReactNode {
        const { listing, onDelete } = this.props;
        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecules-sidebar flex fixed">
                        {listing.properties.map((item: ListingInterface, index: number) => (
                            <CardListing
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.attribute.priceTag}
                                src={item.mainPicture}
                                location={item.location}
                                hide={item.hide}
                                active={listing.selected === index}
                                onClick={() => context.actionSetActiveListing(item.id)}
                                onDelete={() => onDelete(item.id)}
                                onHide={() => console.log(`hide ${item.id}`)}
                            />
                        ))}
                    </div>
                )}
            </LandingPageContext.Consumer>
        );
    }
}

export default Sidebar;
