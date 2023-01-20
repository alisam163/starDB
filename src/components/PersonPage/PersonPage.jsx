import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetails from '../ItemDetails/ItemDetails'
import Row from './../UI/Row/Row'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import SwapiService from '../../services/SwapiService'

export default class PersonPage extends Component {
  swapiService = new SwapiService()

  state = {
    selected: null,
  }

  onItemSelectedHandler = (id) => {
    this.setState({ selected: id })
  }

  render() {
    const { getData } = this.props
    const { getPerson, getPersonImage } = this.swapiService

    const itemList = (
      <ItemList
        getData={getData}
        onItemSelected={this.onItemSelectedHandler}
        itemId={this.state.selected}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    )
    const personDetails = (
      <ItemDetails
        personId={this.state.selected}
        getData={getPerson}
        getImageUrl={getPersonImage}
        itemId={this.state.selected}
      />
    )

    return (
      <>
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
      </>
    )
  }
}
