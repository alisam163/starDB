import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import RandomPlanet from './components/RandomPlanet/RandomPlanet'
import ItemList from './components/ItemList/ItemList'
import PersonDetail from './components/PersonDetail/PersonDetail'

class App extends Component {
  state = {
    selectedPerson: null,
  }

  onSelectedPerson = (id) => {
    this.setState({ selectedPerson: id })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div className="container">
          <div className="row">
            <div className="col-4 itemsListGroup">
              <ItemList onItemSelected={this.onSelectedPerson} />
            </div>
            <div className="col-8">
              <PersonDetail
                personId={this.state.selectedPerson}
                loadingItem={false}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
