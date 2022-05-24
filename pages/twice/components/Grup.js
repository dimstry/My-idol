import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import TwiceLogo from '../../../public/img/logo/twice.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-3 text-center">
      {!imgValue ?  <Image src={TwiceLogo} alt="itzy_logo" height="90" width="120" />
       : imgValue }
      </div>
  )
}

export default Grup
