/**
 * Header Component
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.18
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Text from '@/shared/components/atoms/text/text.component';
import UserNav from '@/shared/components/molecules/user-nav/user-nav.component';
import { PropsInterface } from './interfaces/component.interface';

import './style/style.scss';


class Header extends React.Component<PropsInterface> {
    static propTypes = {
        isLogin: PropTypes.bool,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        isLogin: false
    }

    render() {
        const { isLogin, title } = this.props;
        const profilePictureUrl = 'https://img.crocdn.co.uk/images/products2/pl/20/00/02/29/pl2000022950.jpg';

        return (
            <div className="ui-molecules-header flex fixed">
                <div className="ui-molecules-header__content flex">
                    <Text
                        tag="h4"
                        styling="heading"
                        fontWeight={600}
                        name="ui-molecules-header__title"
                    >
                        {title}
                    </Text>

                    <UserNav
                        isLogin={isLogin}
                        profilePictureUrl={profilePictureUrl}
                        shareLink="www.share.com/link"
                    />
                </div>
            </div>
        );
    }
}

export default Header;
