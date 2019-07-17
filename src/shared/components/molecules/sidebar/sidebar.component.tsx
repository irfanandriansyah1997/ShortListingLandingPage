import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LandingPageContext } from '@/modules/landing-page/controller';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import CardListing from '@/shared/components/molecules/card-listing/card-listing.component';
import { PropsInterface } from '@/shared/components/molecules/sidebar/interfaces/component.interface';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';

import './style/style.scss';
import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';

class Sidebar extends React.Component<PropsInterface> {
    static propTypes = {
        listing: PropTypes.shape({
            count: PropTypes.number,
            properties: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired
    };

    render(): React.ReactNode {
        const { listing } = this.props;
        const param: AuthModelInterface = {
            email: 'ghaghozu',
            password: 'asasaskhuih1ue',
            username: 'gha'
        };

        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecules-sidebar flex fixed">
                        <button type="submit" onClick={() => context.actionSetLogin(param)}>
                            Login
                        </button>
                        {listing.properties.map((item: ListingInterface) => (
                            <CardListing
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.attribute.priceTag}
                                src={item.mainPicture}
                                location={item.location}
                            />
                        ))}
                    </div>
                )}
            </LandingPageContext.Consumer>
        );
    }
}

export default Sidebar;
