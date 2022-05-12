import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import vivizlogo from '../../../public/img/logo/viviz.png';

const Grup = () => {
  return (
      <div className="mt-4">
        <Image src={vivizlogo} alt="viviz_logo" height="80" width="210" />
      </div>
  )
}

export default Grup
