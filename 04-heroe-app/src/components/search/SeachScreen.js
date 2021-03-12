
import React, { useMemo } from 'react';
import queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroeByName } from '../../selectors/getHeroeByName';

const SeachScreen = ({ history }) => {


    const location = useLocation()
    const {q=''}=queryString.parse(location.search);
   

    const [value, handleImputChange]=useForm({
        searchText:q
    });

    const { searchText }= value;
   
    const heroesFiltered = useMemo(() => getHeroeByName(searchText), [q]);

    const handleSearch =(e)=>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
       
    }

    return (
        <div>


            <div className="row">

                <div className="col-5">
                    <h1>Search Screen</h1>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                         type="text"
                          placeholder="Find your heroe"
                          className="form-control"
                          name="searchText"
                          onChange={handleImputChange}
                          value={searchText}
                          />
                          <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                          >
                              Search....
                          </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Result </h4>
                    <hr/>
                    {
                        (q==='') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !=='' && heroesFiltered.length===0) &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }
                    {
                        heroesFiltered.map( hero=>(
                            <HeroCard 
                             key={hero.id }
                             {...hero}
                            />
                        ))
                    }

                </div>

            </div>
            
        </div>
    )
}

export default SeachScreen
