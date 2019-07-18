/**
 * Landing Page View
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import Header from '@/shared/components/molecules/header/header.component';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import Shortlist from '@/modules/landing-page/components/molecules/shortlist/shortlist.component';
import Sidebar from '@/shared/components/molecules/sidebar/sidebar.component';
import Dialog from '@/shared/components/atoms/dialog/dialog.component';

import './style/style.scss';
import EmptyStateComponent from '@/shared/helper/empty-state.helper';

interface StateInterface {
    show: boolean;
}

class LandingPageContent extends React.Component<ControllerProps, StateInterface> {
    constructor(props: ControllerProps) {
        super(props);

        this.state = {
            show: false
        };
    }

    render() {
        const { listingModel, actionRemoveListing } = this.props;
        const { show } = this.state;
        const { properties, selected } = listingModel;

        return (
            <div className="ui-landing-page-module__content flex">
                <Sidebar listing={listingModel} onDelete={(id: string | number) => actionRemoveListing(id)} />
                <Shortlist listing={properties[selected]} />
                <Dialog show={show} onCloseDialog={() => this.setState({ show: false })}>
                    Ini Content
                </Dialog>
            </div>
        );
    }
}

class LandingPageView extends React.Component<ControllerProps> {
    render() {
        const { listingModel } = this.props;
        const { properties } = listingModel;
        return (
            <div className="ui-landing-page-module">
                <Header title="Listing 500 Juta" />
                <EmptyStateComponent count={properties.length}>
                    <LandingPageContent {...this.props} />
                </EmptyStateComponent>
            </div>
        );
    }
}

export default LandingPageView;
