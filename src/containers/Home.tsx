import React, { Component } from 'react';
import { HomeState } from './models/state';

import SideMenu from '../components/SideMenu';

class Home extends Component {
    state: HomeState = {
        sideMenuOpen: true,
    };
    render() {
        const { sideMenuOpen } = this.state;
        const menuView = sideMenuOpen ? <SideMenu /> : null;

        return <div id="home">{menuView}</div>;
    }
}

export default Home;
