import React from 'react'
import Container from 'react-bootstrap/Container'
import MyHeader from '../components/MyHeader'
import MainContent from '../components/MainContent'


import '../css/Homepage.css'

const Homepage = () => {
    const url = process.env.PUBLIC_URL
    // const url = "https://nzimmerman3.github.io/nbl"
    console.log(url)
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