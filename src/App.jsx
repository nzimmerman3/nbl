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
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/schedule" component={Schedule}/>
          {/* <Route exact path="" component={}/> */}
          <Route exact path="/statistics" component={Statistics}/>
          <Route exact path="/join" component={Join}/>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
