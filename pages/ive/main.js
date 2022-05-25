import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/ive.module.css';
import ive from '../../public/img/ive/grup.jpg';
import ge from '../../public/img/ive/gae.jpg';
import wonyo from '../../public/img/ive/wy.jpg';
import lizimg from '../../public/img/ive/liz.jpg';
import yujin from '../../public/img/ive/jin.jpg';
import rei from '../../public/img/ive/rei.jpg';
import soo from '../../public/img/ive/soo.jpg';
import Grup from './components/Grup';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ive() {

  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myGaeul = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={ge} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Gaeul</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Gaeul</span></p>
            <p><span>Tanggal Lahir: 24.10.2002</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myWon = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={wonyo} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Wonyoung</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Jang Won-young</span></p>
            <p><span>Tanggal Lahir: 31.08.2004</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myLeso = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={soo} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Leeseo</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: LeeSeo</span></p>
            <p><span>Tanggal Lahir: 21.02.2007</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myYujin = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={yujin} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Yujin</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: An Yu-jin</span></p>
            <p><span>Tanggal Lahir: 01.10.2003</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myRei = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={rei} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Rei</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Naoi Rei</span></p>
            <p><span>Tanggal Lahir: 03.02.2004</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myLiz = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={lizimg} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Liz</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Liz</span></p>
            <p><span>Tanggal Lahir: 21.11.2004</span></p>
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
            <Image src={ive} alt="ive" width="350px" height="190px" />
              <div className={styles.gel}>
              <span onClick={() => myGaeul()}>Gaeul</span>
              </div>
              <div className={styles.won}>
                <span onClick={() => myWon()}>Wonyoung</span>
              </div>
              <div className={styles.le}>
               <span onClick={() => myLeso()}>Leeseo</span>
              </div>
              <div className={styles.jin}>
               <span onClick={() => myYujin()}>Yu-Jin</span>
              </div>
              <div className={styles.rei}>
               <span onClick={() => myRei()}>Rei</span>
              </div>
              <div className={styles.liz}>
               <span onClick={() => myLiz()}>Liz</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}
