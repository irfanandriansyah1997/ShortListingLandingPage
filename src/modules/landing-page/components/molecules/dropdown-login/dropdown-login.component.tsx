import * as React from 'react';
// import { DefaultAuthModel } from '@/store/auth/model/auth.model';
import { PropsInterface, StateTypes } from './interfaces/component.interface';
import Button from '@/shared/components/atoms/button/button.component';
import Dropdown from '@/shared/components/atoms/dropdown/dropdown.component';
import Text from '@/shared/components/atoms/text/text.component';

import './style/style.scss';


class DropdownLoginComponent extends React.Component<PropsInterface, StateTypes> {
    constructor(props: PropsInterface) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            model: ''
        };
    }

    handleSubmit() {
    }

    handleChange(event: any) {
        const { model } = this.state;
        console.log(model);
        this.setState({ model: event.target.value });
    }

    render(): React.ReactNode {
        const { model } = this.state;

        return (
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
                            name="ui-molecules-card-listing__title"
                            tag="h3"
                            styling="subheading"
                            fontWeight={600}
                        >
                            Silahkan login
                        </Text>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="username">
                                <input
                                    name="username"
                                    type="text"
                                    value={model}
                                    onChange={this.handleChange}
                                />
                                Username:
                            </label>
                        </form>
                    </div>
                </Dropdown>
            </div>
        );
    }
}

export default DropdownLoginComponent;
