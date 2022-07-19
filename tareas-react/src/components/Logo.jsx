import freeCodeLogo from '../images/freecodecamp-logo.png';
import './styles/Logo.css'

function Logo() {
  return (
    <div className="Logo-container">
    <img src={freeCodeLogo} alt="Logo" />
    </div>
  )
}

export default Logo;