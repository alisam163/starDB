import React from 'react'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import SwapiService from '../../services/SwapiService'

const swapiService = new SwapiService()

const {
  getPerson,
  getPlanet,
  getStarships,
  getPersonImage,
  getStarshipsImage,
  getPlanetImage,
} = swapiService

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImage={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  )
}

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImage={getPlanetImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarships}
      getImage={getStarshipsImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

export { PersonDetails, PlanetDetails, StarshipDetails }
