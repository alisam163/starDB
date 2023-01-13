import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import { PlanetImg } from './PlanetImg'
import { PlanetInfo } from './PlanetInfo'
import Spinner from '../Spinner/Spinner'

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
  }

  componentDidMount() {
    this.updatePlanet()
    setInterval(this.updatePlanet, 10000)
  }

  componentWillUnmount() {}

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false })
  }

  updatePlanet = () => {
    console.log('update')
    const id = Math.floor(Math.random() * 25) + 2
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded)
  }

  render() {
    const { loading } = this.state

    return (
      <div className="container p-5">
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-4">
              <PlanetImg planet={this.state.planet} />
            </div>
            <div className="col-8">
              <PlanetInfo planet={this.state.planet} />
            </div>
          </div>
        )}
      </div>
    )
  }
}
