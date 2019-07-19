/**
 * Landing Page View
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import Header from '@/shared/components/molecules/header/header.component';
import { ControllerProps } from '@/modules/landing-page/interfaces/controller.interface';
import Shortlist from '@/modules/landing-page/components/organism/shortlist/shortlist.component';
import Sidebar from '@/shared/components/molecules/sidebar/sidebar.component';
import DeleteDialog from '@/modules/landing-page/components/molecules/delete-dialog/delete-dialog.component';
import EmptyStateComponent from '@/shared/helper/empty-state.helper';

import './style/style.scss';

interface StateInterface {
    show: boolean;
    listingID?: string | number | null;
}

class LandingPageContent extends React.Component<ControllerProps, StateInterface> {
    constructor(props: ControllerProps) {
        super(props);

        this.state = {
            show: false,
            listingID: null
        };

        this.showModalDeleteListing = this.showModalDeleteListing.bind(this);
        this.deleteListing = this.deleteListing.bind(this);
    }

    showModalDeleteListing(listingID: number | string): void {
        this.setState({
            listingID,
            show: true
        });
    }

    deleteListing(): void {
        const { listingID } = this.state;
        const { actionRemoveListing } = this.props;

        if (listingID) {
            actionRemoveListing(listingID);
        }

        this.setState({ show: false });
    }

    render() {
        const { listingModel } = this.props;
        const { show } = this.state;
        const { properties, selected } = listingModel;

        return (
            <div className="ui-landing-page-module__content flex">
                <Sidebar listing={listingModel} onDelete={this.showModalDeleteListing} />
                <Shortlist listing={properties[selected]} />
                <DeleteDialog
                    show={show}
                    onCloseDialog={() => this.setState({ show: false })}
                    onAcceptDelete={this.deleteListing}
                />
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
