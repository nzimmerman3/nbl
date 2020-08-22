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
          <Route exact path="/nbl" component={Homepage}/>
          <Route exact path="/nbl/about" component={About}/>
          <Route exact path="/nbl/schedule" component={Schedule}/>
          {/* <Route exact path="" component={}/> */}
          <Route exact path="/nbl/statistics" component={Statistics}/>
          <Route exact path="/nbl/join" component={Join}/>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
