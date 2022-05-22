import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../data/countries.json'
import { useEffect, useState, useCallback } from 'react'
import Select from 'react-select'
import Link from 'next/link'
export default function Home() {

  const [sval, setSval] = useState('')
  const [destinationList, SetDestinationList] = useState({})
 



  const imgsrch = useCallback(async (dest) => {

    
    const srchimg = await fetch(`http://10.1.1.11:3000/api/img/${dest} tourist destination`)
    const images = await srchimg.json()

    SetDestinationList((prevstate)=> {
      return    {...prevstate, [dest]: {"image":  images.results[0].urls.full, "name": [dest]} };
    })
    
  }, [])

  useEffect(() => {



    ["japan", "UK", "France", "Bali"].map( (p) =>  imgsrch(p))
    
  }, [imgsrch])

 
  

  const handleChange = (c) => {
    console.log(c)
    const code = countries.find(ele => ele.value == c.value)
    if (!!code) setSval(code['code'])
    imgsrch(c.label)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>✈️ Places</title>
        <meta name="description" content="Search Country Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <h1 className={styles.title}>Places</h1>
       

        <div className={styles.searchgroup}>
        <div><Select options={countries} classNamePrefix="sbox" className={styles.searchbox} onChange={handleChange} placeholder="Select a country to begin" />  </div>
        <div className='flagDiv'>{!!sval ? <Image src={`/countryflags/${sval.toLowerCase()}.svg`} alt={sval} width="100" height="40" /> : null}  </div>
        </div>
         
        <div className={styles.grid} >

        
        {
          Object.keys(destinationList).map((dest, i) => {
            return(
              <Link href={`/country/${dest}`} key={i}>
              <div style={{"backgroundImage": `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${destinationList[dest].image})`}} className={styles.card}>
                <h2>{dest} &rarr;</h2>
                <p><i>こんにちは - Konnichiwa</i></p>
              </div>
            </Link>
            )
          })
        }
        </div>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
