import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetails from '../ItemDetails/ItemDetails'

export default class PlanetPage extends Component {
  state = {
    selected: null,
  }

  onItemSelectedHandler = (id) => {
    this.setState({ selected: id })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ItemList
              getData={this.swapiService.getAllPeople}
              onItemSelected={this.onItemSelectedHandler}
            />
          </div>
          <div className="col-8">
            <ItemDetails personId={this.state.selected} />
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
