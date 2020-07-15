import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const App = () => (

  <Router>
    <Container style={{ marginTop: 75 }}>
      <Switch>
        {/* <Route exact path='/' component={FoodList} />
        <Route exact path='/foods/:id' component={FoodDetails}/> */}
      </Switch>
    </Container>
  </Router>

)

export default App
