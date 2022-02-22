import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import { ReactComponent as LogoBlack } from '../../assets/images/icons/logo-black.svg';

import './menu.css';

const Menu = ({iconDefault}) => {
    return (
        <nav className="navbar">
            {iconDefault ? <Logo /> : <LogoBlack />}
            <ul className="navbar__nav">
                <li className="nav__item">
                    <a className="nav__link" href="https://www.google.com/">Coffee house</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="https://www.google.com/">Our coffee</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="https://www.google.com/">For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;