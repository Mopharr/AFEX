import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Register2 = () => {
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
          <p>Register new account</p>
          <span>Sign up for an account and start trading today</span>
          <div className={styles.loginInput}>
            <label htmlFor="">Company Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className={styles.loginInput}>
            <label htmlFor="">Password</label>
            <input type="passeord" placeholder="Enter your Passeord" />
          </div>
          <div className={styles.loginInput}>
            <label htmlFor="">Confirm Password</label>
            <input type="passeord" placeholder="Confirm your password" />
          </div>
          <Link href="/corporate3">
            <a className={styles.linkk}>Next Step</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Register2;
