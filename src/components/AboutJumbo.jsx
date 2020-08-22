import React from 'react'

import Jumbotron from "react-bootstrap/Jumbotron"
import FillerParagraph from "./FillerParagraph"

import getImage from "../media/index"

import '../css/AboutJumbo.css'

function AboutJumbo(props) {
    const img = getImage(props.image)
    return (
        <div>
            <br/>
            <Jumbotron fluid style={{
                "background": `url(${img}) no-repeat center center`,
                "backgroundSize": "100%"
            }}>
            <h2 style={{"marginLeft": "3vw", "marginBottom": "12vw", "marginTop": "3vw"}}>NBL</h2>
            <h4 style={{"marginLeft": "8vw"}}>Nicholas Basketball League</h4>

            </Jumbotron>
            <FillerParagraph />
            <FillerParagraph />
            <FillerParagraph />
        </div>
    )
}

export default AboutJumbo
