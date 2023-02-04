import withSwapiService from '../HocHelpers/withSwapiService'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarships,
    getImage: swapiService.getStarshipsImage,
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)
