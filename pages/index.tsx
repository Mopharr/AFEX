import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Com X</title>
        <meta name="description" content="ComX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="logo" />
        <div className={styles.signIn}>
          <p>Sign in to ComX</p>
          <span>Welcome to ComX</span>
          <br />
          <Link href="/signin">
            <a>
              <button>Sign In</button>
            </a>
          </Link>
        </div>
        <div className={styles.signIn}>
          <p>Create an Accout</p>
          <span>Join the Family</span>
          <br />
          <Link href="/register">
            <a>
              <button className={styles.signBtn}>Register</button>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
