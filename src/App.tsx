import Farming from 'contents/Farming/Farming'
import TierList from 'contents/TierList/TierList'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './contents/Home/Home'

const App = (props: any) => {
  console.log('props', props?.location)
  return (
    <Suspense fallback="loading">
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/farming">
              <Farming />
            </Route>
            <Route path="/tier-list">
              <TierList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  )
}

const Users = () => {
  return <h2>Users</h2>
}

export default App
