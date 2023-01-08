import React, { Component } from 'react'
import styles from './RandomPlanet.module.css'

export default class RandomPlanet extends Component {
  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  render() {
    const { name, population, rotationPeriod, diameter } = this.state

    return (
      <div className={styles.randomPlanet}>
        <div>
          <img
            class="img-fluid"
            src="data:image/jpeg;base64,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"
            width="150"
            height="150"
            alt="Аватар"
          ></img>
        </div>
        <div className={styles.description}>{name}</div>
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
    )
  }
}
