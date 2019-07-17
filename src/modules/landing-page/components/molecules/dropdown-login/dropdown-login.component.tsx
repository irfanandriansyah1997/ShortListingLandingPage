import * as React from 'react';
// import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Button from '@/shared/components/atoms/button/button.component';
import Dropdown from '@/shared/components/atoms/dropdown/dropdown.component';
import './style/style.scss';

class DropdownLoginComponent extends React.Component<PropsInterface> {
    render(): React.ReactNode {
        return (
            <div className="ui-molecule-dropdown-login">
                <Dropdown
                    actionElement={(
                        <Button>
                            LOGIN
                        </Button>
                    )}
                >
                    <div className="content">
                        aaa
                    </div>
                </Dropdown>
            </div>
        );
    }
}

export default DropdownLoginComponent;
