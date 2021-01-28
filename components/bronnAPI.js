import { useState } from 'react'
//const axios = require ('axios')
import axios from 'axios'

const BronnAPI = () => {
 
    const [bronnListe, setBronnList] = useState([])

    const getBronndata = (e) => {
        e.preventDefault()
        
        axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='knapper'>
            
            <button onClick={getBronndata}>søk</button>
            {
                bronnListe.length >= 1 ? bronnListe.map((page, idx) => {
                    return <p key={idx}>{page}</p>
                })
                : ''
            }

        </div>
    );
    
}
export default BronnAPI;