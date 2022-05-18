import React from 'react';
import styles from './NavBar.module.css';

const navigation = [
    { name: 'Story', href: '#Story', current: true },
    { name: 'Roadmap', href: '#RoadMap', current: false },
    { name: 'Team', href: '#Team', current: false },
    { name: 'FAQ', href: '#FAQ', current: false },
    { name: 'Rarity', href: 'rarity', current: false, link: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function NavBar() {
    return (
        <>
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current
                            ? 'text'
                            : 'text-#000',
                        `px-5 mx-3 py-2  font-large font-skranji font-bold text-white ${styles.navBar__item}` 
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </a>
            ))}
        </>
    )
}

export default NavBar
