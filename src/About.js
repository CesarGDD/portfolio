import React from 'react';
import './Abaut.css'
import Buttons from './Buttons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from './features/languageSlice';

const About = () => {
    const history = useHistory();
    const english = useSelector(selectLanguage);
    const lg = english?.language;
    return (
        <div className="me" >
            <div className="about">
                <div className="about__title">
                    <h1>{lg?'ABOUT':'ACERCA'} <strong> {lg?'ME':'DE MI'}</strong> </h1>
                </div>
                <h1> {lg?'PERSONAL INFO':'INFORMACION PERSONAL'}</h1>
                <div className="about__image">
                </div>
                <div className="about__information">
                    <div className="about__informationOne">
                        <p> {lg?'First Name:':'Nombre:'} <strong> Cesar</strong></p>
                        <p> {lg?'Last Name:':'Apellido:'} <strong> Delgado</strong></p>
                        <p> {lg?'Age:':'Edad:'} <strong> 29 {lg?'years':'años'}</strong></p>
                        <p> Freelance: <strong> {lg?'Avaiable':'Disponible'}</strong></p>
                        <button onClick={() => history.push('/portfolio')} >{lg?'PROJECTS':'PROYECTOS'}</button>
                    </div>
                    <div className="about__informationTwo">
                        <p> {lg?'Address:':'Dirección:'} <strong>Sydney NSW</strong></p>
                        <p> {lg?'Phone:':'Numéro:'} <strong>+610412393061</strong></p>
                        <p> {lg?'Email:':'Correo'} <strong>cesar.gdd05@gmail.com</strong></p>
                        <p> {lg?'Languages':'Idiomas'} <strong>{lg?'English, Spanish':'Ingles, Español'}</strong></p>
                    </div>
                </div>
                <div className="about__buttons">
                    <Buttons />
                </div>
            </div>
            <hr />

            <h1 className="skills__title" > {lg?'MY TECHNICAL SKILLS':'HABILIDADES TECNICAS'}</h1>
            <div className="skills">
                    <div className="skills__tables">
                        <h3>{lg?'Technologies':'Tecnologías'}</h3>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>Responsive CSS</li>
                        <li>Node.js</li>
                        <li>RESTful</li>
                        <li>Ligth Express</li>
                        <li>APIs</li>
                    </div>
                    <div className="skills__tables">
                        <h3>{lg?'Database':'Base De Datos'}</h3>
                        <li>Firebase</li>
                        <li>MongoDB</li>
                    </div>
                    <div className="skills__tables">
                        <h3>Frameworks</h3>
                        <li>React / Hooks</li>
                        <li>ReduxToolkit /Hooks </li>
                        <li>Learning React-Native</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                    </div>
                    <div className="skills__tables">
                        <h3>Version Control</h3>
                        <li>Git</li>
                        <li>GitHub</li>
                    </div>
                </div>
                <hr />
                <h1 className="skills__title" >{lg?'EDUCATION & ME':'EDUCACION Y UN POCO DE MI'}</h1>
            <div className="skills__education">
                    <div className="skills__tables__education">
                        <h3>{lg?'Random Things About Me':'Otras Cosas Acerca De Mi'}</h3>
                        <li>{lg?'The name of my dog is Butcher but it`s really friendly':'Mi perro se llama Carnicero pero es un amor de perro'}</li>
                        <li>{lg?'I have forklift driver licence':'Tengo licencia para manejar montacargas'}</li>
                    </div>
                    <div className="skills__tables__education">
                        <h3>{lg?'Certificates':'Certificados'}</h3>
                        <li> {lg? 'The Complete React Native + Hooks Course (Currently Studying) /Udemy' : 'Curso completo de React Native + Hooks (Actualmente tomandolo) /Udemy'} </li>
                        <li> {lg? 'Modern React With Redux /Udemy' : 'React con Redux curso moderno /Udemy'} </li>
                        <li> {lg? 'React - The complete Guide (Hooks, React Router, Redux) /Udemy' : 'React - La guia completa (Hooks, React Router, Redux) /Udemy'} </li>
                        <li> {lg? 'Web Design for Developers /Udemy' : 'Diseño Web para desarrolladores /Udemy'} </li>
                        <li> {lg? 'UX & Web Desing Master Course: Strategy, Design, Development /Udemy' : 'Ux y Diseño Web Curso Master: Estrategia, Diseño, Desarrollo /Udemy'} </li>
                        <li> {lg? 'Advanced JavaScript /Udemy' : 'Avanzado JavaScript /Udemy'} </li>
                        <li> {lg? 'JavaScript: Understending the Weird Parts /Udemy' : 'JavaScript: Ententiendo las cosas raras /Udemy'} </li>
                        <li> {lg? 'The Complete JavaScript Course (From zero to expert) /Udemy' : 'El curso completo de JavaScript (Desde cero a experto) /Udemy'} </li>
                        <li> {lg? 'The Web Developer Bootcamp /Udemy' : 'Desarrollador web Bootcamp /Udemy'} </li>
                    </div>
                    <div className="skills__tables__education">
                        <h3>{lg?'Next In My Life':'Lo Siguiente En Mi Vida'}</h3>
                        <li>{lg?'Currently learning React Native looking forward to learn TypeScript and other tools':'Actualmente aprendiendo React Native, despues sigue Typescript entre otras herramientas tecnologicas'}</li>
                        <li>{lg?'If I am lucky enough to work alongside the best, I am sure that I will become one of them':'Si tengo la suerte de trabajar con los mejores, Estoy seguro que me convertire en uno de ellos'}</li>
                    </div>
                </div>
        </div>
    )
}

export default About;
