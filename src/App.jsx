import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Homepage from './routes/Homepage'
import About from './routes/About'
import Schedule from "./routes/Schedule"
import Statistics from "./routes/Statistics"
import Join from "./routes/Join"

import "./css/App.css"

function App() {
  const url = process.env.PUBLIC_URL
  // const url = "https://nzimmerman3.github.io/nbl"
  console.log(url)
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/schedule"} component={Schedule}/>
          <Route exact path={"/statistics"} component={Statistics}/>
          <Route exact path={"/join"} component={Join}/>
          <Route exact path={"/"} component={Homepage}/>

        </Switch>
      </Router>
    </Container>
  )
}

export default App;
