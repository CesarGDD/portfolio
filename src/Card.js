import React from 'react';
import { useSelector } from 'react-redux';
import './Card.css';
import { selectLanguage } from './features/languageSlice';

const Card = ({image, title, description, tools, link, hide}) => {
    const english = useSelector(selectLanguage);
    const lg = english?.language;

    return (
        <div className="card">
            <div className="card__box">
                <img className="card__image" src={image} alt="" />
            </div>
            <div className="card__content">
                <h2 className="card__contentBack" > {title} </h2>
                <p className="card__contentBack"> {description} </p>
                <h3 className="card__contentBack"> {tools} </h3>
                {!hide ? <a href={link} target="_blank" > {lg?'GO!':'VER!'} </a>: null}
            </div>
        </div>
    )
}

export default Card;
