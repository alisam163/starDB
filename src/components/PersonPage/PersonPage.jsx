import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'
import PersonDetail from '../PersonDetail/PersonDetail'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

export default class PersonPage extends Component {
  state = {
    selected: null,
  }

  onItemSelectedHandler = (id) => {
    this.setState({ hasError: false, selected: id })
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const { getData } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ItemList
              getData={getData}
              onItemSelected={this.onItemSelectedHandler}
              renderItem={this.props.renderItem}
            />
          </div>
          <div className="col-8">
            <PersonDetail personId={this.state.selected} />
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
