import React from 'react';
import { useSelector } from 'react-redux';
import Buttons from './Buttons';
import Card from './Card';
import { selectLanguage } from './features/languageSlice';
import portfolioImage from './img/portfolio2.png';
import ecommerce from './img/luxwatch.png';
import Chat from './img/chat2.png';
import stremeenapp from './img/stremeenapp.png';
import streaming from './img/stremeen.png';
import './Portfolio.css';

const Portfolio = () => {
    const english = useSelector(selectLanguage);
    const lg = english?.language;

    return (
        <div className="portfolio" >
            <h1>{lg?'MY':'MI'} <strong>{lg?'PORTFOLIO':'PORTAFOLIO'}</strong></h1>
            <div className="portfolio__cards">
                <Card 
                    title='Lux Watch' 
                    description={lg?'Ecommerce App easy to use with online payments, shopping basket, authentication and more...':'Aplicacion Web Ecommere facil de usar con metodo de pago, carrito de compra, autentificacion y mas...'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'} / React / Redux Toolkit / Firebase / Express / Stripe / Css`}
                    link="https://base-b40b1.web.app/"
                    code="https://github.com/CesarGDD/E-commernce"
                    image={ecommerce} />
                <Card 
                    title='CHAT Me!' 
                    description={lg?'Powerfull chat app working in realtime, easy to authenticate and easy to use, create your own chat channel or chat in the general chat.':'Poderoso chat en tiempo real, facil de usar y con posibilidad de crear tu propio canal de chat o usar el chat general'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'}  / React / Redux Toolkit / Firebase / Css`}
                    link="https://chat-me-ebf5a.web.app"
                    code="https://github.com/CesarGDD/Chat-me"
                    image={Chat} />
                <Card 
                    title='STREMEEN' 
                    description={lg?'Attractive streaming web app, you can see the trailer of the best movies for its category, enjoy good moments with STREMEEN.':'Atractiva aplicacion de streaming, pudes ver los mejores trailers del momento segun su categoria, disfruta de buenos momentos con STREMEEN.'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'}  / React / Css / API`}
                    link="https://stremeen.web.app"
                    code="https://github.com/CesarGDD/StreamingWebApp"
                    image={streaming} />
                <Card 
                    title={lg?'MY PORTFOLIO':'MI PORTAFOLIO'}
                    description={lg?'I made my own portfolio with React and Redux Toolkit, enjoy a responsive portfolio with beautiful layout.':'Mi portafolio fue echo con React y Redux Toolkit, disfruta de este hermoso portafolio y su gran diseño'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'}  / React / Redux Toolkit / Css`}
                    hide
                    code="https://github.com/CesarGDD/portfolio"
                    image={portfolioImage} />
            </div>
            <hr />
            <h2>IOS & <strong>ANDROID</strong> </h2>
            <div className="portfolio__cards">
                <Card 
                        title='STREMEEN APP' 
                        description={lg?'STREMEEN at the reach of your hand. Please ensure to download Expo.io app in the Play Store before scan the QR code to run the app.':'STREMEEN al alcance de tu dedo. Asegurate de descargar Expo.io de la App Store o de la Play Store antes de escanear el codigo QR para abrir la aplicacion'} 
                        tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'}  / React-Native / API / Styled-Components`}
                        link="https://expo.io/@cesargdd/projects/stremeeen"
                        code="https://github.com/CesarGDD/Streaming"
                        image={stremeenapp} />
            </div>
            <div className="portfolio__buttons">
                <Buttons />
            </div>
        </div>
    )
}

export default Portfolio;