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
          <div className={css.heroText}>
            <h2 className={css.heroTitle}>
                <span className={css.wordFirst}>Web</span>
                <span className={css.wordSecond}>technology</span>
                <span className={css.wordThird}>conference</span>
            </h2>

            <span className={css.heroDate}>9.20.18 - 9.21.18</span>
            <span className={css.heroLocation}>Birmingham <span>Alabama</span></span>
          </div>

          <div className={css.heroButtons}>
            <a className={`${css.button} ${css.white}`} href="#">Submit a paper</a>
            <a className={`${css.button} ${css.green}`} href="#">Blind bird tickets <strong>$75</strong></a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderText;//
