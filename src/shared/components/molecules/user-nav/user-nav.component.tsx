/**
 * Landing Page View
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.12
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface, StateTypes } from './interfaces/component.interface';
import { copyToClipboard } from '@/shared/helper/clipboard-copy';
import DropdownLogin from '@/modules/landing-page/components/molecules/dropdown-login/dropdown-login.component';
import DropdownUsernav from '@/modules/landing-page/components/molecules/dropdown-usernav/dropdown-usernav.component';
// import Avatar from '@/shared/components/atoms/avatar/avatar.component';
import Icon from '@/shared/components/atoms/icon/icon.component';
import Text from '@/shared/components/atoms/text/text.component';


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
            <div className="ui-molecules-user-nav">
                {isLogin === false ? (
                    <DropdownLogin />
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
                                onClick={this.handleCopy}
                                onKeyDown={this.handleCopy}
                                role="presentation"
                            >
                                <Icon>filter_none</Icon>
                                {copied ? this.showCopyPopup() : null}
                            </div>
                        </div>
                        <div className="profileImage">
                            <DropdownUsernav profilePictureUrl={profilePictureUrl} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default UserNav;
