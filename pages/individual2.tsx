import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Individual2 = () => {
  return (
    <div className={styles.register}>
      <Head>
        <title>Com X</title>
        <meta name="description" content="ComX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.login}>
        <img src="/logo.png" alt="logo" />

        <div className={styles.loginCon}>
          <p>Sign in to ComX</p>
          <span>Enter your login credentials below.</span>
          <div className={styles.loginInput}>
            <label htmlFor="">
              Enter the 4-digit code that was sent to name@mymail.com
            </label>
            <input type="email" placeholder="Enter code" />
            <span >Resend Code</span>
          </div>

          <div className={styles.dir}>
            <Link href="/individual">
              <a className={styles.pre}>Back</a>
            </Link>
            <Link href="/individual3">
              <a className={styles.link}>Finish</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Individual2;
