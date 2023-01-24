import React, { Component } from 'react'
import { PersonList } from '../sw-components'
import PersonDetails from '../sw-components/PersonDetails'
import Row from '../UI/Row/Row'

export default class PeoplePage extends Component {
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
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    )
  }
}
