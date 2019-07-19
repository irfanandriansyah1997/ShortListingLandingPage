/**
 * Dialog Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.19
 */

import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { shallow, render } from 'enzyme';
import Dialog from '@/shared/components/atoms/dialog/dialog.component';

describe('Testing dialog component in atomic component ', () => {
    it('Test render dialog component', () => {
        const dialog = render(
            <Dialog onCloseDialog={() => {}} show={false}>
                edit
            </Dialog>
        );

        expect(dialog.hasClass('ui-atomic-dialog')).toBe(true);
    });
    it('Test render dialog if user click backdrop', () => {
        const mockFn = jest.fn();
        const dialog = shallow(
            <Dialog onCloseDialog={mockFn} show>
                edit
            </Dialog>
        );
        /**
         * Before On Click Backdrop
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Backdrop
         */
        dialog.find('.ui-atomic-dialog__backdrop').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);

        /**
         * Check type animation dialog
         */
        expect(
            dialog
                .find(CSSTransition)
                .at(1)
                .prop('classNames')
        ).toBe('fade-scale-center');
    });
});
