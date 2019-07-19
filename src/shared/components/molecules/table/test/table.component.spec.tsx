/**
 * Table Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.11
 */

import * as React from 'react';
import { mount } from 'enzyme';
import Table from '@/shared/components/molecules/table/table.component';
import { PropsInterface } from '@/shared/components/molecules/table/interfaces/component.interface';
import { FormattedAttribute } from '@/store/listing/interfaces/listing/listing_model.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        title: 'Title table',
        dataRow: [
            {
                label: 'Label 1',
                name: 'label1',
                value: 'Value Label 1'
            },
            {
                label: 'Label 2',
                name: 'label2',
                value: 'Value Label 2'
            }
        ]
    }
];

describe('Testing header component in molecules component ', () => {
    it('Test render header component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const header = mount(<Table {...item} />);
            expect(header.find('Text[name="ui-molecules-table__heading mb-16"]').text()).toBe(item.title);

            item.dataRow.map((row: FormattedAttribute, index: number) => {
                const component = header.find('.ui-molecules-table__row').at(index);

                expect(component.find('.ui-molecules-table__key Text').text()).toBe(row.label);
                expect(component.find('.ui-molecules-table__value Text').text()).toBe(row.value);

                return true;
            });

            return true;
        });
    });
});
