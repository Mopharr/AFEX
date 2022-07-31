import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Individual3 = () => {
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
          <img src="/success.png" alt="success" />
          <div className="vv">
            <p>Sign in to ComX</p>
            <span>
              Dear [fName]. Your registration is now complete. You may proceed
              to your dashboard and start trading commodities.
            </span>
          </div>
          <Link href="/dashboard">
            <a className={styles.linkk}>Go to Dashboard</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Individual3;
