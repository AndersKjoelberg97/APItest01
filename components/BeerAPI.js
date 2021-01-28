import { useState } from 'react'
//import axios from 'axios'
const axios = require ('axios')

const BeerAPI = () => {

    const getBeers = (e) => {
        e.preventDefault()
     
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => console.log(res))
            .catch(err => console.log(err))

        return(
            <div>
                <p>Click</p>
                <button onClick={getBeers}>Klikk meg</button>
            </div>

        )
    }
}
export default BeerAPI;