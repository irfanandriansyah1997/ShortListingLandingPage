/**
 * Landing Page Controller
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import { Props } from '@/modules/landing-page/interfaces/viewmodel.interface';
import { propTypes, defaultProps } from '@/modules/landing-page/view-model';
import Views from '@/modules/landing-page/views';
import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';
import { ControllerProps } from '../interfaces/controller.interface';
import { ListingListInterface } from '@/store/listing/interfaces/listing.interface';

export const LandingPageContext = React.createContext<ControllerProps | null>(null);

class LandingPageControler extends React.Component<Props> {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    constructor(props: Props) {
        super(props);

        this.actionSetLogin = this.actionSetLogin.bind(this);
        this.actionSetLogout = this.actionSetLogout.bind(this);
        this.actionSetActiveListing = this.actionSetActiveListing.bind(this);
    }

    get authModel(): AuthModelInterface {
        const { authModel } = this.props;

        return authModel.model;
    }

    get listingModel(): ListingListInterface {
        const { landingPageModel } = this.props;

        return landingPageModel.model;
    }

    get controllerProps(): ControllerProps {
        return {
            actionSetLogin: this.actionSetLogin,
            actionSetLogout: this.actionSetLogout,
            actionSetActiveListing: this.actionSetActiveListing,
            authModel: this.authModel,
            listingModel: this.listingModel
        };
    }

    actionSetLogin(user: AuthModelInterface): void {
        const { authModel } = this.props;
        authModel.action.login(user);
    }

    actionSetActiveListing(listingID: number | string): void {
        console.log(listingID);
    }

    actionSetLogout(): void {
        const { authModel } = this.props;
        authModel.action.logout();
    }

    render(): React.ReactNode {
        return (
            <LandingPageContext.Provider value={this.controllerProps}>
                <Views {...this.controllerProps} />
            </LandingPageContext.Provider>
        );
    }
}

export default LandingPageControler;
