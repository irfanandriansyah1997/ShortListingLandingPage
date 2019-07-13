/**
 * Image Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import { render } from 'enzyme';
import Image from '../image.component';
import { PropsInterface } from '@/shared/components/atoms/image/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        src: 'image1',
        alt: 'this is image',
        className: 'sample-classname'
    },
    {
        src: 'image2',
        alt: 'this is image 2',
        className: 'sample-classname'
    }
];

describe('Testing image component in atomic component ', () => {
    it('Test render image component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const image = render(<Image {...item} />);

            expect(image.hasClass('sample-classname')).toBe(true);
            expect(image.prop('alt')).toBe(item.alt);
            expect(image.prop('src')).toBe(item.src);

            return true;
        });
    });
});
