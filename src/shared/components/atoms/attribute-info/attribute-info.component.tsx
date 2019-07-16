/**
 * Attibute Info Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.09
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Text from '@/shared/components/atoms/text/text.component';
import Image from '@/shared/components/atoms/image/image.component';

import './style/style.scss';

class AttributeInfo extends React.Component<PropsInterface> {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        value: '-'
    };

    get renderHTML(): string {
        const { value } = this.props;
        const parsed: string = value as string;

        return parsed;
    }

    render(): React.ReactNode {
        const { icon, name, title } = this.props;
        const { renderHTML } = this;

        return (
            <div className="ui-atomic-attribute-info flex" key={name}>
                <Image src={icon} alt={title} />
                <Text name="ml-4" tag="p" styling="subheading" fontWeight={500}>
                    <span dangerouslySetInnerHTML={{ __html: renderHTML }} />
                </Text>
            </div>
        );
    }
}

export default AttributeInfo;
