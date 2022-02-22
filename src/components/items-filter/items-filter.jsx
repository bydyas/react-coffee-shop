import './items-filter.css';

const ItemsFilter = () => {
    const btnsData = [
        {filterName: 'BR', label: 'Brazil'},
        {filterName: 'KE', label: 'Kenya'},
        {filterName: 'CO', label: 'Columbia'},
    ]

    const buttons = btnsData.map(({ filterName, label }) => {
        /* const clazz = filter === filterName ? 'f-btn' : 'f-btn-active'; */

        return (
            <button
                className={`btn`}
                type="button"
                key={filterName}>
                {label}
            </button>
        )
    })

    return (
        <div className="filter">
                <span className="filter__label">Or filter</span>
                <div className="filter__button-group">
                    { buttons }
                </div>
        </div>
    );
}

export default ItemsFilter;