import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import bronnAPI from '../components/bronnAPI'

export default function Home() {
  return (
   
   <div>
     <h2>Søk i Brønnøysundregisteret</h2>
     <p>
      Søkefelt
      <InputField />
     </p>
     <bronnAPI />
     
    </div>

  )
}
