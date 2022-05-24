import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/nmixx.module.css';
import Grup from './components/Grup';

import nmixxGrup from '../../public/img/nmixx/nmixx.jpg';
import Lily from '../../public/img/nmixx/lily.jpg';
import Haewon from '../../public/img/nmixx/hae.jpg';
import Sullyoon from '../../public/img/nmixx/sul.jpg';
import Jinni from '../../public/img/nmixx/jinni.jpg';
import Bae from '../../public/img/nmixx/bae.jpg';
import Jiwoo from '../../public/img/nmixx/jiwoo.jpg';
import Kyujin from '../../public/img/nmixx/kyu.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Nmixx() {
  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myLily = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Lily} alt="lily" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Lily</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Lily Morrow</span></p>
            <p><span>Tanggal Lahir: 17.10.2002</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myHaewon = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Haewon} alt="haewon" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Haewon</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Oh Haewon</span></p>
            <p><span>Tanggal Lahir: 25.02.2003</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const mySullyoon = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Sullyoon} alt="sullyoon" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Sullyoon</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Seol Yoona</span></p>
            <p><span>Tanggal Lahir: 26.01.2004</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myJinni = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Jinni} alt="jinni" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Jinni</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Choi Yunjin</span></p>
            <p><span>Tanggal Lahir: 16.04.2004</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myBae = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Bae} alt="bae" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Bae</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Bae Jinsol</span></p>
            <p><span>Tanggal Lahir: 28.12.2004</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myJiwoo = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Jiwoo} alt="jiwoo" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Jiwoo</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Kim Jiwoo</span></p>
            <p><span>Tanggal Lahir: 13.04.2005</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myKyujin = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Kyujin} alt="kyujin" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Kyujin</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Jang Kyujin</span></p>
            <p><span>Tanggal Lahir: 26.05.2006</span></p>
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
              <Image src={nmixxGrup} alt="nmixx" width="380px" height="260px"/>
              <div className={styles.lily}>
                <span onClick={() => myLily()}>Lily</span>
              </div>
              <div className={styles.hae}>
                <span onClick={() => myHaewon()}>Haewon</span>
              </div>
              <div className={styles.sule}>
                <span onClick={() => mySullyoon()}>Sullyoon</span>
              </div>
              <div className={styles.jinni}>
                <span onClick={() => myJinni()}>Jinni</span>
              </div>
              <div className={styles.bae}>
                <span onClick={() => myBae()}>Bae</span>
              </div>
              <div className={styles.jiwoo}>
                <span onClick={() => myJiwoo()}>Jiwoo</span>
              </div>
              <div className={styles.kyujin}>
                <span onClick={() => myKyujin()}>Kyujin</span>
              </div>
              
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}