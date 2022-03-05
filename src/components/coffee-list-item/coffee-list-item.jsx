import './coffee-list-item.css';

const CoffeeListItem = ({name, country, price, src}) => {
    return (
        <figure className="coffee-list-item">
            <img className="coffee-list-item__img"
                src={ src }
                alt="Several coffee packs" />
            <figcaption className="coffee-list-item__text">
                <p>{ name }</p> 
                <p>{ country }</p>
                <p>{ price }$</p>
            </figcaption>
        </figure>
    )
}

export default CoffeeListItem;