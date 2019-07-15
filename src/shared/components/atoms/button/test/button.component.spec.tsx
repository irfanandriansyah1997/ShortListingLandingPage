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
        expect(image.text()).toBe('This is button');
    });
});
