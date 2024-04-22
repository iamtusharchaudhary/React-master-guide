// This is for image changing after click the button

import React, { useState } from 'react'
import image1 from './Images/dd973ac116a977c8dd5296b0da504b8c.jpg'
import image2 from './Images/MainAfter.webp'
import image3 from './Images/nature-image-for-website.jpg'
import image4 from './Images/dd973ac116a977c8dd5296b0da504b8c.jpg'
import image5 from './Images/MainAfter.webp'
function ExampleTwo() {
    const [iData, setidata] = useState(image1);
    return (
        <div className='banner'>
            <img src={iData} alt='banner' />
            <button onClick={() => setidata(image1)}>image 1</button>
            <button onClick={() => setidata(image2)}>image 2</button>
            <button onClick={() => setidata(image3)}>image 3</button>
            <button onClick={() => setidata(image4)}>image 4</button>
            <button onClick={() => setidata(image5)}>image 5</button>
        </div>
    )
}
export default ExampleTwo
