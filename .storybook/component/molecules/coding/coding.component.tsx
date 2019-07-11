import * as React from 'react';
import { Component, ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import Highlight from 'react-highlight';

import './style.scss';

type props = {
    children: ReactNode;
    code: string;
};

class CodingComponent extends Component<props> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        code: PropTypes.string.isRequired
    };

    static defaultProps = {
        parent: false
    };

    constructor(props: props) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        const { code } = this.props;
        const el: HTMLTextAreaElement = document.createElement('textarea');

        el.value = code;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.display = 'none';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        const { children, code } = this.props;
        return (
            <div className="ui-default__code">
                <div className="ui-default__code__result">{children}</div>
                <div className="ui-default__code__source-code">
                    <div className="ui-default__code__source-code__bar">
                        <p>Source Code</p>
                        <a className="ui-default__code__copy" onClick={this.copyToClipboard}>
                            <i className="material-icons">file_copy</i>Copy
                        </a>
                    </div>
                    <Highlight className="hello">{code}</Highlight>
                </div>
            </div>
        );
    }
}

export default CodingComponent;
