import React from 'react'
import ItemList from '../ItemList/ItemList'
import { WithData } from './../HocHelpers/WithData'
import withSwapiService from '../HocHelpers/withSwapiService'

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPerson,
  }
}

const mapPLanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  }
}

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  }
}

const PersonList = withSwapiService(
  WithData(WithChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
)

const PlanetList = withSwapiService(
  WithData(WithChildFunction(ItemList, renderName)),
  mapPLanetsMethodsToProps
)

const StarshipList = withSwapiService(
  WithData(WithChildFunction(ItemList, renderModelAndName)),
  mapStarshipsMethodsToProps
)

export { PersonList, PlanetList, StarshipList }
