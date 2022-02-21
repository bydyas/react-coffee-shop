import Menu from '../menu/menu';
import Divider from '../divider/divider';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Menu icon={ true }/>
            <Divider />
        </footer>
    )
}

export default Footer;