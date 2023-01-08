import React, { Component } from 'react'
import styles from './RandomPlanet.module.css'
import SwapiService from '../../services/SwapiService'

export default class RandomPlanet extends Component {
  constructor() {
    super()
    this.updatePlanet()
  }
  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  swapiService = new SwapiService()

  updatePlanet() {
    const id = 15
    this.swapiService.getPlanet(id).then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      })
    })
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state

    return (
      <div className="container header">
        <div class="header">
          <div>
            <img
              class="img-fluid"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              width="150"
              height="150"
              alt="Аватар"
            ></img>
          </div>
          <div className="tablePlanet">
            <div className="fw-bold text-center">{name}</div>
            <ul className="list-group">
              <li className="list-group-item">
                <span>Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span>Rotation period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span>Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
