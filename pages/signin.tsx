import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Login = () => {
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
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className={styles.loginInput}>
            <label htmlFor="">Your Password</label>
            <input type="passeord" placeholder="Enter your Passeord" />
          </div>
          <div className={styles.bottom}>
            <div>
              <input type="checkbox" />
              <span>Stay Signed In</span>
            </div>
            <Link href="/forgetpass">
              <a>Forget Password</a>
            </Link>
          </div>

          <Link href="/">
            <a>
              <button className={styles.btn}>Sign In</button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <button className={styles.btn1}>Back</button>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
