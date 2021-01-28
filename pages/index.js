import Head from 'next/head'
import axios from 'axios'
//import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import BronnAPI from '../components/BronnAPI'
import BronnFetch from '../components/BronnFetch'
import { NextApiRequest } from 'next'


 export default function Home() {
   return (

    <div>
      <h1>Søk i brønnøysundregisteret:</h1>
      <BronnAPI />
      
     </div>


   )
 }