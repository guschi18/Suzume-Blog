"use client"

import Link from "next/link";

  
  function Video(){
    return (
      <div>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <div className="mb-2 pt-4 pl-3 text-3xl tracking-tight font-extrabold underline text-black sm:text-4xl">How to buy</div>
    <div className="flex justify-center pt-8 ">
    <video 
                    className="flex max-h-96 rounded-md playsinline"
                    controls
                    poster ="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/3.PNG?alt=media&token=938b83a6-85e2-42a4-9d13-5eed96359571"
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/video_2023-07-13_10-49-22.mp4?alt=media&token=578bdcdb-f362-49da-8dce-34a552dc1e2e" type="video/mp4" />
                  
                </video>
    </div>
    <div className="flex justify-center ml-1 font-bold text-xs mt-4 lg:text-lg">Token Contract:{" "}<Link href={"https://etherscan.io/token/0x0B452278223D3954F4AC050949D7998e373e7E43"}>0x0B452278223D3954F4AC050949D7998e373e7E43</Link></div>
    </div>
    )
    }
    export default Video;