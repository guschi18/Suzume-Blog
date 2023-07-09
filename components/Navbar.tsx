import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='py-2 font-serif decoraction-4 text-xl'>
      <nav className="w-full bg-gradient-to-br from-black to-amber-900 shadow">
        <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-center py-3 md:py-5 md:flex">
            </div>
          </div>
          <div>
              <ul className=" justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 mt-0">
              <li className="text-white">
                  <Link href="/post2">
                    <p>Latest News</p>
                  </Link>
                  </li>
                  <li className="text-white">
                  <Link href="/post/shita-kiri-suzume-whitepaper-v1-0">
                    <p>Whitepaper</p>
                  </Link>
                </li>
              <li className="text-white">
                    <Link href="/">
                    <p>Suzume Nest</p>
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}