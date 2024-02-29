import styles from './accounts.module.css';

/* eslint-disable-next-line */
export interface AccountsProps {}

export function Accounts(props: AccountsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Accounts!</h1>
    </div>
  );
}

export default Accounts;
