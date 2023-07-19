import styles from "./Page.module.scss";

export interface PageProps {
  children?: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <div className={styles.container}>{children}</div>;
};
