import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/main.module.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blackpink() {
  return (
  
    <div className={}>
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
           <div className={styles.card}>
            <Image src={viviz} alt="Viviz" width="350px" height="190px" />
              <div className={styles.eunha}>
              <span onClick={() => myEunha()}>Eunha</span>
              </div>
              <div className={styles.sinb}>
                <span onClick={() => mySinB()}>SinB</span>
              </div>
              <div className={styles.umji}>
               <span onClick={() => myUmji()}> Umji </span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  
  )
}