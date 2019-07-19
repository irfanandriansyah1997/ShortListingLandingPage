/**
 * Comment Form Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

/* eslint-disable */

import * as React from 'react';
import { mount } from 'enzyme';
import CommentForm from '@/modules/landing-page/components/molecules/comment-form/comment-form.component';
import { PropsInterface } from '@/modules/landing-page/components/molecules/comment-form/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        placeholder: 'ini placeholder',
        title: 'title'
    }
];

describe('Testing comment form component in molecules component ', () => {
    it('Test render comment form component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const card = mount(<CommentForm {...item} />);

            expect(card.find('Text[name="mt-25 mb-5"]').text()).toBe(item.title);
            expect(card.find('textarea').prop('placeholder')).toBe(item.placeholder);

            return true;
        });
    });
});
