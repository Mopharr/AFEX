import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";

const OTP = () => {
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
            <input type="email" placeholder="Enter Code" />
            <span>Resend Code</span>
          </div>

          <div className={styles.error}>
            <p>OTP Code is invalid</p>
          </div>

          <div className={styles.bot}>
            <Link href="/forgetpass">
              <a>Back</a>
            </Link>
            <Link href="/forgetpass">
              <a className={styles.botA}>Process</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OTP;
