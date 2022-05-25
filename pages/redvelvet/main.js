import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/rv.module.css';
import rv from '../../public/img/rv/grup.jpg';
import IreneImg from '../../public/img/rv/nyai.jpg';
import SeulgiImg from '../../public/img/rv/seulgi.jpg';
import WendyImg from '../../public/img/rv/wendy.jpg';
import JoyImg from '../../public/img/rv/joy.jpg';
import YeriImg from '../../public/img/rv/yeri.jpg';
import Grup from './components/Grup';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Viviz() {

  const [getImgValue, setImgValue] = useState("");
  
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000
    });
    AOS.refresh();
  }, [getImgValue])
  
  const myIrene = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={IreneImg} alt="Irene" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Irene</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Irene</span></p>
            <p><span>Tanggal Lahir: 29.03.1991</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const mySeulgi = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={SeulgiImg} alt="Seulgi" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Seulgi</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Seulgi</span></p>
            <p><span>Tanggal Lahir: 10.02.1994</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  const myWendy = () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={WendyImg} alt="Wendy" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Wendy</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Wendy</span></p>
            <p><span>Tanggal Lahir: 21.02.1994</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myJoy= () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={JoyImg} alt="Joy" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Joy</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Joy</span></p>
            <p><span>Tanggal Lahir: 03.10.1996</span></p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  const myYeri= () => {
    setImgValue(
    
    <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
      <div className="pf_member center">
        <div className="pf_img"><Image src={YeriImg} alt="Yeri" /></div>
        <div className="pf_box_m">
          <div className="pf_txt">
            <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Yeri</div>
          </div>
          <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
            <p><span>Nama: Yeri</span></p>
            <p><span>Tanggal Lahir: 05.03.1999</span></p>
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
            <Image src={rv} alt="Viviz" width="350px" height="190px" />
              <div className={styles.seulgi}>
              <span onClick={() => mySeulgi()}>Seulgi</span>
              </div>
              <div className={styles.nyai}>
                <span onClick={() => myIrene()}>Irene</span>
              </div>
              <div className={styles.wen}>
               <span onClick={() => myWendy()}>Wendy</span>
              </div>
              <div className={styles.joy}>
               <span onClick={() => myJoy()}>Joy</span>
              </div>
              <div className={styles.yer}>
               <span onClick={() => myYeri()}>Yeri</span>
              </div>
            </div>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}
