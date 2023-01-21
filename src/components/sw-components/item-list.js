import ItemList from '../ItemList/ItemList'
import { WithData } from './../HocHelpers/WithData'
import SwapiService from '../../services/SwapiService'

const swapiService = new SwapiService()

const { getAllPerson, getAllPlanets, getAllStarships } = swapiService

const PersonList = WithData(ItemList, getAllPerson)

const PlanetList = WithData(ItemList, getAllPlanets)

const StarshipList = WithData(ItemList, getAllStarships)

export { PersonList, PlanetList, StarshipList }
