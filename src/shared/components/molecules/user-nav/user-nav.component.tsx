import * as React from 'react';
import * as PropTypes from 'prop-types';
import Button from '@/shared/components/atoms/button/button.component';
import Text from '@/shared/components/atoms/text/text.component';

import './style.scss';

interface UserNavProps {
    isLogin: boolean;
    shareLink: string;
}

class UserNav extends React.Component<UserNavProps> {
    static propTypes = {
        isLogin: PropTypes.func.isRequired,
        shareLink: PropTypes.func.isRequired
    };

    render() {
        const { isLogin, shareLink } = this.props;
        return (
            <div className="user-nav">
                {isLogin === false ? (
                    <div className="user-nav__login">
                        <Button> LOGIN </Button>
                    </div>
                ) : (
                    <div className="user-nav__bar">
                        <div className="shareTitle">
                            <Text> Share Link : </Text>
                        </div>
                        <div className="shareLink">
                            <div className="shareLink__text">
                                <Text>
                                    { shareLink }
                                </Text>
                            </div>
                            <div className="shareLink__icon">copy</div>
                        </div>
                        <div className="profileImage" />
                    </div>
                )}
            </div>
        );
    }
}

export default UserNav;
