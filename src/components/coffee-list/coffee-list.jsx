import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.css';

const CoffeeList = () => {
    return (
        <div className="coffee-list">
            <CoffeeListItem />
            <CoffeeListItem />
            <CoffeeListItem />
            <CoffeeListItem />
            <CoffeeListItem />
            <CoffeeListItem />
        </div>
    )
}

export default CoffeeList;