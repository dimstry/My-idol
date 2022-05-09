import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <a href="">VIVIZ </a>
      </div>
      <div className={styles.card}>
        <a href="">BLACKPINK</a>
      </div>
      <div className={styles.card}>
        <a href="">AESPA</a>
      </div>
      <div className={styles.card}>
        <a href="">RED VELVET </a>
      </div>
      <div className={styles.card}>
        <a href="">ITZY </a>
      </div>
      <div className={styles.card}>
        <a href="">IVE </a>
      </div>
      <div className={styles.card}>
        <a href="">SECRET NUMBER </a>
      </div>
      <div className={styles.card}>
        <a href="">NMIXX</a>
      </div>
      <div className={styles.card}>
        <a href="">TWICE</a>
      </div>
      <div className={styles.footer}>
       <footer>
          <p>Code with <CoffeeIcon /> By <b>Kresna & Dimas</b></p>
        </footer>
      </div>
    </div>
    )
}
