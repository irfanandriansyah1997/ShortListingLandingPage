import * as React from 'react';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import Image from '../components/atoms/image/image.component';
import Text from '../components/atoms/text/text.component';

import './style.scss';

export interface PropsInterface extends DefaultPropsInterface {
    count: number;
}

class EmptyStateComponent extends React.Component<PropsInterface> {
    render(): React.ReactNode {
        const { count, children } = this.props;

        return (
            <React.Fragment>
                {count > 0 ? (
                    children
                ) : (
                    <div className="ui-molecules-empty-state flex">
                        <Image
                            src="https://public.urbanindo.com/short-listing-landing-page/listing.svg"
                            alt="asd"
                            className="mb-16"
                        />
                        <div className="ui-molecules-empty-state__text flex">
                            <Text fontWeight={600} styling="subheading" tag="h1" name="mb-8" align="center">
                                Belum ada listing dalam shortlist
                            </Text>
                            <Text fontWeight={400} styling="subheading" tag="p" align="center">
                                Setiap listing yang tersimpan dalam shortlist akan muncul disini
                            </Text>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default EmptyStateComponent;
