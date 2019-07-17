import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface, StateTypes } from './interfaces/component.interface';
import './style/style.scss';

class DropdownComponent extends React.Component<PropsInterface, StateTypes> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string,
            PropTypes.func
        ]).isRequired,
        actionElement: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string,
            PropTypes.func
        ]).isRequired
    }

    constructor(props: PropsInterface) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            opened: false
        };
    }

    get className(): string {
        return 'ui-atomic-dropdown';
    }

    handleClick() {
        const { opened } = this.state;

        this.setState({
            opened: !opened
        });
    }

    render(): React.ReactNode {
        const { children, actionElement } = this.props;
        const { opened } = this.state;

        return (
            <div className="ui-atomic-dropdown">
                <div
                    className="ui-atomic-dropdown__toggle"
                    onClick={this.handleClick}
                    onKeyDown={this.handleClick}
                    role="presentation"
                >
                    {actionElement}
                </div>
                <div className="ui-atomic-dropdown__content">
                    { opened ? children : null}
                </div>
            </div>
        );
    }
}

export default DropdownComponent;
