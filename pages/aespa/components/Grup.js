import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import aespalogo from '../../../public/img/logo/aespa.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-3 text-center">
      {!imgValue ?  <Image src={aespalogo} alt="aespa_logo" height="90" width="230" />
       : imgValue }
      </div>
  )
}

export default Grup
