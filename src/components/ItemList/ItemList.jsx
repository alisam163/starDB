import React, { Component } from 'react'
import Spinner from '../Spinner/Spinner'

export default class ItemList extends Component {
  state = { itemList: null }

  componentDidMount() {
    const { getData } = this.props
    getData().then((itemList) => {
      this.setState({ itemList })
    })
  }

  renderItems(arr) {
    const { onItemSelected } = this.props
    return arr.map((item) => {
      const { id } = item
      const label = this.props.renderItem(item)
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList)

    return <ul className="item-list list-group itemsListGroup">{items}</ul>
  }
}
