import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/itzy.module.css';
import Grup from './components/Grup';

import itzyGrup from '../../public/img/itzy/itzy.jpg';
import Yeji from '../../public/img/itzy/yeji.jpg';
import Lia from '../../public/img/itzy/lia.jpg';
import Ryu from '../../public/img/itzy/ryu.jpg';
import Chaer from '../../public/img/itzy/chae.jpg';
import Yuna from '../../public/img/itzy/yuna.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Itzy() {
  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myYeji = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Yeji} alt="yeji" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Yeji</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Hwang Yeji</span></p>
            <p><span>Tanggal Lahir: 26.05.2000</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myLia = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Lia} alt="lia" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Lia</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Choi Jisoo</span></p>
            <p><span>Tanggal Lahir: 21.07.2000</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myRyu = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Ryu} alt="ryujin" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Ryujin</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Shin Ryujin</span></p>
            <p><span>Tanggal Lahir: 17.04.2001</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myChaer = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Chaer} alt="chaeryeong" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Chaeryeong</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Lee Chaeryeong</span></p>
            <p><span>Tanggal Lahir: 05.06.2000</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myYuna = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Yuna} alt="yuna" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Yuna</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Shin Yuna</span></p>
            <p><span>Tanggal Lahir: 09.12.2003 </span></p>
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
              <Image src={itzyGrup} alt="itzy" width="350px" height="210px"/>
              <div className={styles.yeji}>
                <span onClick={() => myYeji()}>Yeji</span>
              </div>
              <div className={styles.lia}>
                <span onClick={() => myLia()}>Lia</span>
              </div>
              <div className={styles.ryujin}>
                <span onClick={() => myRyu()}>Ryujin</span>
              </div>
              <div className={styles.chaer}>
                <span onClick={() => myChaer()}>Chaeryeong</span>
              </div>
              <div className={styles.yuna}>
                <span onClick={() => myYuna()}>Yuna</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}