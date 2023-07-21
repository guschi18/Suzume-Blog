  function Video(){
    return (
    <div className="flex justify-center mt-1 pt-4] ">
    <video 
                    className="flex max-h-96 rounded-md playsinline bg-[url('https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/2.PNG?alt=media&token=d00aebbc-3175-497f-8e15-c2ad572da21c')"
                    controls
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/SuzumeVideo2.mp4?alt=media&token=696fdc99-4adc-4be2-b5d3-aabb96abf9c4" type="video/mp4" />
                  
                </video>
    </div>
    )
    }
    export default Video;