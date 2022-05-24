import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/aespa.module.css';
import Grup from './components/Grup';
import aespa from '../../public/img/aespa/grup.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aespa () {
  return (
    <div className={styles.bg}>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
           <div className={styles.card}>
            <Image src={aespa} alt="Aespa" width="350px" height="190px"/>
              <div className={styles.ningning}>
                <span>Ningning</span>
              </div>
              <div className={styles.karin}>
                <span onClick={() => mySinB()}>Karina</span>
              </div>
              <div className={styles.gisel}>
               <span onClick={() => myUmji()}>Giselle</span>
              </div>
              <div className={styles.winter}>
               <span onClick={() => myUmji()}>Winter</span>
              </div>
            </div>
            <Grup />
          </Col>
        </Row>
      </Container>
   </div>
  )
}