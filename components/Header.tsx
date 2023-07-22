import Link from "next/link";
import logo from "../images/logo.png"
import Image from 'next/image'
import Uniswap from "../images/uniswap.png"
import CMC from "../images/cmc.png"


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
  <div className="flex justify-end space-x-5">
    <Link href="https://twitter.com/s_shitakiri">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-7 mt-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        />
      </svg>
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
    <Link href="https://coinmarketcap.com/currencies/shita-kiri-suzume/">
      <Image
      className="w-8 cursor-pointer mt-2"
      width={500}
      height={500}
      src={CMC}
      alt="Uniswap"


      ></Image>
    </Link>
  </div>
</div>
    </header>
  );
}

export default Header;