import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectLanguage } from './features/languageSlice';

const Sidebar = ({showSidebar, clicked}) => {
    const history = useHistory();
    const english = useSelector(selectLanguage);
    const lg = english?.language;

    const onclickHanddle = (page) => {history.push(page); clicked(); }

    return (
        <div className={`${showSidebar ? 'sidebar__open' : 'sidebar__close'}`} >
            <div>
                <MenuIcon className="sidebar__iconMenu" onClick={clicked} fontSize="large" />
            </div>
                <div onClick={() => onclickHanddle('/') } ><HomeIcon className="sidebar__icon" fontSize='large' /> {lg?'HOME':'INICIO'} </div>
                <div onClick={() => onclickHanddle('/about') } > <PersonIcon className="sidebar__icon" fontSize='large' /> {lg?'ABOUT':'ACERCA DE MI'}</div>
                <div onClick={() => onclickHanddle('/portfolio') } ><BusinessCenterIcon className="sidebar__icon" fontSize='large'/> {lg?'PORTFOLIO':'PORTAFOLIO'}</div>
                <div onClick={() => onclickHanddle('/contact') } ><EmailIcon className="sidebar__icon" fontSize='large'/>{lg?'CONTACT':'CONTACTAME'}</div>
        </div>
    )
}

export default Sidebar;