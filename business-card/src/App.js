import React from 'react';
import logo from './logo.jpg';
import './index.css';

function BusinessCard() {
  return (
      <div className="business-card">
          <img src={logo} className="business-card__logo" alt="logo"/>
          <div className="business-card__info">
              <h2 className="business-card__title">Наталія <span className="business-card__span">Щербак</span></h2>
              <ul className="business-card__list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
              </ul>
              <a className="business-card__contacts business-card__contacts_margin"
                 href="tel:+380505005050">+380505005050</a>
              <a className="business-card__contacts" href="mailto:mail@mail.to">mail@mail.to</a>
          </div>
      </div>
  );
}

export default BusinessCard;
