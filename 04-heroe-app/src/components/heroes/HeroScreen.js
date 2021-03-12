import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import getHeroeById from '../../selectors/getHeroeById';

const HeroScreen = ({ history }) => {

    const {heroeId} = useParams();

    const heroe=useMemo(() => getHeroeById(heroeId), [heroeId])

    
    if(heroe.length===0){
        return <Redirect to="/" />
    }
    const handleReturn =()=>{
        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
    const {superhero, publisher, alter_ego, first_appearance, characters} = heroe[0];
    
    return (
        <>
          
            <h1 className="text-danger">HeroScreen</h1>
            <div className="row">
                <div className="col-md-4">

                    <img src={`../assets/heroes/${heroeId}.jpg`} className="img-fluid" alt={ superhero }/>

                </div>
                <div className="col-md-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b> { alter_ego} </li>
                        <li className="list-group-item"><b>Publisher:</b> { publisher } </li>
                        <li className="list-group-item"><b>First appearance:</b> { first_appearance} </li>
                    </ul>
                    <h5>characters</h5>
                    <p>{characters}</p>

                    <button 
                        onClick={handleReturn}
                    className="btn btn-outline-info">
                        return
                    </button>

                </div>

            </div>
       
        </>
    )
}

export default HeroScreen

