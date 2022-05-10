import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';
import viviz from '../public/img/logo/viviz.png'
import bp from '../public/img/logo/blackpink.png'
import aespa from '../public/img/logo/aespa.png'
import rv from '../public/img/logo/redvelvet.png'
import itzy from '../public/img/logo/itzy.png'
import ive from '../public/img/logo/ive.png'
import sn from '../public/img/logo/sn.png'
import nmixx from '../public/img/logo/nmixx.png'
import tw from '../public/img/logo/twice.png'

export default function Home() {

  return (
    <div className={styles.main}>
      <a href="/viviz/main">
        <div className={styles.card}>
          <Image src={viviz} alt="viviz_logo" height="80" width="210" />
        </div>
      </a>
      <div className={styles.card}>
        <a href="">
          <Image src={bp} alt="blackpink_logo" height="80" width="320" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={aespa} alt="aespa_logo" height="80" width="210" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={rv} alt="redvelvet_logo" height="80" width="110" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={itzy} alt="itzy_logo" height="80" width="320" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={ive} alt="ive_logo" height="80" width="100" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={sn} alt="secretnumber_logo" height="80" width="260" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={nmixx} alt="nmixx_logo" height="80" width="180" />
        </a>
      </div>
      <div className={styles.card}>
        <a href="">
          <Image src={tw} alt="twice_logo" height="80" width="90" />
        </a>
      </div>
      <div className={styles.footer}>
       <footer>
          <p>Code with <CoffeeIcon /> By <b>Kresna & Dimas</b></p>
        </footer>
      </div>
    </div>
    )
}
