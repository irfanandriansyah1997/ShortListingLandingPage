/**
 * Alert Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.18
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Icon from '@/shared/components/atoms/icon/icon.component';
import Text from '@/shared/components/atoms/text/text.component';
import { convert_obj_to_string } from '@/shared/utils/string.utils';

import './style/style.scss';

class Alert extends React.Component<PropsInterface> {
    static propTypes = {
        icon: PropTypes.string,
        theme: PropTypes.oneOf(['default']).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    static defaultProps = {
        icon: 'error'
    };

    get className(): string {
        const { theme } = this.props;

        return convert_obj_to_string({
            'ui-molecules-alert': true,
            flex: true,
            [`ui-molecules-alert--theme-${theme}`]: theme === 'default'
        });
    }

    render(): React.ReactNode {
        const { icon, title, description } = this.props;
        const { className } = this;

        return (
            <div className={className}>
                <Icon>{icon}</Icon>
                <div className="ui-molecules-alert__content">
                    <Text name="mb-4" fontWeight={600} styling="subheading" tag="h5">
                        {title}
                    </Text>
                    <Text fontWeight={400} styling="text" tag="p">
                        {description}
                    </Text>
                </div>
            </div>
        );
    }
}

export default Alert;
