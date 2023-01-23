import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import withSwapiService from '../HocHelpers/withSwapiService'

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImage={getPlanetImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

export default withSwapiService(PlanetDetails)
