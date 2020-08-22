import React from 'react'
import Container from 'react-bootstrap/Container'

import MyHeader from '../components/MyHeader'
import AboutJumbo from '../components/AboutJumbo'

const About = () => {
    return (
        <div>
            <Container>
                <MyHeader active="about"></MyHeader>
                <AboutJumbo image="outdoor"/>
            </Container>
        </div>
        
    )
}

export default About