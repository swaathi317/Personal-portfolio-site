import React, { useState } from 'react';
import logo from '../assets/icons/logo.svg';
import CONSTANTS from '../constants/textConstants.json';

import './HeaderStyle.css';

const Header = () => {

    const [activeTab, setActiveTab] = useState('about');

    return (

        <div id="header-wrapper">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt={CONSTANTS.header.logo_alt_text} />
                </div>
                <div className="menu-container">
                    {
                        CONSTANTS.header.menu_items.map((menuItem) => (

                            <div className={activeTab === menuItem ? "menu-item is-active" : "menu-item"} onClick={() => setActiveTab(menuItem)}>
                                <a href={"#" + menuItem}> {menuItem} </a>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>


    )
}

export default Header;