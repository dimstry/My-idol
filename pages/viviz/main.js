import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useRef, useState, useEffect} from 'react';
import styles from '../../styles/main.module.css';
import viviz from '../../public/img/viviz/viviz.jpg';
import eunHa from '../../public/img/viviz/eunHa.jpg'
import sinB from '../../public/img/viviz/sinB.jpg'
import Umji from '../../public/img/viviz/umji.jpg'
import Grup from './components/Grup';
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap, TweenMax, Power3 } from "gsap";

export default function Viviz() {
  let LogoImg=useRef(null);
  
  useEffect(() => {
    console.log("bisa");
    TweenMax.to
    (
      LogoImg,
      .8, 
      {
        opacity:1,
        y:-40,
        ease:Power3.easeOut,
        delay:.3
      }
    )
  }, [])
  
  const [getImgValue, setImgValue] = useState("");
  
  const myEunha = () => {
    setImgValue(
    
    <div ref={el => {LogoImg=el}} className="cont_m profile">
      <div className="pf_member center">
        <div className="pf_img"><Image src={eunHa} alt="eunha" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker">EunHa</div>
          </div>
          <div className="pf_txt_cont">
            <p><span>Nama: Eunha</span></p>
            <p><span>Tanggal Lahir: Tidak tahu</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const mySinB = () => {
    setImgValue(
    
    <div ref={el => {LogoImg=el}} className="cont_m profile">
      <div className="pf_member center">
        <div className="pf_img"><Image src={sinB} alt="sinB" /></div>
        <div ref={el => {LogoImg=el}} className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker">SinB</div>
          </div>
          <div ref={el => {LogoImg=el}} className="pf_txt_cont">
            <p><span>Nama: SinB</span></p>
            <p><span>Tanggal Lahir: Tidak tahu</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myUmji = () => {
    setImgValue(
    
    <div ref={el => {LogoImg=el}} className="cont_m profile">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Umji} alt="umji" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker">Umji</div>
          </div>
          <div className="pf_txt_cont">
            <p><span>Nama: Umji</span></p>
            <p><span>Tanggal Lahir: Tidak tahu</span></p>
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
           <div ref={el => {LogoImg=el}} className={styles.card}>
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