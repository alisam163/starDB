import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import SwapiService from './services/SwapiService'
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator'

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from './components/sw-components'

class App extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
    hasError: false,
  }

  onSelectedPerson = (id) => {
    this.setState({ selectedPerson: id })
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <ErrorIndicator />
        </>
      )
    }
    return (
      <div className="App">
        <Header />
        <PersonDetails itemId={10} />
        <PlanetDetails itemId={5} />
        <StarshipDetails itemId={10} />
        {/* <PersonPage getData={getAllPerson} /> */}
        <PersonList />

        <StarshipList />

        <PlanetList />
      </div>
    )
  }
}

export default App
