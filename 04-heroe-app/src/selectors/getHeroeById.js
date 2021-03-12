import { heroes } from "../data/heroes"


const getHeroeById = (id) => {
    console.log(id);
    return heroes.filter(heroe =>heroe.id===id);
}

export default getHeroeById
