import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCar, faGift, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
        
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Alojaminetos</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Vuelos</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Renta de autos</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faGift} />
                <span>Atracciones</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>
                </div>
            </div>
            <h1 className="headerTitle">Vive el sueño en una casa vacacional</h1>
                <h2 className="headerSubtitle">Elige entre casas, villas, cabañas y más</h2>
                <button className="headerBtn">Reserva el tuyo</button>

        </div>
    </div>
  )
}

export default Header