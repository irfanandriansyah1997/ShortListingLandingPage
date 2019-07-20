/**
 * Carousel Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.19
 */

import * as React from 'react';
import { render, shallow } from 'enzyme';
import Carousel from '@/shared/components/molecules/carousel/carousel.component';
import { PropsInterface } from '@/shared/components/molecules/carousel/interfaces/component.interface';

const FIXTURE: PropsInterface = {
    images: [
        {
            caption: 'caption image',
            id: '1',
            url: 'image1.jpg'
        },
        {
            id: '2',
            url: 'image2.jpg'
        }
    ]
};

describe('Testing carousel component in molecules component ', () => {
    it('Test render carousel component', () => {
        const carousel = render(<Carousel {...FIXTURE} />);

        expect(carousel.hasClass('ui-molecules-carousel')).toBe(true);
    });

    it('Test render carousel click next and prev', () => {
        const carousel = shallow(<Carousel {...FIXTURE} />);
        const method: any = carousel.instance();

        /**
         * On Click Next Button
         */
        carousel.find('.ui-molecules-carousel__next').simulate('click');
        expect(carousel.state('position')).toBe(1);
        expect(method.style).toStrictEqual({ transform: 'translateX(-100%)' });

        /**
         * On Click Previous Button
         */
        carousel.find('.ui-molecules-carousel__prev').simulate('click');
        expect(carousel.state('position')).toBe(0);
        expect(method.style).toStrictEqual({ transform: 'translateX(0%)' });
    });

    it('Test get caption in carousel', () => {
        const carousel = shallow(<Carousel {...FIXTURE} />);
        const method: any = carousel.instance();

        expect(method.getCaption(FIXTURE.images[0])).toBe('caption image');
        expect(method.getCaption(FIXTURE.images[1])).toBe('');
    });
});
