import Link from 'next/link';
import logo from "../images/logo.png";
import Image from 'next/image'



const Footer = () => {
  return (
    <footer className="bg-white rounded-lg m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8" >
    <div className="sm:flex sm:items-center sm:justify-between">  
    <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
            className="w-32 object-contain cursor-pointer"
            src={logo}
            alt="btc-eth Symbole" />
        </Link>
    </div>
    <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">SHITA-KIRI-SUZUME BLOG™</a>. All rights reserved.</span>
    </div>
</footer>
)
}

export default Footer