import React from 'react'
import Container from 'react-bootstrap/Container'
import MyHeader from '../components/MyHeader'
import MainContent from '../components/MainContent'


import '../css/Homepage.css'

const Homepage = () => {
    return (
        <div>
            <Container>
                <MyHeader></MyHeader>       
                <MainContent></MainContent>      
            </Container>
        </div>
    )
}

export default Homepage