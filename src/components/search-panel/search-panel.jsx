import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="search-bar">
            <label className="search-bar__label" htmlFor="searchInput">
                Looking for
            </label>
            <input
                id="searchInput"
                className="search-bar__input"
                type="text"
                name="searchBar"
                placeholder="start typing here..."/>
        </div>
    )
}

export default SearchPanel;