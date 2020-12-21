import React, { useState } from 'react';
import './Navbar.css';
import { useDispatch } from 'react-redux';
import { language } from './features/languageSlice';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';


const Navbar = () => {
    const dispatch = useDispatch();
    const [showSidebar, setShowSidebar] = useState(false);
    
    const sidebarToggle = () => {
        showSidebar ? setShowSidebar(false) : setShowSidebar(true);
    }

    return (
        <div className="navbar" >
            <div className="navbar__sidebar" >
                <div>
                    <MenuIcon className="navbar__sidebarIcon" fontSize='large' onClick={sidebarToggle} />
                    <Sidebar showSidebar={showSidebar} clicked={sidebarToggle} />  
                </div>
            </div>
            <div className="navbar__buttons" >
                <button onClick={() => dispatch(language(true))}>EN 🇦🇺 </button>
                <button onClick={() => dispatch(language(false))}>SP 🇪🇸</button>
            </div>
        </div>
    )
}

export default Navbar;
