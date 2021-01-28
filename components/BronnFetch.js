import React, { useState } from 'react';
import axios from 'axios'

const BronnFetch = () => {

    const [joke, setJoke] = useState("");
 
    const getJoke = () => {
        axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/').then(
            (response)=>{
                console.log(response)
                //setJoke(response.data.navn)
        });
      
      }
      

    return (
        <div >
             <button onclick= {getJoke}>GETthebronn</button>
             {joke}
        </div>
    );
    
}
export default BronnFetch;