/**
 * Empty State Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.19
 */

import * as React from 'react';
import { mount } from 'enzyme';
import EmptyState, { PropsInterface } from '@/shared/helper/empty-state.helper';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        count: 0
    },
    {
        count: 1
    }
];

describe('Testing empty state component in helper ', () => {
    it('Test render empty state component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const emptyState = mount(<EmptyState {...item} />);

            if (item.count > 0) {
                expect(emptyState.find('.ui-molecules-empty-state__text').exists()).toBeFalsy();
            } else {
                expect(emptyState.find('.ui-molecules-empty-state__text').exists()).toBeTruthy();
            }

            return true;
        });
    });
});
