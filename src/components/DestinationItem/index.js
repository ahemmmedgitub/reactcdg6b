// Write your code here
import './index.css'

const DestinationItem = props => {
  const {cartDeatils} = props
  const {name, imgUrl} = cartDeatils

  return (
    <div className="each-item-container">
      <img src={imgUrl} className="img-url" alt="Avtar" />
      <p className="description">{name}</p>
    </div>
  )
}

export default DestinationItem
