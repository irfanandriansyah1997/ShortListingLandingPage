import * as React from 'react';
import * as PropTypes from 'prop-types';

interface ImageProps {
    imageType: string;
    size: number;
    source: string;
}

class Text extends React.Component<ImageProps> {
    static propTypes = {
        imageType: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        source: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        const { imageType, size, source } = this.props;

        return (
            <img
                alt="avatar"
                className={imageType}
                src={source}
                height={size}
                width={size}
            />
        );
    }
}

export default Text;
