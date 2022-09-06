import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import viviz from "../public/img/logo/viviz.png";
import bp from "../public/img/logo/blackpink.png";
import aespa from "../public/img/logo/aespa.png";
import rv from "../public/img/logo/redvelvet.png";
import itzy from "../public/img/logo/itzy.png";
import ive from "../public/img/logo/ive.png";
import sn from "../public/img/logo/sn.png";
import nmixx from "../public/img/logo/nmixx.png";
import tw from "../public/img/logo/twice.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <Link href="/viviz/main">
        <a>
          <div className={styles.card}>
            <Image src={viviz} alt="viviz_logo" height="80" width="210" />
          </div>
        </a>
      </Link>
      {/* batas */}
      <Link href="/blackpink/main">
        <a>
          <div className={styles.card}>
            <Image src={bp} alt="blackpink_logo" height="80" width="320" />
          </div>
        </a>
      </Link>
      {/* batas */}
      <Link href="/aespa/main">
        <a>
          <div className={styles.card}>
            <Image src={aespa} alt="aespa_logo" height="80" width="210" />
          </div>
        </a>
      </Link>
      <Link href="/redvelvet/main">
        <a>
          <div className={styles.card}>
            <Image src={rv} alt="redvelvet_logo" height="80" width="110" />
          </div>
        </a>
      </Link>
      {/* batas */}
      <Link href="/itzy/main">
        <a>
          <div className={styles.card}>
            <Image src={itzy} alt="itzy_logo" height="80" width="320" />
          </div>
        </a>
      </Link>
      {/* batas */}
      <Link href="/ive/main">
        <a>
          <div className={styles.card}>
            <Image src={ive} alt="ive_logo" height="80" width="100" />
          </div>
        </a>
      </Link>
      {/* batas */}
      <Link href="/secretnumber/main">
        <a>
          <div className={styles.card}>
            <Image src={sn} alt="secretnumber_logo" height="80" width="260" />
          </div>
        </a>
      </Link>
      <Link href="/nmixx/main">
        <a>
          <div className={styles.card}>
            <Image src={nmixx} alt="nmixx_logo" height="80" width="180" />
          </div>
        </a>
      </Link>
      <Link href="/twice/main">
        <a>
          <div className={styles.card}>
            <Image src={tw} alt="twice_logo" height="80" width="90" />
          </div>
        </a>
      </Link>
      <div className={styles.footer}>
        <footer>
          <p>
            Code with 💙 By <b>Kresna & Dimas</b>
          </p>
        </footer>
      </div>
    </div>
  );
}
