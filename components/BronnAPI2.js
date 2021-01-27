//const axios = require ('axios')
import axios from 'axios'

const getBronn = () => {
    axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/').then((response) =>
    {
        console.log(respone)
    })
}

const BronnAPI2 = () => {
    
    return (
        <div >
            <button onClick={getBronn}>BronnAPI2test</button>
        </div>

     );
}

export default BronnAPI2; 