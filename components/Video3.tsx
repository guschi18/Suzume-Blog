  function Video(){
    return (
    <div className="flex justify-center mt-1 pt-4] ">
    <video 
                    className="flex max-h-96 rounded-md playsinline bg-[url('https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/3.PNG?alt=media&token=b76321e9-1558-4a71-8730-9b4cc0a2d4b4') "
                    controls
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/video_2023-07-13_10-49-22.mp4?alt=media&token=578bdcdb-f362-49da-8dce-34a552dc1e2e" type="video/mp4" />
                  
                </video>
    </div>
    )
    }
    export default Video;