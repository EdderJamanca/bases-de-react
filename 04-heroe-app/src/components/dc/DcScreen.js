import React from 'react'
import { HeroList } from '../heroes/HeroList'

const DcScreen = () => {


    return (
        <div> <h1 className="text-danger">DcScreen</h1>
                <HeroList publisher="DC Comics" />
        </div>
    )
}

export default DcScreen
