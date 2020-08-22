import React from 'react'
import Container from "react-bootstrap/Container"
import MyHeader from "../components/MyHeader"
import Matchup from "../components/Matchup"

function Schedule() {
    return (
        <div>
            <Container>
                <MyHeader active="schedule"></MyHeader>
                <Matchup team1="" team2=""></Matchup>
            </Container>
        </div>
    )
}

export default Schedule
