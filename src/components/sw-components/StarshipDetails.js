import withSwapiService from '../HocHelpers/withSwapiService'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarships, getStarshipsImage } = swapiService
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

export default withSwapiService(StarshipDetails)
