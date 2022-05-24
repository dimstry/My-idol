import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import NmixxLogo from '../../../public/img/logo/nmixx.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-3 text-center">
      {!imgValue ?  <Image src={NmixxLogo} alt="nmixx_logo" height="80" width="180" />
       : imgValue }
      </div>
  )
}

export default Grup
