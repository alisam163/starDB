import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import withSwapiService from '../HocHelpers/withSwapiService'

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getPlanetImage,
  }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps)
