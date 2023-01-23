import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import withSwapiService from '../HocHelpers/withSwapiService'

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImage={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  )
}

export default withSwapiService(PersonDetails)
