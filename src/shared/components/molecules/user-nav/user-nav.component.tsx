import * as React from 'react';
import * as PropTypes from 'prop-types';
import Button from '@/shared/components/atoms/button/button.component';
import Avatar from '@/shared/components/atoms/avatar/avatar.component';
import Text from '@/shared/components/atoms/text/text.component';
import Icon from '@/shared/components/atoms/icon/icon.component';

import './style.scss';

interface UserNavProps {
    isLogin: boolean;
    profilePictureUrl: string;
    shareLink: string;
}

class UserNav extends React.Component<UserNavProps> {
    static propTypes = {
        isLogin: PropTypes.bool.isRequired,
        profilePictureUrl: PropTypes.string.isRequired,
        shareLink: PropTypes.string.isRequired
    };

    render() {
        const { isLogin, profilePictureUrl, shareLink } = this.props;
        return (
            <div className="user-nav">
                {isLogin === false ? (
                    <div className="user-nav__login">
                        <Button> LOGIN </Button>
                    </div>
                ) : (
                    <div className="user-nav__bar">
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
                                <Icon>file_copy</Icon>
                            </div>
                        </div>
                        <div className="profileImage">
                            <Avatar
                                className="avatar"
                                src={profilePictureUrl}
                                alt="user profile"
                                size={32}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default UserNav;
