/**
 * Text Expand Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.19
 */

import * as React from 'react';
import { mount } from 'enzyme';
import TextExpand from '@/shared/components/molecules/text-expand/text-expand.component';
import { PropsInterface } from '@/shared/components/molecules/text-expand/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        content: 'this is content',
        title: 'this is title'
    }
];

describe('Testing text expand component in molecules component ', () => {
    it('Test render text expand component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const text = mount(<TextExpand {...item} />);

            expect(text.find('Text[name="mb-25"]').text()).toBe(item.title);
            expect(text.find('Text[name="ui-molecules-text-expand__content"]').text()).toBe(item.content);

            return true;
        });
    });
});
