/**
 * Button Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import { render } from 'enzyme';
import Button from '../button.component';

require('config/enzyme.config');

describe('Testing button component in atomic component ', () => {
    it('Test render button component', () => {
        const image = render(<Button>This is button</Button>);

        expect(image.hasClass('ui-atomic-button')).toBe(true);
        expect(image.hasClass('ui-atomic-button--style-default')).toBe(true);
        expect(image.text()).toBe('This is button');
    });

    it('Test render button default component', () => {
        const image = render(<Button styling="default">This is button</Button>);

        expect(image.hasClass('ui-atomic-button--style-default')).toBe(true);
    });

    it('Test render button border component', () => {
        const image = render(<Button styling="border">This is button</Button>);

        expect(image.hasClass('ui-atomic-button--style-border')).toBe(true);
    });
});
