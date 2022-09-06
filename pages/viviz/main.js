import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/main.module.css';
import viviz from '../../public/img/viviz/viviz.jpg';
import eunHa from '../../public/img/viviz/eunHa.jpg'
import sinB from '../../public/img/viviz/sinB.jpg'
import Umji from '../../public/img/viviz/umji.jpg'
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
  }, [])
  
  const myEunha = () => {
    setImgValue(<h1 className='text-white'>Wait....</h1>);
    setTimeout(() => {
      setImgValue(
        <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
          <div className="pf_member center">
            <div className="pf_img"><Image src={eunHa} alt="eunha" /></div>
            <div className="pf_box_m">
              <div className="pf_txt">
                <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">EunHa</div>
              </div>
              <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
                <p><span>Nama: Eunha</span></p>
                <p><span>Tanggal Lahir: 30.05.1997 </span></p>
              </div>
            </div>
          </div>
        </div>
      );
    }, 500);
  }
  
  const mySinB = () => {
    setImgValue(<h1 className='text-white'>Wait....</h1>);
    setTimeout(() => {
      setImgValue(
        <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
          <div className="pf_member center">
            <div className="pf_img"><Image src={sinB} alt="sinB" /></div>
            <div className="pf_box_m">
              <div className="pf_txt">
                <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">SinB</div>
              </div>
              <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
                <p><span>Nama: SinB</span></p>
                <p><span>Tanggal Lahir: 03.06.1998 </span></p>
              </div>
            </div>
          </div>
        </div>
      );
    }, 500);
  }
  
  const myUmji = () => {
    setImgValue(<h1 className='text-white'>Wait....</h1>);
    setTimeout(() => {
      setImgValue(
        <div className="cont_m profile" data-aos="fade-up" data-aos-delay="100">
          <div className="pf_member center">
            <div className="pf_img"><Image src={Umji} alt="umji" /></div>
            <div className="pf_box_m">
              <div className="pf_txt">
                <div className="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200">Umji</div>
              </div>
              <div className="pf_txt_cont" data-aos="fade-right" data-aos-delay="300">
                <p><span>Nama: Umji</span></p>
                <p><span>Tanggal Lahir: 19.08.1998 </span></p>
              </div>
            </div>
          </div>
        </div>
      );
    }, 500);
  }
  
  return (
    <div className={styles.bg}>
      <Container>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <div className={styles.card}>
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
          </Col>
          <Col>
            <Grup imgValue={getImgValue}/>
          </Col>
        </Row>
      </Container>
   </div>
  )
}
