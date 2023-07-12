import React from 'react'

const Home: React.FC = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 pt-2 gap-2 ">
      <div className='flex mt-9 justify-center'>
    <iframe id="ytplayer" type="text/html" width="420" height="238"
  src="http://www.youtube.com/embed/E0PHnSgBCZI?autoplay=1&origin=http://example.com"
  frameborder="0" allowfullscreen/></div>
    <div className='flex justify-center'>
    <iframe width="420" height="315" src="https://player.vimeo.com/video/790485662"  frameborder="0" allowfullscreen></iframe>
    </div>
    </div>
   )
 }

export default Home