import React, { useState } from 'react';
import amazonImage from './amazon.jpg';
import NetflixLogo from './netflix Logo.webp';
import flipcartLogo from './filipcartLogo.jpg';
import hotStarLogo from './hotstarlogo.webp'
import CnbcLogo from './cnbc.png'
import "./imageCourosel.css"

export function ImageCourosel() {
    const images = [
        { src: amazonImage, alt: 'Amazon Logo' },
        { src: NetflixLogo, alt: 'Netflix Logo' },
        { src: flipcartLogo, alt: 'Flipcart Logo' },
        { src: hotStarLogo, alt: 'Hotstar Logo' },
        { src: CnbcLogo, alt: 'CNBC Logo' }
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const onPrev = () => {
        const nextIndex = currentImageIndex + 1;
        setCurrentImageIndex(nextIndex ===4 ? 0 : nextIndex);
    }
    const onNext = () => {
        const prevIndex = currentImageIndex - 1;
        setCurrentImageIndex(prevIndex === -1 ? 3 : prevIndex);
    }
    const dimensions = {
        width: '800px',
        // height: "auto",
        border: "2px solid gray"
    }
    return <>
        <div>
            <h3 className='text-primary text-center'> Image Courosel</h3>
        </div>
        <div className=" align-align-items-center">
            <button className="btn btn-danger loc" onClick={onPrev}> Prev</button>
            <img src={images[currentImageIndex]?.src} style={dimensions} alt={images[currentImageIndex]?.alt} />
            <button onClick={onNext} class=" btn btn-warning loc">Next</button>
        </div>

        {/* <div>
            {
                images.map((photo, index) => {
                  return  <div className="card-body  w-100 m-2 p-2" key={index}>
                        <img src={photo.src} className=" mb-1 card-img-top" key={index} alt="logos" style={dimensions} />
                    </div>
                })
            }
        </div> */}
    </>
}
