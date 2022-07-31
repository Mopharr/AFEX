import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Individual = () => {
  return (
    <div className={styles.regg}>
      <div className={styles.loginOpt}>
        <div className={styles.loginInput}>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="Enter your First Name" />
        </div>
        <div className={styles.loginInput}>
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Enter your Last Name" />
        </div>
      </div>

      <div className={styles.loginInput}>
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter your Email" />
      </div>

      <Link href="individual2">
        <a className={styles.linkk}>Next Step</a>
      </Link>
    </div>
  );
};

export default Individual;
