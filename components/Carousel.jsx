import React from 'react'

function Carousel() {
  return (
    <div className="carousel w-full">
        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/1.PNG?alt=media&token=431a3479-e483-44d3-9dcb-90e211c64839" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://firebasestorage.googleapis.com/v0/b/suzume-82712.appspot.com/o/2.PNG?alt=media&token=a609b0f1-d2ee-489a-a7d9-b2fbbfd1c3bb" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
</div>
  )
}

export default Carousel