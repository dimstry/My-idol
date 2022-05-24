import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import aespalogo from '../../../public/img/logo/aespa.png';

const Grup = () => {
  return (
      <div className="mt-3">
        <Image src={aespalogo} alt="aespa_logo" />
      </div>
  )
}

export default Grup
