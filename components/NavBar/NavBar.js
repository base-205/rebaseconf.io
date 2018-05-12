import Link from 'next/link';
import React, { Component } from 'react';

import css from './NavBar.css';

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
                <img className={css.rebaseLogo} alt="rebase logo" src="/static/logo.png" />
                <div className={css.fullLinks}>{linksRender}</div>
            </div>
        );
    }
}

export default NavBar;
