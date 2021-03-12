import React, { useMemo } from 'react'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = (publisher) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    

    return (
        <>
            <div className="card-columns">
                {
                    heroes.map(heroe=>(                 
                        <HeroCard key={ heroe.id } {...heroe} />
                    ))
                }
            </div>
        </>
    )
}
