import { Link } from 'react-router-dom';

import styles from './NavMenu.module.scss';

const config = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Bar Chart',
        path: '/bar-chart',
    },
];

export const NavMenu = () => {
    return (
        <nav className={styles.nav}>
            {config.map((item) => (
                <Link key={item.path} to={item.path}>
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

interface NavMenuItemProps {
    name: string;
    path: string;
}
