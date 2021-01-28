import BronnAPI2 from "./BronnAPI2"


const BronnAxi = () => {
 
    function Blog({ posts }) {
        return (
          <ul>
            {posts.map((enheter) => (
              <li>{enheter.title}</li>
            ))}
          </ul>
        )
      }
      
      export async function getStaticProps() {

        const res = await fetch('https://data.brreg.no/enhetsregisteret/api/enheter/')
        const posts = await res.json()

        return {
          props: {
            posts,
          },
        }
      }
      
      export default Blog


}

    