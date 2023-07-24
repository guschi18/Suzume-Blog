"use client"

import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Link from 'next/link';


  
  function Slider(){
  

    return (
      <div className='mt-16 '>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <Link href="https://suzume-shop.myshopify.com/" >
        <div className="mb-2 pt-4 pl-3 text-3xl tracking-tight font-extrabold underline text-black sm:text-4xl">Official Shita-kiri Suzume Shop</div></Link>
        <div className='flex pt-10  justify-cente'>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={3}
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
      <SwiperSlide><Image className="object-contain cursor-pointer" 
            src="https://cdn.shopify.com/s/files/1/0714/8883/1773/products/unisex-heavy-blend-hoodie-black-front-63e826cc499c2.jpg?v=1676158692" width={2000}
            height={2000}
            alt="product"></Image></SwiperSlide>
      <SwiperSlide><Image className="object-contain cursor-pointer" 
            src="https://cdn.shopify.com/s/files/1/0714/8883/1773/products/unisex-heavy-blend-hoodie-maroon-front-63e826cc4ad1e.jpg?v=1676158704" width={1600}
            height={1600}
            alt="product"></Image></SwiperSlide>
      <SwiperSlide><Image className="object-contain cursor-pointer" 
            src="https://cdn.shopify.com/s/files/1/0714/8883/1773/products/mouse-pad-white-product-details-63ea85de20823.jpg?v=1676314096" width={1600}
            height={1600}
            alt="product"></Image></SwiperSlide>
      <SwiperSlide><Image className="object-contain cursor-pointer" 
            src="https://cdn.shopify.com/s/files/1/0714/8883/1773/products/mens-premium-tank-top-white-front-63e828990ec08.jpg?v=1676258305" width={1600}
            height={1600}
            alt="product"></Image></SwiperSlide>
        <SwiperSlide><Image className="object-contain cursor-pointer" 
            src="https://cdn.shopify.com/s/files/1/0714/8883/1773/products/unisex-basic-softstyle-t-shirt-black-front-63eaa3a930dc4.jpg?v=1676321721" width={1600}
            height={1600}
            alt="product"></Image></SwiperSlide>
        <SwiperSlide><Image className="object-contain cursor-pointer" 
            src="https://cdn.shopify.com/s/files/1/0714/8883/1773/products/kiss-cut-stickers-white-4x4-lifestyle-1-63e7d8a6e5a88.png?v=1676138674" width={1600}
            height={1600}
            alt="product"></Image></SwiperSlide>
      ...
    </Swiper>
    </div>
    <div className='flex justify-center mx-4 '>
  <div>
    <h1 className='flex justify-center pt-4 pb-4 text-xl sm:text-2xl font-medium '>This is our official shop for Shita-kiri Suzume merchandise!</h1>
    <p className='max-w-4xl text-xl'>The shop is currently undergoing renovations and will soon receive a new, appealing design. <br></br>Additionally, exciting new products will be added to the range.
    For detailed information about our products and collections, please <Link className='underline text-xl font-medium ' href="https://suzume-shop.myshopify.com/">visit the shop.</Link><br></br>
    There you will find everything worth knowing about the Shita-kiri Suzume merchandise items.
    <br/>
    If you have any questions or concerns, feel free to contact SmallSparrow8 or YoshiSparrow.
    <br/>
    <br />
    <span className='flex justify-center font-medium'>
    All proceeds will go to a community wallet in the future, this will be published here soon.</span>
    </p>
  </div>
</div>
    </div>
    )
    }
    export default Slider;