import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetails from '../ItemDetails/ItemDetails'
import Row from './../UI/Row/Row'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'

export default class PersonPage extends Component {
  state = {
    selected: 3,
  }

  onItemSelectedHandler = (id) => {
    this.setState({ selected: id })
  }

  render() {
    const { getData } = this.props

    const itemList = (
      <ItemList getData={getData} onItemSelected={this.onItemSelectedHandler}>
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    )
    const personDetails = <ItemDetails personId={this.state.selected} />

    return (
      <>
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
      </>
    )
  }
}
