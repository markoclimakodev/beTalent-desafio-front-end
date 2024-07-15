import searchIcon from '../../assets/search.svg';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import './search.css';

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
