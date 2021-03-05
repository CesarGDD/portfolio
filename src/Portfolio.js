import React from 'react';
import { useSelector } from 'react-redux';
import Buttons from './Buttons';
import Card from './Card';
import { selectLanguage } from './features/languageSlice';
import portfolioImage from './img/portfolio2.png';
import ecommerce from './img/luxwatch.png';
import Chat from './img/chat2.png';
import chatApp from './img/chatme.png';
import stremeenapp from './img/stremeenapp.png';
import streaming from './img/stremeen.png';
import bloggie from './img/bloggie.png'
import './Portfolio.css';

const Portfolio = () => {
    const english = useSelector(selectLanguage);
    const lg = english?.language;

    return (
        <div className="portfolio" >
            <h1>{lg?'MY':'MI'} <strong>{lg?'PORTFOLIO':'PORTAFOLIO'}</strong></h1>
            <div className="portfolio__cards">
                <Card 
                    title='Bloggie' 
                    description={lg?'Powerful and stunning app with high scalability working in real-time made it with the best technologies at the moment, publish and edit your blogs, see the comments and look who like your posts.':'Asombrosa aplicación funcionando en tiempo real echa con las mejores tecnologías del momento, crea, edita, publica tus posts y ve los comentarios y a quienes les gusto tu post, con un diseño sensillo pero agradable para los ojos.'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'} / React Hooks / TypeScript / GraphQL /  AWS DynamoDB / AWS AppSync / Amazon Cognito / Css FlexBox`}
                    link="http://bloggi-app-dev.s3-website-ap-southeast-2.amazonaws.com/"
                    code="https://github.com/CesarGDD/bloggi"
                    image={bloggie} />
                <Card 
                    title='Lux Watch' 
                    description={lg?'Ecommerce App easy to use with online payments, shopping basket, authentication and more...':'Aplicacion Web Ecommere facil de usar con metodo de pago, carrito de compra, autentificacion y mas...'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'} / React / Redux Toolkit / Firebase / Express / Stripe / Css / Auth`}
                    link="https://base-b40b1.web.app/"
                    code="https://github.com/CesarGDD/E-commernce"
                    image={ecommerce} />
                <Card 
                    title='CHAT Me!' 
                    description={lg?'Powerfull chat app working in realtime, easy to authenticate and easy to use, create your own chat channel or chat in the general chat.':'Poderoso chat en tiempo real, facil de usar y con posibilidad de crear tu propio canal de chat o usar el chat general'} 
                    tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'}  / React / Redux Toolkit / Firebase / Css / GoogleAuth`}
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
                <Card 
                        title='CHAT Me APP' 
                        description={lg?'Chat from your phone or from your computer, CHAT Me is a real-time application. Please ensure to download Expo.io app in the Play Store before scan the QR code to run the app.':'Chatea desde tu dispositivo mobile o desde tu ordenador, CHAT Me es un poderosa aplicacion en tiempo real. Asegurate de descargar Expo.io de la App Store o de la Play Store antes de escanear el codigo QR para abrir la aplicacion'} 
                        tools={`${lg? 'Technologies used:': 'Tecnologias usadas:'}  / React-Native / Firebase / Styled-Components / GoogleAuth`}
                        link="https://expo.io/@cesargdd/projects/chatMe"
                        code="https://github.com/CesarGDD/Chat-meApp"
                        image={chatApp} />
            </div>
            <div className="portfolio__buttons">
                <Buttons />
            </div>
        </div>
    )
}

export default Portfolio;