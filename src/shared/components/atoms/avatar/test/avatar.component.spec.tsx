/**
 * Avatar Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import { render } from 'enzyme';
import Avatar from '../avatar.component';
import { PropsInterface } from '@/shared/components/atoms/avatar/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        src: 'image1',
        alt: 'this is image',
        className: 'sample-classname',
        size: 'small'
    },
    {
        src: 'image2',
        alt: 'this is image 2',
        className: 'sample-classname',
        size: 'default'
    },
    {
        src: 'image2',
        alt: 'this is image 2',
        className: 'sample-classname',
        size: 'big'
    }
];

describe('Testing avatar component in atomic component ', () => {
    it('Test render avatar component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const image = render(<Avatar {...item} />);

            expect(image.hasClass('ui-atomic-avatar')).toBe(true);
            expect(image.hasClass(`ui-atomic-avatar--size-${item.size}`)).toBe(true);

            return true;
        });
    });

    it('Test render avatar component with specific size', () => {
        const item: PropsInterface = {
            src: 'image1',
            alt: 'this is image',
            className: 'sample-classname',
            size: 32
        };

        const image = render(<Avatar {...item} />);

        expect(image.hasClass('ui-atomic-avatar')).toBe(true);
        expect(image.hasClass('ui-atomic-avatar--size-small')).toBe(false);
        expect(image.hasClass('ui-atomic-avatar--size-default')).toBe(false);
        expect(image.hasClass('ui-atomic-avatar--size-big')).toBe(false);
        expect(image.prop('style')).toHaveProperty('width', '32px');
        expect(image.prop('style')).toHaveProperty('height', '32px');
    });
});
