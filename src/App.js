import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import SwapiService from './services/SwapiService'
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator'
import { SwapiServiceProvider } from './components/swapiServiceContext'
import DummySwapiService from './services/DummySwapiService'
import RandomPlanet from './components/RandomPlanet/RandomPlanet'
import { PeoplePage, PlanetPage, StarshipPage } from './components/Pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    selectedPerson: null,
    selectedPlanet: null,
    selectedStarships: null,
    hasError: false,
    swapiService: new SwapiService(),
  }

  onSelectedPerson = (id) => {
    this.setState({ selectedPerson: id })
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService

      console.log('swithed to', Service.name)

      return {
        swapiService: new Service(),
      }
    })
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
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className="App">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    )
  }
}

export default App
