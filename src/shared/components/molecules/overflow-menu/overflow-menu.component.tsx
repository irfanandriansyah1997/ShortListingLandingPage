import * as React from 'react';
import Icon from '@/shared/components/atoms/icon/icon.component';
import './style/style.scss';

class OverflowMenuComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        opened: false
    };

    showMenu() {
        return (
            <div className="ui-atomic-dropdown--style-body absolute">
                <div role="button" onClick={() => this.actionHide} onKeyPress={() => this.actionHide} tabIndex={0}>
                    Hide
                </div>
                <div role="button" onClick={this.actionDelete} onKeyDown={this.actionDelete} tabIndex={0}>
                    Delete
                </div>
            </div>
        );
    }

    actionHide() {
        // TODO ACTION HIDE
    }

    actionDelete() {
        // TODO ACTION DELETE
    }

    handleClick(data: any) {
        this.setState({
            opened: !data.opened
        });
    }

    render(): React.ReactNode {
        const { opened } = this.state;
        return (
            <div className="ui-molecules-overflow-menu absolute">
                <span id="clickableAwesomeFont" className="absolute">
                    <Icon onClick={() => this.handleClick(this.state)}>more_horiz</Icon>
                </span>
                {opened ? this.showMenu() : null}
            </div>
        );
    }
}

export default OverflowMenuComponent;
