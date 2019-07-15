/**
 * Table Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Text from '@/shared/components/atoms/text/text.component';
import { FormattedAttribute } from '@/store/listing/interfaces/listing/listing_model.interface';

import './style/style.scss';

class TableComponent extends React.Component<PropsInterface> {
    static propTypes = {
        dataRow: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                label: PropTypes.string,
                value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            })
        ).isRequired,
        title: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        const { dataRow, title } = this.props;

        return (
            <div className="ui-molecules-table relative block">
                <Text name="ui-molecules-table__heading mb-16" tag="h3" styling="heading" fontWeight={600}>
                    {title}
                </Text>
                <div className="ui-molecules-table__content flex">
                    {dataRow.map((item: FormattedAttribute) => {
                        const { name, value } = item;
                        const parsed: string = value as string;

                        return (
                            <div className="ui-molecules-table__row flex" key={name}>
                                <div className="ui-molecules-table__key">
                                    <Text tag="p" styling="subheading" fontWeight={600}>
                                        {item.label}
                                    </Text>
                                </div>
                                <div className="ui-molecules-table__value">
                                    <Text tag="p" styling="subheading" fontWeight={600}>
                                        <span dangerouslySetInnerHTML={{ __html: parsed }} />
                                    </Text>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TableComponent;
