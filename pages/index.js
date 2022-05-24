import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';
import viviz from '../public/img/logo/viviz.png';
import bp from '../public/img/logo/blackpink.png';
import aespa from '../public/img/logo/aespa.png';
import rv from '../public/img/logo/redvelvet.png';
import itzy from '../public/img/logo/itzy.png';
import ive from '../public/img/logo/ive.png';
import sn from '../public/img/logo/sn.png';
import nmixx from '../public/img/logo/nmixx.png';
import tw from '../public/img/logo/twice.png';

export default function Home() {

  return (
    <div className={styles.main}>
      <a href="/viviz/main">
        <div className={styles.card}>
          <Image src={viviz} alt="viviz_logo" height="80" width="210" />
        </div>
      </a>
      <a href="/blackpink/main">
        <div className={styles.card}>
          <Image src={bp} alt="blackpink_logo" height="80" width="320" />
        </div>
      </a>
      <a href="/aespa/main">
        <div className={styles.card}>
          <Image src={aespa} alt="aespa_logo" height="80" width="210" />
        </div>
      </a>
      <a href="/redvelvet/main">
        <div className={styles.card}>
          <Image src={rv} alt="redvelvet_logo" height="80" width="110" />
        </div>
      </a>
      <a href="/itzy/main">
        <div className={styles.card}>
          <Image src={itzy} alt="itzy_logo" height="80" width="320" />
        </div>
      </a>
      <a href="/ive/main">
        <div className={styles.card}>
          <Image src={ive} alt="ive_logo" height="80" width="100" />
        </div>
      </a>
      <a href="/secretnumber/main">
        <div className={styles.card}>
          <Image src={sn} alt="secretnumber_logo" height="80" width="260" />
        </div>
      </a>
      <a href="/nmixx/main">
        <div className={styles.card}>
          <Image src={nmixx} alt="nmixx_logo" height="80" width="180" />
        </div>
      </a>
      <a href="/twice/main">
        <div className={styles.card}>
          <Image src={tw} alt="twice_logo" height="80" width="90" />
        </div>
      </a>
      <div className={styles.footer}>
       <footer>
          <p>
Code with 💙 By <b>Kresna & Dimas</b>
      </p>
      </footer>
    </div>
    </div>
  )
}