import * as React from 'react';
import * as PropTypes from 'prop-types';
import UserNav from '@/components/user-nav/user-nav.component';

import './style.scss';

interface HeaderProps {
    title: string;
}

class Header extends React.Component<HeaderProps> {
    static propTypes = {
        title: PropTypes.func.isRequired
    };

    render() {
        const { title } = this.props;

        return (
            <div
                className="header"
            >
                <div className="header__title">
                    { title }
                </div>
                <UserNav isLogin />
            </div>
        );
    }
}

export default Header;
