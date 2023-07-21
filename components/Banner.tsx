import Image from 'next/image';
import banner from "../images/banner.jpg";


function Banner() {
  return (
    <div>

    <div className="flex justify-between items-center border-y border-black py-10 lg:py-0">
      <div className="px-8 space-y-5">
        <h1 className="text-4xl  font-serif"><span className="underline decoraction-4 text-5xl">Shita-kiri Suzume BLOG</span>{" "}<br></br> Current news and developments for the community! </h1>
      </div>

    
    <Image className="hidden md:inline-flex object-scale-down h-54 w-96 mr-16 rounded-full" 
    src={banner} 
    alt="Bild Web3 Startseite" 
    />
    </div>
    </div>
  )
}

export default Banner