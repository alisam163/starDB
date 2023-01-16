import React, { Component } from 'react'
import Spinner from '../Spinner/Spinner'
import SwapiService from '../../services/SwapiService'
import ErrorButton from '../ErrorButton/ErrorButton'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

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
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loadingItem: true })
      this.updateItem()
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props
    if (!itemId) {
      return <ErrorIndicator />
    }
    getData(itemId).then((item) =>
      this.setState({
        item: item,
        image: getImageUrl(item),
        loadingItem: false,
      })
    )
  }

  render() {
    if (this.state.loadingItem) {
      return <Spinner />
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.item

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
            <h5 className="text-center">{name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>Gender: </span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span>BirthDay: </span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span>Eye color: </span>
                <span>{eyeColor}</span>
              </li>
            </ul>
          </div>
        </div>
        <ErrorButton />
      </div>
    )
  }
}
