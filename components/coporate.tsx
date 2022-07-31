import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Corporate = () => {
  return (
    <div className={styles.regg}>
      <div className={styles.loginInput}>
        <label htmlFor="">Company Name</label>
        <input type="text" placeholder="Enter Company Name" />
      </div>

      <div className={styles.loginOpt}>
        <div className={styles.loginInput}>
          <label htmlFor="">Business Type</label>
          <select name="" id="">
            <option value="">Select type of Business</option>
            <option value="">Business</option>
            <option value="">Business</option>
          </select>
        </div>
        <div className={styles.loginInput}>
          <label htmlFor="">Date of Incorporation</label>
          <input type="date" placeholder="Enter Code" />
        </div>
      </div>
      <Link href="/corporate2">
        <a className={styles.linkk}>Next Step</a>
      </Link>
    </div>
  );
};

export default Corporate;
