import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import snlogo from '../../../public/img/logo/sn.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-1">
        {!imgValue ? <Image src={snlogo} alt="sn_logo" height="80" width="210" /> : imgValue }
      </div>
  )
}

export default Grup
