import React, { Component } from 'react';
import { HomeState } from './models/state';

import SideMenu from '../components/SideMenu';
import FileViewer from '../components/FileViewer';

class Home extends Component {
    state: HomeState = {
        sideMenuOpen: true,
    };
    render() {
        const { sideMenuOpen } = this.state;
        const menuView = sideMenuOpen ? <SideMenu /> : null;

        return (
            <div id="home">
                {menuView}
                <FileViewer />
            </div>
        );
    }
}

export default Home;
