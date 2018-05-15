import Link from 'next/link';
import React, { Component } from 'react';
import css from './styles.css';

class HeaderText extends Component {
  state = {
    paperSubmit: false,
    buyTicket: false,
  };

  render() {
    return (
      <div className={css.hero}>
        <div className={css.imgWrapper}>
          <img className={css.heroImage} alt="Illustration of the Birmingham, Alabama skyline" src={"../../static/home_hero_graphic.png"} />
        </div>

        <div className={css.textWrapper}>
          <h2 className={css.heroTitle}>
              <span className={css.wordFirst}>Web</span>
              <span className={css.wordSecond}>technology</span>
              <span className={css.wordThird}>conference</span>
          </h2>

          <span className={css.heroDate}>9.20.18 - 9.21.18</span>
          <span className={css.heroLocation}>Birmingham <span>Alabama</span></span>

          <div className={css.heroButtons}>
            <button className={css.buttonSubmitPaper}>Submit a paper</button>
            <button className={css.buttonBuyTicket}>Blind bird tickets <strong>$75</strong></button>
          </div>

        </div>
      </div>
    );
  }
}

export default HeaderText;//
