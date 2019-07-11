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
        title: PropTypes.string.isRequired
    };

    render() {
        const { title } = this.props;
        const profilePictureUrl = 'https://img.crocdn.co.uk/images/products2/pl/20/00/02/29/pl2000022950.jpg';

        return (
            <div className="header">
                <div className="header__content">
                    <div className="header__title">
                        <Text textType="h6">
                            { title }
                        </Text>
                    </div>
                    <UserNav
                        isLogin
                        profilePictureUrl={profilePictureUrl}
                        shareLink="www.share.com/link"
                    />
                </div>
                <hr />
            </div>
        );
    }
}

export default Header;
