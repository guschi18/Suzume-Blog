  function Video(){
    return (
    <div className="flex justify-center ">
    <video 
                    className="flex max-h-96 rounded-md playsinline"
                    controls
                    poster ="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/2.PNG?alt=media&token=c0e0a29e-7a32-48cf-85ff-b860fbf55cca"
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/video3.mp4?alt=media&token=31656c32-f6be-4fdf-b966-94df97720465" type="video/mp4" />
                  
                </video>
    </div>
    )
    }
    export default Video;