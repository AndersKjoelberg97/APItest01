const Posts = ({ results: query }) => {
    return (
        <div>
            <h1>testProps</h1>

            {query.map((q, index) => (
                <div key ={index}>

                    <h4>{q.navn}</h4>
                    <p>{q.organisasjonsnummer}</p>
                    
                </div>
            ))}
        </div>

    )
}

export async function testProps(context){
    const res = await fetch (`https://data.brreg.no/enhetsregisteret/api/enheter/?navn=${context.parapms.query}`)
    const json = await res.json()
    const posts = json
    return{
        props: {
            results: posts,
        },
    }


}
export default Posts