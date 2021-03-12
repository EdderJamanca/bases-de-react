
import React from 'react'
import {Switch,Route, Redirect } from "react-router-dom";
import  DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SeachScreen from '../components/search/SeachScreen';
import { Navbar } from '../components/ui/Navbar';


export const DashboardRoutes = () => {
    return (
        <>

         <Navbar />

            <div className="container">

                <Switch>

                    <Route exact path="/marvel" component={ MarvelScreen } />

                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } />

                    <Route exact path="/dc" component={ DcScreen } />

                    <Route exact path="/search" component={ SeachScreen } />

                    <Redirect to="/marvel" />

                </Switch>

            </div>
            
        </>
    )
}
