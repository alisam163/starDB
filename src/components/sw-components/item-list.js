import React from 'react'
import ItemList from '../ItemList/ItemList'
import {
  withData,
  withSwapiService,
  compose,
  withChildFunction,
} from './../HocHelpers'

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

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPLanetsMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
  withSwapiService(mapStarshipsMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList)

export { PersonList, PlanetList, StarshipList }
