import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/twice.module.css';
import Grup from './components/Grup';

import twiceGrup from '../../public/img/twice/twice.jpg';
import Nay from '../../public/img/twice/ny.jpg';
import Jeong from '../../public/img/twice/jy.jpg';
import Momo from '../../public/img/twice/mm.jpg';
import Sana from '../../public/img/twice/sn.jpg';
import Jihyo from '../../public/img/twice/jh.jpg';
import Mina from '../../public/img/twice/mn.jpg';
import Dahyun from '../../public/img/twice/dh.jpg';
import Chae from '../../public/img/twice/cy.jpg';
import Tzu from '../../public/img/twice/tz.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Twice() {
  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myNaya = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Nay} alt="naya" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Nayeon</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Im Nayeon</span></p>
            <p><span>Tanggal Lahir: 22.09.1995</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myJeong = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Jeong} alt="jeongyeon" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Jeongyeon</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Yoo Jeongyeon</span></p>
            <p><span>Tanggal Lahir: 01.11.1996</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myMomo = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Momo} alt="momo" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Momo</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Hirai Momo</span></p>
            <p><span>Tanggal Lahir: 09.11.1996</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const mySana = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Sana} alt="sana" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Sana</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Minatozaki Sana</span></p>
            <p><span>Tanggal Lahir: 29.12.1996</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myJihyo = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Jihyo} alt="jihyo" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Jihyo</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Park Jihyo</span></p>
            <p><span>Tanggal Lahir: 01.02.1997</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myMina = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Mina} alt="mina" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Mina</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Myoi Mina</span></p>
            <p><span>Tanggal Lahir: 24.03.1997</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myDahyun = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Dahyun} alt="dahyun" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Dahyun</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Kim Dahyun</span></p>
            <p><span>Tanggal Lahir: 28.05.1998</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myChae = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Chae} alt="chaeyoung" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Chaeyoung</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Son Chaeyoung</span></p>
            <p><span>Tanggal Lahir: 23.04.1999</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myTzu = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={Tzu} alt="tzuyu" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Tzuyu</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Chou Tzuyu</span></p>
            <p><span>Tanggal Lahir: 14.06.1999</span></p>
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
              <Image src={twiceGrup} alt="twice" width="380px" height="260px"/>
              <div className={styles.naya}>
                <span onClick={() => myNaya()}>Nayeon</span>
              </div>
              <div className={styles.jeong}>
                <span onClick={() => myJeong()}>Jeongyeon</span>
              </div>
              <div className={styles.momo}>
                <span onClick={() => myMomo()}>Momo</span>
              </div>
              <div className={styles.sana}>
                <span onClick={() => mySana()}>Sana</span>
              </div>
              <div className={styles.jihyo}>
                <span onClick={() => myJihyo()}>Jihyo</span>
              </div>
              <div className={styles.mina}>
                <span onClick={() => myMina()}>Mina</span>
              </div>
              <div className={styles.dahyun}>
                <span onClick={() => myDahyun()}>Dahyun</span>
              </div>
              <div className={styles.chae}>
                <span onClick={() => myChae()}>Chaeyoung</span>
              </div>
              <div className={styles.tzuyu}>
                <span onClick={() => myTzu()}>Tzuyu</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}