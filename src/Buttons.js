import React from 'react';
import { useHistory } from 'react-router-dom';
import './Buttons.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EmailIcon from '@material-ui/icons/Email';
import { useSelector } from 'react-redux';
import { selectLanguage } from './features/languageSlice';

const Buttons = () => {
  const history = useHistory();
  const english = useSelector(selectLanguage);
  const lg = english?.language;
    return (
        <div className="buttons">
            <button onClick={() => history.push('/') } >{lg?'HOME':'INICIO'} <HomeIcon className="buttons__iconsFormat" fontSize='large' /> </button>
            <button onClick={() => history.push('/about') } >{lg?'ABOUT':'ACERCA DE MI'}<PersonIcon className="buttons__iconsFormat" fontSize='large' /></button>
            <button onClick={() => history.push('/portfolio') } >{lg?'PORTFOLIO':'PORTAFOLIO'} <BusinessCenterIcon className="buttons__iconsFormat" fontSize='large'/></button>
            <button onClick={() => history.push('/contact') } >{lg?'CONTACT':'CONTACTAME'} <EmailIcon className="buttons__iconsFormat" fontSize='large'/> </button>
        </div>
    )
}

export default Buttons;
