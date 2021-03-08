import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Buttons from './Buttons';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import './Contact.css';
import { useSelector } from 'react-redux';
import { selectLanguage } from './features/languageSlice';

const Contact = () => {
  const english = useSelector(selectLanguage);
  const [sent, setSent] = useState(false);
  const [herror, setHerror] = useState('');
  const lg = english?.language;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yhgnvt', 'template_7tlsg66', e.target, 'user_FZyKyAV6ZUeL0izplouTC')
      .then((result) => {
        setSent(true);
        console.log(result.text)
      }, (error) => {
          setHerror(error.text);
      });
      e.target.reset();
  }

  return (
      <div className="title" >
          <h1> {lg?'CONTACT':'CONTACTAME'} <strong>{lg?'ME!':'!'}</strong> </h1>
              { sent ?
              <h2 className="contact__sent" > {lg?'Thank you for contacting me, I will contact you as soon as possible':'Gracias por contactarme, me contactare con tigo lo mas rapido posible'}  </h2> : null}
              { herror === '' ? null : <h2 className="contact__sent" > {herror} </h2> } 
          <div className="contact" >
            <Buttons className="buttons" />
            <div className="contact__information">
                <h2>{lg?'Hello':'Hola'}</h2>
                <div>
                  <p>{lg?"Feel free to get in touch with me. Let's talk about your projects and your ideas, I am sure that we will reach an excellent agreement and maybe we will even be great friends.":'Sientete libre de contactarme, hablemos de tus proyectos y tus ideas, estoy seguro que podemos llegar a un excelente acuerdo y posiblemente podriamos convertirnos en grandes amigos.'}</p>
                  <div className="contact__informationBoxes" >
                    <div><EmailIcon className="iconsFormat" fontSize="large" /></div>
                    <div>
                      <h3>EMAIL</h3>
                      <p>cesar.gdd05@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact__informationBoxes">
                    <div><PhoneIcon className="iconsFormat" fontSize="large" /> </div>
                      <div>
                        <h3>{lg?'PHONE':'MI NUMERO'}</h3>
                        <p>+610412393061</p>
                      </div>
                  </div>
                </div>
            </div>
            <div className="contact__form">
              <form onSubmit={sendEmail}>
                <div className="contact__formInputs" >
                  <input type="text" name="subject" placeholder={lg?'YOUR NAME':'NOMBRE'} />
                  <input type="email" name="email" placeholder={lg?'YOUR EMAIL':'EMAIL'} />
                  <input type="text" name="name" placeholder={lg?'YOUR SUBJECT':'ASUNTO'} />
                </div>
                <div className="contact__formMessage">
                    <textarea className="contact__formMessage" name="message" placeholder={lg?'YOUR MESSAGE':'MENSAJE'} />
                </div>
                <div className="contact__formButton" >
                  <input type="submit" value={lg?'Send Message':'Enviar Mensaje'} />
                </div>
              </form>
            </div>
          </div>
      </div>
  );
}

export default Contact;