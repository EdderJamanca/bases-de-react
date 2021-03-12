import { heroes } from "../data/heroes";


const getHeroesByPublisher = ({ publisher }) => {

    
    const valiPublisher=['DC Comics','Marvel Comics'];

    if(!valiPublisher.includes(publisher)){
        throw new Error(`Publisher ${publisher} no es correcto`);
    }


    return heroes.filter(heroe=>heroe.publisher===publisher);
}

export default getHeroesByPublisher
