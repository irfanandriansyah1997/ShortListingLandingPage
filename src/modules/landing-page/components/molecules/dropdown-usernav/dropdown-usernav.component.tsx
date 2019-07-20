/**
 * Dropdown User Nav Component
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.19
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import { LandingPageContext } from '@/modules/landing-page/controller';
import { PropsInterface } from './interfaces/component.interface';
import Avatar from '@/shared/components/atoms/avatar/avatar.component';
import Button from '@/shared/components/atoms/button/button.component';
import Dropdown from '@/shared/components/atoms/dropdown/dropdown.component';

import './style/style.scss';


class DropdownUsernavComponent extends React.Component<PropsInterface> {
    static propTypes = {
        profilePictureUrl: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        const { profilePictureUrl } = this.props;
        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecule-dropdown-logout">
                        <Dropdown
                            actionElement={(
                                <Avatar className="avatar" src={profilePictureUrl} alt="user profile" size={32} />
                            )}
                        >
                            <div className="ui-molecule-dropdown-logout">
                                <form onSubmit={() => context.actionSetLogout()}>
                                    <Button>
                                        LOGOUT
                                    </Button>
                                </form>
                            </div>
                        </Dropdown>
                    </div>
                )}
            </LandingPageContext.Consumer>
        );
    }
}

export default DropdownUsernavComponent;
