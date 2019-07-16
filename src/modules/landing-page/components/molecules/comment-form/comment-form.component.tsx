/**
 * Comment Form Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.16
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import Text from '@/shared/components/atoms/text/text.component';

import './style/style.scss';

class CommentForm extends React.Component<PropsInterface> {
    static propTypes = {
        title: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        const { title, placeholder } = this.props;

        return (
            <div className="ui-molecules-comment-form mb-32">
                <Text name="mt-25 mb-5" tag="h5" fontWeight={600} styling="subheading">
                    {title}
                </Text>
                <textarea placeholder={placeholder} />
            </div>
        );
    }
}

export default CommentForm;
