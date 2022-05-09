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
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      
      <footer className={styles.footer}>
        <p>Code with <CoffeeIcon /> By <b>Kresna & Dimas</b></p>
      </footer>
    </div>
    )
}
