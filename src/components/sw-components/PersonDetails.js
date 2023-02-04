import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import withSwapiService from '../HocHelpers/withSwapiService'

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImage: swapiService.getPersonImage,
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)
