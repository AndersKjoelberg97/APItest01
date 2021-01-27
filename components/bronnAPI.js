import { useState } from 'react'
const axios = require ('axios')

const BronnAPI = () => {
 
    const [bronnListe, setBronnList] = useState([])

    const getBronndata = (e) => {
        e.preventDefault()
        
        axios.get('https://data.brreg.no/enhetsregisteret/api/enheter')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='knapper'>
            <p>hello</p>

            <button onClick={getBronndata}>søk</button>
           

        </div>
    );
    
}
export default BronnAPI;