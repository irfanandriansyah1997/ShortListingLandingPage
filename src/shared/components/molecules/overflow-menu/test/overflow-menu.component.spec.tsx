/**
 * Overflow Menu Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.19
 */

import * as React from 'react';
import { render, mount } from 'enzyme';
import OverflowMenu from '@/shared/components/molecules/overflow-menu/overflow-menu.component';

describe('Testing overflow menu component in molecules component ', () => {
    it('Test render overflow menu component', () => {
        const dialog = render(<OverflowMenu hide={false} onDelete={() => {}} onHide={() => {}} />);

        expect(dialog.hasClass('ui-molecules-overflow-menu')).toBe(true);
    });

    it('Test render overflow menu component with props hide is true', () => {
        const dialog = mount(<OverflowMenu hide onDelete={() => {}} onHide={() => {}} />);
        dialog.setState({ opened: true });

        expect(dialog.find('.ui-molecules-overflow-menu__hide').text()).toBe('Unhide');
    });

    it('Test render overflow menu component with props hide is false', () => {
        const dialog = mount(<OverflowMenu hide={false} onDelete={() => {}} onHide={() => {}} />);
        dialog.setState({ opened: true });

        expect(dialog.find('.ui-molecules-overflow-menu__hide').text()).toBe('Hide');
    });

    it('Test render overflow menu if on delete listing', () => {
        const mockFn = jest.fn();
        const menu = mount(<OverflowMenu hide={false} onDelete={mockFn} onHide={() => {}} />);

        /**
         * Before On Click Delete Button
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Icon To Show Dropdown
         */
        menu.find('Icon').simulate('click');
        expect(menu.state('opened')).toBe(true);

        /**
         * On Click Icon Menu Delete
         */
        menu.find('.ui-molecules-overflow-menu__delete').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(menu.state('opened')).toBe(false);
    });

    it('Test render overflow menu if on hide listing', () => {
        const mockFn = jest.fn();
        const menu = mount(<OverflowMenu hide={false} onDelete={() => {}} onHide={mockFn} />);

        /**
         * Before On Click Delete Button
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Icon To Show Dropdown
         */
        menu.find('Icon').simulate('click');
        expect(menu.state('opened')).toBe(true);

        /**
         * On Click Icon Menu Hide
         */
        menu.find('.ui-molecules-overflow-menu__hide').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(menu.state('opened')).toBe(false);
    });
});
