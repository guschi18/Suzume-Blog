function Video(){
return (
<div className="flex justify-center mt-1 pt-4 ">
<video 
                className="flex max-h-96 rounded-md playsinline"
                controls
            >
                <source src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/Shita-Kiri-Suzume_%20An%20Origin%20Story.mp4?alt=media&token=54811c25-9717-40a4-b4f9-8e26c9ccdfbb" type="video/mp4" />
              
            </video>
</div>
)
}
export default Video;