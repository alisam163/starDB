import React, { Component } from 'react'

import SwapiService from './../../services/SwapiService'

export default class PersonDetail extends Component {
  swapiService = new SwapiService()

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  updatePerson = () => {
    const { personId } = this.props
    if (!personId) {
      return
    }
    this.swapiService
      .getPerson(personId)
      .then((person) => this.setState({ person }))
  }

  render() {
    if (!this.state.person) {
      return <span>Выберите из списка</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person

    return (
      <div className="container">
        <div className="row">
          <div className="col float-start">
            <img
              className="w-75 m-3"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
      </div>
    )
  }
}
