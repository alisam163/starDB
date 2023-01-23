import React from 'react'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import { SwapiServiceConsumer } from '../swapiServiceContext'

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImage={getPersonImage}
          >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye color" />
          </ItemDetails>
        )
      }}
    </SwapiServiceConsumer>
  )
}

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImage={getPlanetImage}
          >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
          </ItemDetails>
        )
      }}
    </SwapiServiceConsumer>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarships, getStarshipsImage }) => {
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
      }}
    </SwapiServiceConsumer>
  )
}

export { PersonDetails, PlanetDetails, StarshipDetails }
