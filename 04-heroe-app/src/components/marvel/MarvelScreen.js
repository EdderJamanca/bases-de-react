import React from 'react'
import { HeroList } from '../heroes/HeroList'

const MarvelScreen = () => {
    return (
        <div>
             <h1 className="text-danger">Marvel</h1>
             <HeroList publisher="Marvel Comics" />
        </div>
    )
}

export default MarvelScreen
