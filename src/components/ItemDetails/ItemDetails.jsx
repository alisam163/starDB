import React, { Component } from 'react'
import Spinner from '../Spinner/Spinner'
import SwapiService from '../../services/SwapiService'
import ErrorButton from '../ErrorButton/ErrorButton'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label} </span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record }

export default class ItemDetails extends Component {
  swapiService = new SwapiService()

  state = {
    item: null,
    loadingItem: true,
    image: null,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData
    ) {
      this.setState({ loadingItem: true })
      this.updateItem()
    }
  }

  updateItem = () => {
    const { itemId, getData, getImage } = this.props
    if (!itemId) {
      return <ErrorIndicator />
    }
    getData(itemId).then((item) => {
      this.setState({
        item: item,
        image: getImage(item),
        loadingItem: false,
      })
    })
  }

  render() {
    if (this.state.loadingItem) {
      return <Spinner />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col float-start">
            <img
              className="w-75 m-3"
              src={`${this.state.image}`}
              alt="images not loaded"
            />
          </div>
          <div className="col p-4">
            <h5 className="text-center">{this.state.item.name}</h5>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                const item = this.state.item
                return React.cloneElement(child, { item })
              })}
            </ul>
          </div>
        </div>
        <ErrorButton />
      </div>
    )
  }
}
