import React from 'react'
import ItemList from '../ItemList/ItemList'
import { WithData } from './../HocHelpers/WithData'
import withSwapiService from '../HocHelpers/withSwapiService'

const WithChildFunction = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  WithData(WithChildFunction(renderName)(ItemList))
)

const PlanetList = withSwapiService(mapPLanetsMethodsToProps)(
  WithData(WithChildFunction(renderName)(ItemList))
)

const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
  WithData(WithChildFunction(renderModelAndName)(ItemList))
)

export { PersonList, PlanetList, StarshipList }
