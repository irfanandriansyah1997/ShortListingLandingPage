/**
 * Contact Agent Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Avatar from '@/shared/components/atoms/avatar/avatar.component';
import Text from '@/shared/components/atoms/text/text.component';
import Button from '@/shared/components/atoms/button/button.component';
import { PropsInterface } from './interfaces/component.interfaces';

import './style/style.scss';

class ContactAgent extends React.Component<PropsInterface> {
    static propTypes = {
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        const { photo, name } = this.props;

        return (
            <div className="ui-molecules-contact-agent flex fixed">
                <div className="ui-molecules-contact-agent__profile flex">
                    <Avatar size={24} src={photo} alt="Fabiana Capmany" />

                    <Text
                        name="ui-molecules-shortlist__id ml-8"
                        tag="p"
                        styling="subheading"
                        fontWeight={600}
                    >
                        {name}
                    </Text>
                </div>
                <Button>Lihat Nomor Telephone</Button>
            </div>
        );
    }
}

export default ContactAgent;
