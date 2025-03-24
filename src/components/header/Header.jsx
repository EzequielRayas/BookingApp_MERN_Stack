import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCar, faGift, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
        
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon={faBed} />
                <span>Alojaminetos</span>
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon={faPlane} />
                <span>Vuelos</span>
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon={faCar} />
                <span>Renta de autos</span>
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon={faGift} />
                <span>Atracciones</span>
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>

            </div>
            
        </div>
    </div>
  )
}

export default Header