import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import rvlogo from '../../../public/img/logo/redvelvet.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-1 text-center">
      {!imgValue ? <Image src={rvlogo} alt="viviz_logo" height="90" width="200" /> : imgValue}
      </div>
  )
}

export default Grup
