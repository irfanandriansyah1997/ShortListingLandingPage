import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import { LandingPageContext } from '@/modules/landing-page/controller';
import { PropsInterface, StateTypes } from './interfaces/component.interface';
import DropdownLogin from '@/modules/landing-page/components/molecules/dropdown-login/dropdown-login.component';
import Avatar from '@/shared/components/atoms/avatar/avatar.component';
import Icon from '@/shared/components/atoms/icon/icon.component';
import Text from '@/shared/components/atoms/text/text.component';
import { copyToClipboard } from '@/shared/helper/clipboard-copy';

import './style/style.scss';

class UserNav extends React.Component<PropsInterface, StateTypes> {
    static propTypes = {
        isLogin: PropTypes.bool.isRequired,
        profilePictureUrl: PropTypes.string.isRequired,
        shareLink: PropTypes.string.isRequired
    };

    constructor(props: PropsInterface) {
        super(props);

        this.handleCopy = this.handleCopy.bind(this);

        this.state = {
            copied: false
        };
    }

    handleCopy(e: any) {
        e.preventDefault();
        const { shareLink } = this.props;

        copyToClipboard(shareLink);
        this.setState({
            copied: true
        });
        this.showCopyPopup();
        setTimeout(() => {
            this.setState({ copied: false });
        }, 1000);
    }

    showCopyPopup() {
        return (
            <div className="ui-atomic-copy-popup">
                <Text
                    fontWeight={500}
                    tag="span"
                >
                    URL copied to clipboard
                </Text>
            </div>
        );
    }

    render() {
        const { isLogin, profilePictureUrl, shareLink } = this.props;
        const { copied } = this.state;

        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecules-user-nav">
                        {isLogin === false ? (
                            <DropdownLogin />
                        ) : (
                            <div className="ui-molecules-user-nav__bar">
                                <div className="shareTitle">
                                    <Text fontWeight={400} tag="h3">
                                        Share Link :
                                    </Text>
                                </div>
                                <div className="shareLink">
                                    <div className="shareLink__text">
                                        <Text fontWeight={400} tag="p">
                                            {shareLink}
                                        </Text>
                                    </div>

                                    <div
                                        className="shareLink__icon"
                                        onClick={this.handleCopy}
                                        onKeyDown={this.handleCopy}
                                        role="presentation"
                                    >
                                        <Icon>filter_none</Icon>
                                        {copied ? this.showCopyPopup() : null}
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
