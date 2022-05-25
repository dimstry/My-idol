import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/sn.module.css';
import secret from '../../public/img/sn/grup.jpg';
import dami from '../../public/img/sn/dami.jpg';
import dit from '../../public/img/sn/dit.jpg';
import zu from '../../public/img/sn/zu.jpg';
import min from '../../public/img/sn/min.jpg';
import jin from '../../public/img/sn/jin.jpg';
import lea from '../../public/img/sn/lea.jpg';
import Grup from './components/Grup';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sn() {

  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myMinji= () => {
    setImgValue(
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={min} alt="Dita" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Minji</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama:Park Minji</span></p>
            <p><span>Tanggal Lahir: 31.03.1999</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myDita = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={dit} alt="Dita" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Dita</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Dita Karang</span></p>
            <p><span>Tanggal Lahir: 25.12.1996</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myDami = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={dami} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Soodam</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Lee Soo Dam</span></p>
            <p><span>Tanggal Lahir: 09.11.1999</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myJinny = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={jin} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Jinny</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Park Jin Hee</span></p>
            <p><span>Tanggal Lahir: 19.01.1999</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myLea = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={lea} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Lea</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Ogawa Mizuki</span></p>
            <p><span>Tanggal Lahir: 12.08.1995</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myZuu = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={zu} alt=".." /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Zuu</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama:Ji Yeongju</span></p>
            <p><span>Tanggal Lahir: 24.03.2000</span></p>
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
            <Image src={secret} alt="Viviz" width="350px" height="190px" />
              <div className={styles.min}>
              <span onClick={() => myMinji()}>Minji</span>
              </div>
              <div className={styles.dit}>
                <span onClick={() => myDita()}>Dita</span>
              </div>
              <div className={styles.zuu}>
               <span onClick={() => myZuu()}> Zuu </span>
              </div>
              <div className={styles.dam}>
               <span onClick={() => myDami()}> Soodam </span>
              </div>
              <div className={styles.jin}>
               <span onClick={() => myJinny()}> Jinny</span>
              </div>
              <div className={styles.le}>
               <span onClick={() => myLea()}>Lea</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}