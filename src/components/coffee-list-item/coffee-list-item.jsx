import { CoffeeItemPic } from '../../assets/images/';

import './coffee-list-item.css';

const CoffeeListItem = () => {
    return (
        <figure className="coffee-list-item">
            <img className="coffee-list-item__img" src={ CoffeeItemPic } alt="Several coffee packs" />
            <figcaption className="coffee-list-item__text">
                <p>AROMISTICO Coffee 1 kg</p> 
                <p>Brazil</p>
                <p>6.99$</p>
            </figcaption>
        </figure>
    )
}

export default CoffeeListItem;