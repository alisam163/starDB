import React, { Component } from 'react'
import { StarshipList } from '../sw-components'
import StarshipDetails from '../sw-components/StarshipDetails'
import Row from '../UI/Row/Row'

export default class StarshipPage extends Component {
  state = {
    selectedItem: null,
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  }

  render() {
    const { selectedItem } = this.state
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    )
  }
}
