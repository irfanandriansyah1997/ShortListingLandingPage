/**
 * Delete Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface, StateInterface } from './interfaces/component.interface';
import Dialog from '@/shared/components/atoms/dialog/dialog.component';
import { DialogType } from '@/shared/components/atoms/dialog/interfaces/component.interface';
import Text from '@/shared/components/atoms/text/text.component';
import Button from '@/shared/components/atoms/button/button.component';

import './style/style.scss';

class DeleteDialog extends React.Component<PropsInterface, StateInterface> {
    static propTypes = {
        onCloseDialog: PropTypes.func.isRequired,
        onAcceptDelete: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired
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
    }

    render(): React.ReactNode {
        const { onCloseDialog, onAcceptDelete } = this.props;
        const { show } = this.state;
        return (
            <Dialog
                className="ui-molecules-delete-dialog"
                type={DialogType.POPUP}
                onCloseDialog={onCloseDialog}
                show={show}
            >
                <Text styling="subheading" fontWeight={400} tag="p" align="center">
                    Apakah Anda yakin akan menghapus listing ini?
                </Text>
                <div className="ui-molecules-delete-dialog__button mt-25">
                    <Button styling="border" onClick={onCloseDialog}>
                        Tidak
                    </Button>
                    <Button onClick={onAcceptDelete}>Ya</Button>
                </div>
            </Dialog>
        );
    }
}

export default DeleteDialog;
