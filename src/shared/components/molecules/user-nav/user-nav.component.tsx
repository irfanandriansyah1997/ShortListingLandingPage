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

    constructor(props: PropsInterface) {
        super(props);

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard(e: any) {
        e.preventDefault();
        const { shareLink } = this.props;
        const dummy = document.createElement('input');

        document.body.appendChild(dummy);
        dummy.setAttribute('id', 'dummy_id');
        (document.getElementById('dummy_id') as HTMLInputElement).value = shareLink;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }

    render() {
        const { isLogin, profilePictureUrl, shareLink } = this.props;

        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecules-user-nav">
                        {isLogin === true ? (
                            <div className="ui-molecules-user-nav__login">
                                <DropdownLogin />
                            </div>
                        ) : (
                            <div className="ui-molecules-user-nav__bar">
                                <div className="shareTitle">
                                    <Text
                                        fontWeight={400}
                                        tag="h3"
                                    >
                                        Share Link :
                                    </Text>
                                </div>
                                <div className="shareLink">
                                    <div className="shareLink__text">
                                        <Text
                                            fontWeight={400}
                                            tag="p"
                                        >
                                            {shareLink}
                                        </Text>
                                    </div>

                                    <div
                                        className="shareLink__icon"
                                        onClick={this.copyToClipboard}
                                        onKeyDown={this.copyToClipboard}
                                        role="presentation"
                                    >
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
