import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import { LandingPageContext } from '@/modules/landing-page/controller';
import { PropsInterface } from './interfaces/component.interface';
import DropdownLogin from '@/modules/landing-page/components/molecules/dropdown-login/dropdown-login.component';
import Avatar from '@/shared/components/atoms/avatar/avatar.component';
import Icon from '@/shared/components/atoms/icon/icon.component';
import Text from '@/shared/components/atoms/text/text.component';

import './style/style.scss';

class UserNav extends React.Component<PropsInterface> {
    static propTypes = {
        isLogin: PropTypes.bool.isRequired,
        profilePictureUrl: PropTypes.string.isRequired,
        shareLink: PropTypes.string.isRequired
    };

    render() {
        const { isLogin, profilePictureUrl, shareLink } = this.props;

        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecules-user-nav">
                        {isLogin === false ? (
                            <div className="ui-molecules-user-nav__login">
                                <DropdownLogin />
                            </div>
                        ) : (
                            <div className="ui-molecules-user-nav__bar">
                                <div className="shareTitle">
                                    <Text tag="h3" fontWeight={400}>
                                        Share Link :
                                    </Text>
                                </div>
                                <div className="shareLink">
                                    <div className="shareLink__text">
                                        <Text tag="p" fontWeight={400}>
                                            {shareLink}
                                        </Text>
                                    </div>

                                    <div className="shareLink__icon">
                                        <Icon>filter_none</Icon>
                                    </div>
                                </div>
                                <div className="profileImage">
                                    <Avatar className="avatar" src={profilePictureUrl} alt="user profile" size={32} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </LandingPageContext.Consumer>
        );
    }
}

export default UserNav;
