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
import nini from '../../public/img/aespa/nini.jpg';
import karina from '../../public/img/aespa/kayin.jpg';
import gigi from '../../public/img/aespa/gigi.jpg';
import Winter from '../../public/img/aespa/winter.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aespa () {
  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const Ning = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={nini} alt="nini" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">NingNing</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: NingNing</span></p>
            <p><span>Tanggal Lahir: 23.10.2002</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const karin = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={karina} alt="nini" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Karina</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Karina</span></p>
            <p><span>Tanggal Lahir: 11.04.2000</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const gisel = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={gigi} alt="gigi" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Giselle</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Giselle</span></p>
            <p><span>Tanggal Lahir: 30.10.2000</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const winter = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Winter} alt="nini" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Winter</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Winter</span></p>
            <p><span>Tanggal Lahir: 01.01.2001</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  return (
    <div className={styles.bg}>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col className="mt-4">
           <div className={styles.card}>
            <Image src={aespa} alt="Aespa" width="350px" height="190px"/>
              <div className={styles.ningning}>
                <span onClick={() => Ning()}>Ningning</span>
              </div>
              <div className={styles.karin}>
                <span onClick={() => karin()}>Karina</span>
              </div>
              <div className={styles.gisel}>
               <span onClick={() => gisel()}>Giselle</span>
              </div>
              <div className={styles.winter}>
               <span onClick={() => winter()}>Winter</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}