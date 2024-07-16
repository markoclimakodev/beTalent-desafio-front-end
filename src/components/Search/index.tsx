import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './search.css';

import searchIcon from '../../assets/search.svg';

function Search() {
    const { updateSearchQuery } = useContext(AppContext);

    const handleEmployeeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateSearchQuery(event.target.value)
    }

    return (
        <div className="searchContainer">
            <h2 className="searchTitle">Funcionários</h2>
            <form>
                <label htmlFor="searchInput" className="searchForm">
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Pesquisar"
                        onChange={handleEmployeeSearch}
                        aria-label="Search employees"
                        className="searchInput"
                    />
                    <img src={searchIcon} alt="Ícone de pesquisa" className="searchIcon" />
                </label>
            </form>
        </div>
    );
}

export default Search;
