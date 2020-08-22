import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import overhead from "../media/overhead.jpg"
import layup from "../media/layup.jpg"
import pickup from "../media/pickup.jpg"
import getImage from "../media/index"


function MyCarousel(props) {
    const carouselItems = props.images.map(imgName => {
        return (
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={getImage(imgName)} 
                    alt=""
                />
            </Carousel.Item>
        )
    })

    return (
        <div>
            <Carousel>
                {carouselItems}
            </Carousel>
        </div>
    )
}

export default MyCarousel
