import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: '',
        }
    }

    onUpdateSearch = (e) => {
        const phrase = e.target.value.toUpperCase();
        this.setState({ phrase });
        this.props.onUpdateSearch(phrase);
    }

    render() {
        return (
            <div className="search-bar">
                <label className="search-bar__label"
                    htmlFor="searchInput">
                    Looking for
                </label>
                <input
                    id="searchInput"
                    className="search-bar__input"
                    type="text"
                    name="searchBar"
                    placeholder="start typing here..."
                    onChange= { this.onUpdateSearch }
                    value={this.state.phrase} />
            </div>
        )
    }
}

export default SearchPanel;