import { useState } from 'react'
//const axios = require ('axios')
import axios from 'axios'

const BronnAPI = () => {
 
    const [bronnListe, setBronnList] = useState([])

    const getBronndata = (e) => {
        e.preventDefault()
        
        axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/')
            .then(res => setBronnList(res.data._embedded.enheter))
            .catch(err => console.log(err))
    }

    return (
        <div className='knapper'>
            
            
            <input className="inputboks"></input>
            
            <button onClick={getBronndata}>søk</button>
            {
                bronnListe.length >= 1 ? bronnListe.map((bronn, idx) => {
                    return <p key={idx}> {bronn.organisasjonsnummer + "- " + 
                        bronn.navn + "- Adresse: " +
                        bronn.forretningsadresse.postnummer + " " +
                        bronn.forretningsadresse.kommune + "- Er de konkurs?: " +
                        bronn.konkurs + "- Antall ansatte: " +
                        bronn.antallAnsatte + "- Næringskode: " + 
                        bronn.naeringskode1.kode + "- Form: " +

                        bronn.organisasjonsform + "- " +
                        bronn.sisteInnsendteAarsregnskap

                    }</p>
                })
                : ''
            } 

        </div>
    );
    
}
export default BronnAPI;