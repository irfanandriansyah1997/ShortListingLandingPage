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

class LandingPageControler extends React.Component<Props> {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

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
            authModel: this.authModel,
            listingModel: this.listingModel
        };
    }

    actionSetLogin(user: AuthModelInterface): void {
        const { authModel } = this.props;
        authModel.action.login(user);
    }

    actionSetLogout(): void {
        const { authModel } = this.props;
        authModel.action.logout();
    }

    render(): React.ReactNode {
        return <Views {...this.controllerProps} />;
    }
}

export default LandingPageControler;
