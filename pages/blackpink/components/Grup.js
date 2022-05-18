import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import bplogo from '../../../public/img/logo/blackpink.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-4">
        {!imgValue ? <Image src={bplogo} alt="bp_logo" height="80" width="210" /> : imgValue }
      </div>
  )
}

export default Grup
