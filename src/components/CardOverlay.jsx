import React from 'react'
import Card from "react-bootstrap/Card"

import getImage from "../media/index"

import "../css/CardOverlay.css"

function CardOverlay(props) {
    const img = getImage(props.image)
    return (
        <div>
            <Card>
                <Card.Img src={img} alt="Basketball Hoop"/>
            </Card>
        </div>
    )
}

export default CardOverlay
