import React from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CardOverlay from "../components/CardOverlay"
import MyCarousel from "../components/MyCarousel"
import FillerParagraph from "../components/FillerParagraph"

import "../css/MainContent.css"


function MainContent() {
    return (
        <div>
            <Container> <span></span>
                <Row>
                    <Col><h1 style={{"marginTop": "55px"}}>NBL</h1></Col>
                    <Col className="float-right">
                        <h3>
                            <span style={{"color": "#17408B"}}>Embrace </span>
                            <span style={{"color": "black"}}>the </span> 
                            <span style={{"color": "#C9082A"}}>game</span> 
                        </h3>
                    </Col>
                </Row>   
                <CardOverlay top_text="" bot_text="" image="basketballLong" />
                <br></br>         
                <FillerParagraph />
                <FillerParagraph />
                <br></br>
                <MyCarousel images={["overhead", "layup", "pickup"]}/>
                <br></br>
               <FillerParagraph />
               <FillerParagraph />
               <FillerParagraph />
            </Container>
            
        </div>
    )
}

export default MainContent