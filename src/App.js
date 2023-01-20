import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import SwapiService from './services/SwapiService'
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator'
import PersonPage from './components/PersonPage/PersonPage'

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
    const { getAllPerson } = this.swapiService
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
        <PersonPage getData={getAllPerson} />
      </div>
    )
  }
}

export default App
