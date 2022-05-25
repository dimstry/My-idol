import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import ivelogo from '../../../public/img/logo/ive.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-1">
        {!imgValue ? <Image src={ivelogo} alt="ive_logo" height="100" width="200" /> : imgValue }
      </div>
  )
}

export default Grup
