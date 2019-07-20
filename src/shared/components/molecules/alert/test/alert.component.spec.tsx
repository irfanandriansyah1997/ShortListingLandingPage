/**
 * Alert Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.19
 */

/* eslint-disable */

import * as React from 'react';
import { render, mount } from 'enzyme';
import Alert from '@/shared/components/molecules/alert/alert.component';
import { PropsInterface } from '@/shared/components/molecules/alert/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        description: 'text description',
        icon: 'edit',
        title: 'text title',
        theme: 'default'
    }
];

describe('Testing alert component in alert component ', () => {
    it('Test render alert component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const alertRender = render(<Alert {...item} />);
            const alertMount = mount(<Alert {...item} />);

            expect(alertRender.hasClass('ui-molecules-alert')).toBe(true);
            expect(alertRender.hasClass('ui-molecules-alert--theme-default')).toBe(true);
            expect(alertMount.find('Icon').text()).toBe(item.icon);
            expect(alertMount.find('Text[tag="h5"]').text()).toBe(item.title);
            expect(alertMount.find('Text[tag="p"]').text()).toBe(item.description);

            return true;
        });
    });
});
