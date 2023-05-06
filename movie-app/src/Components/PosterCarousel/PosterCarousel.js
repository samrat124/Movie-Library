import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PosterCarousel.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const bannerImg = [
    {
        id: 1,
        img: 'https://i0.wp.com/www.heyuguys.com/images/2013/05/Man-of-Steel-Banner-UK.jpg?fit=2366%2C1088&ssl=1'
    }, 
    {
        id:2,
        img:'https://wallpapercave.com/wp/wp9424755.jpg'
    },
    {
        id:3,
        img:'https://images.thedirect.com/media/article_full/New_Marvel_DP_Banner.jpg'
    }
]

const PosterCarousel = () => {
    const [bannerImage,setBannerImage] = useState(bannerImg);

    return (
        <Carousel  autoPlay={true} autoPlaySpeed={3000} infinite={true} className='carouselDiv' responsive={responsive}>
            {
                bannerImage.map(ele=>{
                    return <img width='100%' height='100%' key={ele.id} src={ele.img}/>
                })
            }
        </Carousel>
    )
}

export default PosterCarousel