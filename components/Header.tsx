import Link from "next/link";
import logo from "../images/logo.png"
import Image from 'next/image'
import Uniswap from "../images/uniswap.png"
import CMC from "../images/cmc.png"
import Twitter from "../images/twitter.png"


function Header() {
  return (
    <header className='flex justify-around p-2 mx-auto'>
     <div className='flex items-center space-x-5'>
        <Link href="/">
            <Image
            className="w-48 object-contain cursor-pointer" 
            src={logo}
            alt="logo" />
        </Link>
        </div >
        <div className="sm:inline-flex items-center space-x-5 ml-24">
  <div className="flex justify-end space-x-5 pr-2">
    <Link href="https://twitter.com/s_shitakiri">
    <Image
      className="w-9 pt-2 cursor-pointer"
      width={500}
      height={500}
      src={Twitter}
      alt="Twitter"
    ></Image>
    </Link>
    <Link href="https://coinmarketcap.com/currencies/shita-kiri-suzume/">
      <Image
      className="w-8 ml-2 cursor-pointer mt-2"
      width={500}
      height={500}
      src={CMC}
      alt="CMC"
    ></Image>
    </Link>
    <Link href="https://app.uniswap.org/#/swap?outputCurrency=0x0b452278223d3954f4ac050949d7998e373e7e43">
      <Image
      className="w-10 cursor-pointer"
      width={500}
      height={500}
      src={Uniswap}
      alt="Uniswap"
    ></Image>
    </Link>
  </div>
</div>
    </header>
  );
}

export default Header;