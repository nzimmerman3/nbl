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
          <Route path="/about" component={About}/>
          <Route path="/schedule" component={Schedule}/>
          {/* <Route exact path="" component={}/> */}
          <Route path="/statistics" component={Statistics}/>
          <Route path="/join" component={Join}/>
          <Route path="/" component={Homepage}/>

        </Switch>
      </Router>
    </Container>
  )
}

export default App;
