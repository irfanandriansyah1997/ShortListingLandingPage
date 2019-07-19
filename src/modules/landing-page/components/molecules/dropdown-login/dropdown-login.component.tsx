/**
 * Dropdown Login Component
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.17
 */

import * as React from 'react';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import { PropsInterface, StateTypes } from './interfaces/component.interface';
import { LandingPageContext } from '@/modules/landing-page/controller';
import Button from '@/shared/components/atoms/button/button.component';
import Dropdown from '@/shared/components/atoms/dropdown/dropdown.component';
import Text from '@/shared/components/atoms/text/text.component';

import './style/style.scss';


class DropdownLoginComponent extends React.Component<PropsInterface, StateTypes> {
    constructor(props: PropsInterface) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            model: {
                username: '',
                password: '',
                email: ''
            }
        };
    }

    handleChange(event: any) {
        const { name, value } = event.target;
        const { model } = this.state;

        this.setState({
            model: {
                ...model,
                [`${name}`]: value
            }
        });
    }

    render(): React.ReactNode {
        const { model } = this.state;

        return (
            <LandingPageContext.Consumer>
                {(context: ControllerProps) => (
                    <div className="ui-molecule-dropdown-login">
                        <Dropdown
                            actionElement={(
                                <Button>
                                    LOGIN
                                </Button>
                            )}
                        >
                            <div className="ui-molecule-dropdown-login__form">
                                <Text
                                    align="center"
                                    name="ui-molecule-dropdown-login__title"
                                    tag="h3"
                                    styling="text"
                                    fontWeight={600}
                                >
                                    Silahkan login
                                </Text>
                                <form onSubmit={() => context.actionSetLogin(model)}>
                                    <label htmlFor="username">
                                        <Text
                                            name="ui-molecule-dropdown-login__label"
                                            tag="h3"
                                            styling="text"
                                            fontWeight={600}
                                        >
                                            Username
                                        </Text>
                                        <input
                                            className="ui-molecule-dropdown-login__input"
                                            name="username"
                                            placeholder="Masukan username"
                                            type="text"
                                            value={model.username}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label htmlFor="password">
                                        <Text
                                            name="ui-molecule-dropdown-login__label"
                                            tag="h3"
                                            styling="text"
                                            fontWeight={600}
                                        >
                                            Password
                                        </Text>
                                        <input
                                            className="ui-molecule-dropdown-login__input"
                                            name="password"
                                            placeholder="Masukan password"
                                            type="password"
                                            value={model.password}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <Button>
                                        LOGIN
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

export default DropdownLoginComponent;
