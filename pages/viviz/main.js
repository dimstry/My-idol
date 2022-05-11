import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import * as React from 'react';
import styles from '../../styles/main.module.css';
import viviz from '../../public/img/viviz/viviz.jpg';
import vivizlogo from '../../public/img/logo/viviz.png';

export default function Viviz() {
  return (
    <div className={styles.bg}>
      <div className="intro d-flex justify-content-end align-items-end">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                 <div className={styles.card}>
                  <Image src={viviz} alt="Viviz" width="350px" height="190px" />
                    <div className={styles.eunha}>
                    Eunha
                    </div>
                    <div className={styles.sinb}>
                      SinB
                    </div>
                    <div className={styles.umji}>
                      Umji
                    </div>
                  </div>
                 <Image src={vivizlogo} alt="viviz_logo" height="80" width="210" />
                </Col>
              </Row>
            </Container>
      </div>
   </div>
  )
}