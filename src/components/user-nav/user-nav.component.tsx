import * as React from 'react';
import * as PropTypes from 'prop-types';

import './style.scss';

interface UserNavProps {
    isLogin: boolean;
}

class UserNav extends React.Component<UserNavProps> {
    static propTypes = {
        isLogin: PropTypes.func.isRequired
    };

    render() {
        const { isLogin } = this.props;
        return (
            <div
                className="user-nav"
            >
                {
                    isLogin === false
                        ? (
                            <div className="user-nav__login">
                                <button className="button" type="button">LOGIN</button>
                            </div>
                        )
                        : (
                            <div className="user-nav__bar">
                                <div className="shareTitle">
                                    Share Link :
                                </div>
                                <div className="shareLink">
                                    <div className="shareLink__text">
                                        www.url.com/share
                                    </div>
                                    <div className="shareLink__icon">
                                        copy
                                    </div>
                                </div>
                                <div className="profileImage" />
                            </div>
                        )
                }
            </div>
        );
    }
}

export default UserNav;
