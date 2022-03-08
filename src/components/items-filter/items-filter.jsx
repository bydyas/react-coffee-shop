import { Component } from 'react';

import './items-filter.css';

class ItemsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        };
        this.btnsData = [
            { filterName: 'BR', label: 'Brazil' },
            { filterName: 'KE', label: 'Kenya' },
            { filterName: 'CO', label: 'Columbia' },
        ];
    }

    onUpdateFilter = (filter) => {
        const isNewFilter = this.state.filter === filter ? undefined : filter;
        this.setState({ filter: isNewFilter });
        this.props.onUpdateFilter(isNewFilter);
    }

    render() {
        const { filter } = this.props;

        const buttons = this.btnsData.map(({ filterName, label }) => {
            const isFiltered = filter === filterName ? 'filtered' : null;
    
            return (
                <button
                    className={`btn ${isFiltered}`}
                    type="button"
                    key={filterName}
                    onClick={() => this.onUpdateFilter(filterName) }>
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
}

export default ItemsFilter;