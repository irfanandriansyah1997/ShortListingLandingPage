/**
 * Header Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.11
 */

import * as React from 'react';
import { mount } from 'enzyme';
import Header from '@/shared/components/molecules/header/header.component';
import { PropsInterface } from '@/shared/components/molecules/header/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        isLogin: true,
        title: 'Rumah Dijual Di Bandung'
    }
];

describe('Testing header component in molecules component ', () => {
    it('Test render header component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const header = mount(<Header {...item} />);

            expect(header.find('Text[name="ui-molecules-header__title"]').text()).toBe(item.title);
            expect(header.find('UserNav').exists()).toBeTruthy();

            return true;
        });
    });
});
