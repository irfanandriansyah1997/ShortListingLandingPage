/**
 * Overflow Menu Component
 * @author Okky M. B. <okky@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Icon from '@/shared/components/atoms/icon/icon.component';

import './style/style.scss';

class OverflowMenuComponent extends React.Component<PropsInterface> {
    static propTypes = {
        hide: PropTypes.bool.isRequired,
        onHide: PropTypes.func,
        onDelete: PropTypes.func
    };

    static defaultProps = {
        onHide: () => {},
        onDelete: () => {}
    };

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.actionDelete = this.actionDelete.bind(this);
        this.actionHide = this.actionHide.bind(this);
    }

    state = {
        opened: false
    };

    showMenu() {
        const { hide } = this.props;
        return (
            <div className="ui-atomic-dropdown--style-body absolute">
                <div role="button" onClick={this.actionHide} onKeyPress={this.actionHide} tabIndex={0}>
                    {hide ? 'Unhide' : 'Hide'}
                </div>
                <div role="button" onClick={this.actionDelete} onKeyDown={this.actionDelete} tabIndex={0}>
                    Delete
                </div>
            </div>
        );
    }

    actionHide(): void {
        const { onHide } = this.props;
        this.handleClick();

        if (onHide) {
            onHide();
        }
    }

    actionDelete(): void {
        const { onDelete } = this.props;
        this.handleClick();

        if (onDelete) {
            onDelete();
        }
    }

    handleClick(): void {
        const { opened } = this.state;

        this.setState({
            opened: !opened
        });
    }

    render(): React.ReactNode {
        const { opened } = this.state;
        return (
            <div className="ui-molecules-overflow-menu">
                <span id="clickableAwesomeFont" className="absolute">
                    <Icon onClick={this.handleClick}>more_horiz</Icon>
                </span>
                {opened ? this.showMenu() : null}
            </div>
        );
    }
}

export default OverflowMenuComponent;
