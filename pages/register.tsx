import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.css";
import Corporate from "../components/coporate";
import Individual from "../components/individual";
import { useState } from "react";

const Register = () => {
  const [toggle, setToggle] = useState(2)

  const toggleTab = (index: number) => {
    setToggle(index)
  }

  return (
    <div className={styles.register}>
      <Head>
        <title>Com X</title>
        <meta name="description" content="ComX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.login}>
        <img src="/logo.png" alt="" />
        <div className={styles.loginCon}>
          <p>Register new account</p>
          <span>Sign up for an account and start trading today</span>

          <div className={styles.reg}>
            <p>Select select the category that best describes you</p>

            <button
              onClick={() => toggleTab(1)}
              className={toggle === 1 ? styles.regBtn : styles.active}
            >
              Individual
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={toggle === 2 ? styles.regBtn : styles.active}
            >
              Corporate
            </button>

            {toggle === 2 ? <Corporate /> : <Individual />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
