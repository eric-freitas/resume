import React from 'react';
import Content from './Content';
import Header from './Header';

import './home.scss';

const Home = () => {

    return (
        <div className="master">
            <Header />

            <Content/>
        </div>
    )
}

export default Home;