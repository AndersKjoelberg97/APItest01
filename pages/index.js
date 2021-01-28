import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import BronnAPI from '../components/BronnAPI'
import BeerAPI from '../components/BeerAPI'

 export default function Home() {
   return (

    <div>
      <h1>Homepage</h1>
      <InputField />
      <BronnAPI />
     </div>

   )
 }