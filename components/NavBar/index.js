import Link from 'next/link';
import React, { Component } from 'react';

import css from './styles.css';

class NavBar extends Component {
    state = {
        dropDownOpen: false,
        isTable: false,
        isMobile: false,
    };

    render() {
        const links = [
            {
                title: 'About',
                link: '/about',
            },
            {
                title: 'Speakers',
                link: '/speakers',
            },
            {
                title: 'Sponsors',
                link: '/sponsors',
            },
            {
                title: 'Travel',
                link: '/travel',
            },
            {
                title: 'Blog',
                link: '/blog',
            },
            {
                title: 'Tickets',
                link: '/tickets',
            },
        ];

        const linksRender = links.map(link => {
            return (
                <Link href={link.link} key={link.title}>
                    <a>{link.title}</a>
                </Link>
            );
        });

        return (
            <div className={css.navBarContainer}>
                <Link href="/">
                  <img className={css.rebaseLogo} alt="rebase logo" src="/static/logo.png" />
                </Link>
                <div className={css.fullLinks}>{linksRender}</div>
            </div>
        );
    }
}

export default NavBar;
