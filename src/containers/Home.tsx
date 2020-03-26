import React, { Component } from 'react';

type MyState = {
    sideMenuOpen: boolean;
};
class Home extends Component {
    state: MyState = {
        sideMenuOpen: true,
    };
    render() {
        if (this.state.sideMenuOpen) {
            console.log('Side menu open');
        }
        return <div id="home"></div>;
    }
}

export default Home;
