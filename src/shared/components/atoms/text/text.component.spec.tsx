/**
 * Icon Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.11
 */

import * as React from 'react';
import { render } from 'enzyme';
import Text from './text.component';
import { PropsInterface } from '@/shared/components/atoms/text/interfaces/component.interface';

require('config/enzyme.config');

const FONT_WEIGHT = {
    300: 'light',
    400: 'normal',
    500: 'medium',
    600: 'semibold',
    700: 'bold'
};

const FIXTURE: PropsInterface[] = [
    {
        styling: 'heading',
        tag: 'h1',
        fontWeight: 300,
        align: 'center',
        children: 'Text Heading'
    }
];

describe('Testing text component in atomic component ', () => {
    it('Test render icon material component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const icon = render(<Text {...item} />);

            expect(icon.text()).toContain('Text Heading');
            expect(icon.hasClass('ui-atomic-text')).toBe(true);
            expect(icon.hasClass(`ui-atomic-text--style-${item.styling}`)).toBe(true);
            expect(
                icon.hasClass(`ui-atomic-text--font-weight-${FONT_WEIGHT[item.fontWeight]}`)
            ).toBe(true);
            expect(icon.hasClass(`ui-atomic-text--align-${item.align}`)).toBe(true);

            return true;
        });
    });
});
