import Farming from 'contents/Farming/Farming'
import TierList from 'contents/TierList/TierList'
import Weapon from 'contents/Weapon/Weapon'
import { Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './contents/Home/Home'

const App = () => {
  return (
    <Suspense fallback="loading">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/farming">
              <Farming />
            </Route>
            <Route path="/tier-list">
              <TierList />
            </Route>
            <Route path="/weapons">
              <Weapon />
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

export default App
