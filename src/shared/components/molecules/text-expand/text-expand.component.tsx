/**
 * Table Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Text from '@/shared/components/atoms/text/text.component';

import './style/style.scss';

class TextExpand extends React.Component<PropsInterface> {
    static propTypes = {
        content: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        const { content, title } = this.props;
        return (
            <div className="ui-molecules-text-expand">
                <Text name="mb-25" tag="h3" fontWeight={600} styling="heading">
                    {title}
                </Text>
                <Text name="ui-molecules-text-expand__content" tag="div" fontWeight={400} styling="subheading">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </Text>
            </div>
        );
    }
}

export default TextExpand;
