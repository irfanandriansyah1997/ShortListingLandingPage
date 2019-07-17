import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface, StateInterface, OnChangePositionEnum } from './interfaces/component.interface';
import { PictureInterface } from '@/store/listing/interfaces/picture/picture.interface';
import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';
import Image from '@/shared/components/atoms/image/image.component';
import Icon from '@/shared/components/atoms/icon/icon.component';

import './style/style.scss';

class Carousel extends React.Component<PropsInterface, StateInterface> {
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
        this.onChangePosition = this.onChangePosition.bind(this);

        this.state = {
            position: 0
        };
    }

    onChangePosition(type: OnChangePositionEnum) {
        const { images } = this.props;
        const { position } = this.state;
        const { length } = images;

        switch (type) {
        case OnChangePositionEnum.ADD:
            this.setState({ position: position + 1 === length ? 0 : position + 1 });
            break;
        case OnChangePositionEnum.MINUS:
            this.setState({ position: position === 0 ? length - 1 : position - 1 });
            break;
        default:
            break;
        }
    }

    getCaption(item: PictureInterface): string {
        if (Object.prototype.hasOwnProperty.call(item, 'caption')) {
            const res = item.caption as string;
            return res;
        }

        return '';
    }

    get style(): DefaultDynamicObject {
        const { position } = this.state;

        return {
            transform: `translateX(${position * -100}%)`
        };
    }

    render(): React.ReactNode {
        const { images } = this.props;
        const { getCaption, style } = this;

        return (
            <div className="ui-molecules-carousel relative">
                <button
                    className="absolute flex ui-molecules-carousel__control ui-molecules-carousel__prev"
                    type="submit"
                    onClick={() => this.onChangePosition(OnChangePositionEnum.MINUS)}
                >
                    <Icon>chevron_left</Icon>
                </button>
                <button
                    className="absolute flex ui-molecules-carousel__control ui-molecules-carousel__next"
                    type="submit"
                    onClick={() => this.onChangePosition(OnChangePositionEnum.ADD)}
                >
                    <Icon>chevron_right</Icon>
                </button>
                <div className="ui-molecules-carousel__content flex" style={style}>
                    {images.map((item: PictureInterface, index: number) => (
                        <div className="ui-molecules-carousel__item flex" key={item.id}>
                            <Image src={item.url} alt={getCaption(item)} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
