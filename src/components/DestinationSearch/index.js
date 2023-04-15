// Write your code here
import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {id, name, imgUrl} = destinationsList

  return (
    <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <div className="input-search-img-container">
        <input type="search" className="input" />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          className="search-logo"
          alt="search icon"
        />
      </div>
      <ul className="items-container">
        {destinationsList.map(eachCart => (
          <DestinationItem cartDeatils={eachCart} key={eachCart.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
