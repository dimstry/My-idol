import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/bp.module.css';

import bg from '../../public/img/bp/bg.jpg'
import BlackPink from '../../public/img/bp/blackpink.jpg'
import Soya from '../../public/img/bp/soya.jpg'
import Nini from '../../public/img/bp/nini.jpg'
import Lisa from '../../public/img/bp/lisa.jpg'
import Rose from '../../public/img/bp/rose.jpg'

import Grup from './components/Grup';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blackpink() {

  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myJisoo = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Soya} alt="jisoo" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">JiSoo</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Kim JiSoo</span></p>
            <p><span>Tanggal Lahir: 03.01.1995</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myJennie = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Nini} alt="jennie" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Jennie</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Kim Jennie</span></p>
            <p><span>Tanggal Lahir: 16.01.1996</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myLisa = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Lisa} alt="lisa" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Lisa</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: LaLisa Manobal</span></p>
            <p><span>Tanggal Lahir: 27.03.1997</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myRose = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Rose} alt="rose" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Rosé</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Roseanne Park</span></p>
            <p><span>Tanggal Lahir: 11.02.1997</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  return (
    <div className={styles.bg}>
      <Container className="d-flex text-center justify-content-center align-items-center">
        <Row>
          <Col>
            <div className={styles.card}>
              <Image src={BlackPink} alt="Blackpink" width="350px" height="230px" />
              <div className={styles.soya}>
                <span onClick={() => myJisoo()}>Jisoo</span>
              </div>
              <div className={styles.nini}>
                <span onClick={() => myJennie()}>Jennie</span>
              </div>
              <div className={styles.lisa}>
                <span onClick={() => myLisa()}>Lisa</span>
              </div>
              <div className={styles.rose}>
                <span onClick={() => myRose()}>Rose</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}
