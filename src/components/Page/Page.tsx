import { NavMenu } from '..';

import styles from './Page.module.scss';

export interface PageProps {
    children?: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
    return (
        <div className={styles.wrapper}>
            <NavMenu />
            <div className={styles.container}>{children}</div>
        </div>
    );
};
