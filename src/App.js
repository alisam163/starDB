import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import RandomPlanet from './components/RandomPlanet/RandomPlanet'
import SwapiService from './services/SwapiService'
import PersonPage from './components/PersonPage/PersonPage'
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator'
import Row from './components/UI/Row/Row'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import ItemDetails from './components/ItemDetails/ItemDetails'

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
    const { getPerson, getStarships, getPersonImage, getStarshipsImage } =
      this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    )

    const StarshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarships}
        getImageUrl={getStarshipsImage}
      />
    )

    if (this.state.hasError) {
      return (
        <>
          <ErrorIndicator />
        </>
      )
    }
    return (
      <ErrorBoundry>
        <div className="App">
          <Header />
          {/* <RandomPlanet />
        <PersonPage getData={this.swapiService.getAllPeople} /> */}
          <Row left={personDetails} right={StarshipDetails} />
        </div>
      </ErrorBoundry>
    )
  }
}

export default App
