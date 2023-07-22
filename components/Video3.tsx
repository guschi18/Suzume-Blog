  function Video(){
    return (
      <div>
    <div className="flex justify-center mt-1 pt-4] ">
    <video 
                    className="flex max-h-96 rounded-md playsinline"
                    controls
                    poster ="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/3.PNG?alt=media&token=938b83a6-85e2-42a4-9d13-5eed96359571"
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/video_2023-07-13_10-49-22.mp4?alt=media&token=578bdcdb-f362-49da-8dce-34a552dc1e2e" type="video/mp4" />
                  
                </video>
    </div>
    <div className="flex justify-center font-serif text-base mt-4 lg:text-xl">Token Contract: 0x0B452278223D3954F4AC050949D7998e373e7E43</div>
    </div>
    )
    }
    export default Video;