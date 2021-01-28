import { useState } from 'react'
//const axios = require ('axios')
import axios from 'axios'

const BronnAPI = () => {
 
    const [bronnListe, setBronnList] = useState("")

    const getBronndata = (e) => {
        e.preventDefault()
        
        axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/')
            .then(res => console.log(res.data._embedded.enheter))
            .catch(err => console.log(err))
    }

    return (
        <div className='knapper'>
            
            <button onClick={getBronndata}>søk</button>
            {bronnListe}

        </div>
    );
    
}
export default BronnAPI;