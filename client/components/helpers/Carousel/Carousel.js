import React, { useEffect, useState, useRef } from 'react';
// import { carouselImages } from 'data/carouselImages';
import Image from 'next/image';

const carouselImages = [
    "assets/images/carousel/image1.jpeg",
    "assets/images/carousel/image2.jpeg",
    "assets/images/carousel/image3.jpeg",
    "assets/images/carousel/image4.jpeg",
    "assets/images/carousel/image5.jpeg",
    "assets/images/carousel/image6.jpeg",
    "assets/images/carousel/image7.jpeg",
    "assets/images/carousel/image8.jpeg"
];

function Carousel() {
    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef();
    const currentSlide = useRef();
    
    useEffect(() => {
        const interval = setInterval(() => {
            currentSlide.current++
            setCurrent(currentSlide.current);
            if (current == (images.length - 1)) {
                currentSlide.current = 0;
                setCurrent(currentSlide.current);
            }
        }, 400);
        return () => clearInterval(interval);
    }, [current]);

    useEffect(() => {
        setImages(carouselImages);
        currentSlide.current = 0;
    }, []);

    return (
        <div id="Carousel" className="relative flex w-full" ref={carouselRef}>
            {images.map((item, i) => (
                <div key={item} >
                    <img src={`/${item}`} hidden={i != currentSlide.current} className="absolute" layout="responsive" />
                </div>
            ))}
        </div>
    )
}

export default Carousel
