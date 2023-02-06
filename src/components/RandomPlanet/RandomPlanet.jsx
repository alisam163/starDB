import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwapiService from '../../services/SwapiService'
import { PlanetImg } from './PlanetImg'
import { PlanetInfo } from './PlanetInfo'
import Spinner from '../Spinner/Spinner'

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  static defaultProps = {
    updateInterval: 10000,
  }

  static propTypes = {
    updateInterval: PropTypes.number,
  }

  state = {
    planet: {},
    loading: true,
  }

  componentDidMount() {
    const { updateInterval } = this.props
    this.updatePlanet()
    setInterval(this.updatePlanet, updateInterval)
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
