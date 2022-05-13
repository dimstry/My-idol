import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import vivizlogo from '../../../public/img/logo/viviz.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-1">
        {!imgValue ? <Image src={vivizlogo} alt="viviz_logo" height="80" width="210" /> : imgValue }
      </div>
  )
}

export default Grup
