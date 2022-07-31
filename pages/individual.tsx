import Head from "next/head";
import Image from "next/image";
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

          <div className={styles.phoneNum}>
            <label htmlFor="">Phone Num</label>
            <div className={styles.phone}>
              <select name="" id="">
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+222">+22</option>
              </select>
              <div className={styles.loginInput}>
                <input type="passeord" placeholder="Confirm your password" />
              </div>    
            </div>
          </div>

          <Link href="/individual2">
            <a className={styles.linkk}>Verify Now</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Individual2;
