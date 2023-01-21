import React from 'react'
import ItemList from '../ItemList/ItemList'
import { WithData } from './../HocHelpers/WithData'
import SwapiService from '../../services/SwapiService'

const swapiService = new SwapiService()

const { getAllPerson, getAllPlanets, getAllStarships } = swapiService

const WithChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>
  }
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
)

const PersonList = WithData(
  WithChildFunction(ItemList, renderName),
  getAllPerson
)

const PlanetList = WithData(
  WithChildFunction(ItemList, renderName),
  getAllPlanets
)

const StarshipList = WithData(
  WithChildFunction(ItemList, renderModelAndName),
  getAllStarships
)

export { PersonList, PlanetList, StarshipList }
