import Menu from '../menu/menu';

import './header.css';

const Header = ({title, backgroundImage}) => {
    return (
        <header className="header" style={{backgroundImage: `url(${backgroundImage})`}}>
            <Menu />
            <h1 className="header__title">{ title }</h1>
        </header>
    )
}

export default Header;