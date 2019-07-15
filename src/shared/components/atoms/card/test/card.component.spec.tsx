/**
 * Card Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import { render } from 'enzyme';
import Card from '../card.component';
import { PropsInterface } from '@/shared/components/atoms/card/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        hoverType: 'default-1',
        type: 'flat',
        rounded: false
    },
    {
        hoverType: 'elevate-sm',
        type: 'base',
        rounded: false
    },
    {
        hoverType: 'elevate-xs',
        type: 'border',
        rounded: true
    }
];

describe('Testing card component in atomic component ', () => {
    it('Test render card component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const card = render(<Card {...item}>Content Card</Card>);

            expect(card.hasClass('ui-atomic-card')).toBe(true);
            expect(card.hasClass(`ui-atomic-card--type-${item.type}`)).toBe(true);
            expect(card.hasClass('ui-atomic-card--rounded')).toBe(item.rounded);
            expect(card.hasClass(`shadow--effect-${item.hoverType}`)).toBe(true);
            expect(card.text()).toBe('Content Card');

            return true;
        });
    });
});
