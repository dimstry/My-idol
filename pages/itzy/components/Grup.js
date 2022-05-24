import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItzyLogo from '../../../public/img/logo/itzy.png';

const Grup = ({imgValue}) => {
  return (
      <div className="mt-3 text-center">
      {!imgValue ?  <Image src={ItzyLogo} alt="itzy_logo" height="90" width="230" />
       : imgValue }
      </div>
  )
}

export default Grup
