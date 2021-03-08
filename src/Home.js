import './Home.css';
import Buttons from './Buttons';
import image3 from './img/image3.jpg';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from './features/languageSlice';


function Home() {
  const history = useHistory();
  const english = useSelector(selectLanguage);
  const lg = english?.language;

  return (

    <div className="home">
      <div className="home__image">
        <img src={image3} alt='img' />
      </div>
      <div className="home__me">
        <h3> {lg ? 'HELLO !' : 'HOLA !'} </h3>
        <h2>{lg ? `I'M ` : 'ME LLAMO '}<strong>CESAR DELGADO</strong> </h2>
        <p> {lg ? 'Software engineer with experience designing and building responsive web and mobile apps. Competent with CSS and JS Frameworks ( Focused in React, React-Native ), with knowledge of UX design and creation of intuitive applications, focused on crafting clean & user-friendly experiences with the capacity to highly scale the apps ( AWS, GraphQL, TypeScript ).' : 'Ingeniero de Software con experiencia en diseñar y crear aplicaciones moviles y web. Competente con CSS y JS Frameworks ( Enfocado en React, React-Native ), conocimientos de diseño UX y creación de aplicaciones intuitivas. Estoy enfocado en desarrollar aplicaciones limpias y faciles de usar, con la capacidad de escalar segun las nececidades de la aplicación ( AWS, GraphQL, TypeScript ).'} </p>
        <button onClick={() => history.push('/about') } >{lg ?'MORE ABOUT ME':'ACERCA DE MI'} </button>
      </div>
      <div className="home__icons">
          <Buttons className="home__iconsButtons" />
      </div>
    </div>
  );
}

export default Home;
