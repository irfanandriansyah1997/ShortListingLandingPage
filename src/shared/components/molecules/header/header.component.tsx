import * as React from 'react';
import * as PropTypes from 'prop-types';
import Text from '@/shared/components/atoms/text/text.component';
import UserNav from '@/shared/components/molecules/user-nav/user-nav.component';

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
                    <Text textType="h6">
                        { title }
                    </Text>
                </div>
                <UserNav
                    isLogin
                    shareLink="www.share.com/link"
                />
            </div>
        );
    }
}

export default Header;
