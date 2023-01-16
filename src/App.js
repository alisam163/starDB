import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import RandomPlanet from './components/RandomPlanet/RandomPlanet'
import SwapiService from './services/SwapiService'
import PersonPage from './components/PersonPage/PersonPage'
import ItemList from './components/ItemList/ItemList'
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator'

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
    debugger
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
        <RandomPlanet />
        <PersonPage
          getData={this.swapiService.getAllPeople}
          renderItem={({ name, gender, birthYear }) =>
            `${name} (${gender} ${birthYear})`
          }
        />
        <ItemList
          getData={this.swapiService.getAllPlanets}
          renderItem={(item) => (
            <span>
              {item.name} <button> !</button>
            </span>
          )}
        />
      </div>
    )
  }
}

export default App
