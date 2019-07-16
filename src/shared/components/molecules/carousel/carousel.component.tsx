import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interface';
import { PictureInterface } from '@/store/listing/interfaces/picture/picture.interface';
import Image from '@/shared/components/atoms/image/image.component';
import Icon from '@/shared/components/atoms/icon/icon.component';

import './style/style.scss';

class Carousel extends React.Component<PropsInterface> {
    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                caption: PropTypes.string
            })
        ).isRequired
    };

    constructor(props: PropsInterface) {
        super(props);

        this.getCaption = this.getCaption.bind(this);
    }

    getCaption(item: PictureInterface): string {
        if (Object.prototype.hasOwnProperty.call(item, 'caption')) {
            const res = item.caption as string;
            return res;
        }

        return '';
    }

    render(): React.ReactNode {
        const { images } = this.props;
        const { getCaption } = this;

        return (
            <div className="ui-molecules-carousel relative">
                <button
                    className="absolute flex ui-molecules-carousel__control ui-molecules-carousel__prev"
                    type="submit"
                >
                    <Icon>chevron_left</Icon>
                </button>
                <button
                    className="absolute flex ui-molecules-carousel__control ui-molecules-carousel__next"
                    type="submit"
                >
                    <Icon>chevron_right</Icon>
                </button>
                <div className="ui-molecules-carousel__content flex">
                    {images.map((item: PictureInterface) => (
                        <div className="ui-molecules-carousel__item flex">
                            <Image src={item.url} alt={getCaption(item)} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
