import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'

export default function App(props: any) {
  console.log('props', props?.location)
  return (
    <Router>
      <div className="App d-flex flex-column">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
