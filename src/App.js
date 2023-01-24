import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import SwapiService from './services/SwapiService'
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator'
import { SwapiServiceProvider } from './components/swapiServiceContext'
import { PersonList, PlanetList } from './components/sw-components'
import { StarshipList } from './components/sw-components'
import PersonDetails from './components/sw-components/PersonDetails'
import PlanetDetails from './components/sw-components/PlanetDetails'
import StarshipDetails from './components/sw-components/StarshipDetails'
import DummySwapyService from './services/DummySwapiService'

class App extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
    swapiService: new DummySwapyService(),
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
        swapiService instanceof SwapiService ? DummySwapyService : SwapiService

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
        <div className="App">
          <Header onServiceChange={this.onServiceChange} />
          <PersonDetails itemId={10} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={10} />
          {/* List  */}
          <PersonList />

          <StarshipList />

          <PlanetList />
        </div>
      </SwapiServiceProvider>
    )
  }
}

export default App
