/**
 * Dialog Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.01
 */

/**
 * Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.18
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { StateInterface, PropsInterface, DialogType } from './interfaces/component.interface';
import { convert_obj_to_string } from '@/shared/utils/string.utils';

import './style/style.scss';

class Dialog extends React.PureComponent<PropsInterface, StateInterface> {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
        type: PropTypes.oneOf([DialogType.POPUP]),
        show: PropTypes.bool.isRequired,
        onCloseDialog: PropTypes.func.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        type: DialogType.POPUP,
        className: ''
    };

    static getDerivedStateFromProps(props: PropsInterface, state: StateInterface) {
        if (props.show !== state.show) {
            document.body.style.overflow = props.show ? 'hidden' : 'initial';

            return {
                show: props.show
            };
        }

        return null;
    }

    constructor(props: PropsInterface) {
        super(props);
        const { show } = props;

        this.state = {
            show
        };
        this.setCloseDialog = this.setCloseDialog.bind(this);
    }

    get className(): string {
        const { type, className } = this.props;

        return convert_obj_to_string({
            [`${className}`]: true,
            'ui-atomic-dialog': true,
            'ui-atomic-dialog--type-popup': type === DialogType.POPUP
        });
    }

    setCloseDialog(): void {
        const { onCloseDialog } = this.props;

        this.setState({ show: false }, () => {
            onCloseDialog();
        });
    }

    render(): React.ReactNode {
        const { show } = this.state;
        const { type, children } = this.props;
        const { className } = this;

        return (
            <CSSTransition in={show} appear timeout={600} classNames="fade">
                <div className={className}>
                    <CSSTransition
                        in={show}
                        appear
                        timeout={300}
                        classNames={type === DialogType.POPUP ? 'fade-scale-center' : 'slide-down'}
                    >
                        <div className="ui-atomic-dialog__content absolute flex no-m">{children}</div>
                    </CSSTransition>
                    <div
                        className="ui-atomic-dialog__backdrop"
                        onClick={this.setCloseDialog}
                        onKeyDown={this.setCloseDialog}
                        role="button"
                        tabIndex={0}
                    />
                </div>
            </CSSTransition>
        );
    }
}

export default Dialog;
