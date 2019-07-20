/**
 * Dialog Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.19
 */

import * as React from 'react';
import { render, shallow } from 'enzyme';
import DeleteDialog from '@/modules/landing-page/components/molecules/delete-dialog/delete-dialog.component';

describe('Testing delete dialog component in atomic component ', () => {
    it('Test render delete dialog component', () => {
        const dialog = render(
            <DeleteDialog onCloseDialog={() => {}} show={false} onAcceptDelete={() => {}}>
                edit
            </DeleteDialog>
        );

        expect(dialog.hasClass('ui-molecules-delete-dialog')).toBe(true);
    });

    it('Test render dialog if user click backdrop', () => {
        const mockFn = jest.fn();
        const dialog = shallow(
            <DeleteDialog onCloseDialog={mockFn} show={false} onAcceptDelete={() => {}}>
                edit
            </DeleteDialog>
        );
        /**
         * Before On Click Backdrop
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Backdrop
         */
        dialog.find('Button[styling="border"]').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(dialog.state('show')).toBe(false);
    });
});
