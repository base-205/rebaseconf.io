import Link from 'next/link';
import React, { Component } from 'react';
import Img from "../../static/home_hero_graphic.png"
import css from './styles.css';

class HeaderText extends Component {
  state = {
    paperSubmit: false,
    buyTicket: false,
  };

  render() {
    return (
      <div className={css.headerTextContainer}>
        <div className={css.imgWrapper}>
          <img alt="home-header logo" src={"../../static/home_hero_graphic.png"} />
        </div>
        <div className={css.textWrapper}>
          <h2>
            <div className={css.wordSecondWrapper}>
              <span className={css.wordFirst}>WEB</span>
              <span className={css.wordSecond}>TECHNOLOGY</span>
              <span className={css.wordThird}>CONFERENCE</span>
            </div>
          </h2>
          <span className={css.date}>9.20.18 - 9.21.18</span>

          <div className={css.buttonsWrapper}>
            <button className={css.buttonSubmitPaper}>SUBMIT A PAPER</button>
            <button className={css.buttonBuyTicket}>BLIND BIRD TICKETS $75</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderText;
