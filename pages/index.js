import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../data/countries.json'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import Link from 'next/link'
export default function Home() {

  const [imagesList, setImages] = useState({})
  const [sval, setSval] = useState('')
 


  useEffect(() => {

    const imgsrch = async (term) => {
      if(!!imagesList[term] == true) {
        return 
      }
  
      const srchimg = await fetch(`http://10.1.1.11:3000/api/img/${term} tourist destination`)
      const images = await srchimg.json()
      
      setImages((prevstate)=> {
     return    {...prevstate, [term]: images.results[0].urls.full}
    })
   
    }
    
   
    ["japan", "UK", "France", "Bali"].map((p) => imgsrch(p))
    console.log(imagesList)
   
  }, [])


  

  const handleChange = (c) => {
    
    const code = countries.find(ele => ele.value == c.value)
    if (!!code) setSval(code['code'])

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
        <div><Select options={countries} className={styles.searchbox} onChange={handleChange} defaultValue={countries[0].value} />  </div>
        <div className='flagDiv'>{!!sval ? <Image src={`/countryflags/${sval.toLowerCase()}.svg`} alt={sval} width="100" height="40" /> : null}  </div>
        </div>
         
             <button className={styles.searchbtn} type="submit" value="Submit" >&#128269;</button> 
            
          
       

        <div className={styles.grid} >
          <Link href="/country/Japan">
            <div className={styles.card} style={{"background": `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${imagesList["japan"]})`, "backgroundSize": "contain"}}>
              <h2>Japan &rarr;</h2>
              <p><i>こんにちは - Konnichiwa</i></p>
            </div>
          </Link>

          <Link href="/country/UK" className={styles.card}>
            <div className={styles.card} style={{"background": `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${imagesList["UK"]})`, "backgroundSize": "cover"}}>
              <h2>UK</h2>
              <p><i>Hello</i></p>
            </div>
          </Link>

          <Link
            href="/country/france"
            className={styles.card}
          >
            <div className={styles.card} style={{"background": `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${imagesList["France"]})`, "backgroundSize": "cover"}}>
              <h2>France</h2>
              <p><i>Salut</i></p>
            </div>
          </Link>

          <Link
            href="/country/bali"
            className={styles.card}
          >
            <div className={styles.card} style={{"background": `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${imagesList["Bali"]})`, "backgroundSize": "cover"}}>
              <h2>Bali</h2>
              <p><i>Om suastiastu</i></p>
            </div>
          </Link>
        </div>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
