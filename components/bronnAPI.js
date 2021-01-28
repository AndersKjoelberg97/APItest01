import { useState } from 'react'
//const axios = require ('axios')
import axios from 'axios'

const BronnAPI = () => {
 
    const [bronnListe, setBronnList] = useState([])
    const [innboks, setInnboks] = useState('')

    const getBronndata = (e) => {
        e.preventDefault()

        if (innboks.length == 0){

            axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/')
            .then(res => setBronnList(res.data._embedded.enheter))
            .catch(err => console.log(err))
        }
        else
        {
            axios.get(`https://data.brreg.no/enhetsregisteret/api/enheter/?navn=${innboks}`)
            .then(res => setBronnList(res.data._embedded.enheter))
            .catch(err => console.log(err))
        }
        
        
    }

    return (
        <div className='knapper'>
            
            
            <input onChange={event => setInnboks(event.target.value)} />
            
            <button onClick={getBronndata}>søk</button>
            {
                bronnListe.length >= 1 ? bronnListe.map((bronn, idx) => {
                    return <p key={idx}> {bronn.organisasjonsnummer + "- " + 
                        bronn.navn + "- Adresse: " +
                        bronn.forretningsadresse.postnummer + " " +
                        bronn.forretningsadresse.kommune + "- Er de konkurs? " +
                        bronn.konkurs + "- Antall ansatte: " +
                        bronn.antallAnsatte + "- siste årsregnskap: " + 
                        bronn.sisteInnsendteAarsregnskap + " " +
                        
                        //bronn.naeringskode1.kode + "- Form: " +
                        bronn.organisasjonsform + "- " 

                    }</p>
                })
                : ''
            } 

        </div>
    );
    
}
export default BronnAPI;