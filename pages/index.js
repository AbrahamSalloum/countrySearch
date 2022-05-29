import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../data/countries.json'
import languages from '../data/languages.json'
import { useEffect, useState, useCallback } from 'react'
import Select from 'react-select'
import Link from 'next/link'
export default function Home() {

  const [sval, setSval] = useState('')
  const [destinationList, SetDestinationList] = useState({})
  const languageName = {
    "aa": "Afar",
    "ab": "Abkhazian",
    "ae": "Avestan",
    "af": "Afrikaans",
    "ak": "Akan",
    "am": "Amharic",
    "an": "Aragonese",
    "ar": "Arabic",
    "as": "Assamese",
    "av": "Avaric",
    "ay": "Aymara",
    "az": "Azerbaijani",
    "ba": "Bashkir",
    "be": "Belarusian",
    "bg": "Bulgarian",
    "bh": "Bihari",
    "bi": "Bislama",
    "bm": "Bambara",
    "bn": "Bengali",
    "bo": "Tibetan",
    "br": "Breton",
    "bs": "Bosnian",
    "ca": "Catalan",
    "ce": "Chechen",
    "ch": "Chamorro",
    "co": "Corsican",
    "cr": "Cree",
    "cs": "Czech",
    "cu": "Church Slavic",
    "cv": "Chuvash",
    "cy": "Welsh",
    "da": "Danish",
    "de": "German",
    "dv": "Divehi",
    "dz": "Dzongkha",
    "ee": "Ewe",
    "el": "Greek",
    "en": "English",
    "eo": "Esperanto",
    "es": "Spanish",
    "et": "Estonian",
    "eu": "Basque",
    "fa": "Persian",
    "ff": "Fulah",
    "fi": "Finnish",
    "fj": "Fijian",
    "fo": "Faroese",
    "fr": "French",
    "fy": "Western Frisian",
    "ga": "Irish",
    "gd": "Scottish Gaelic",
    "gl": "Galician",
    "gn": "Guarani",
    "gu": "Gujarati",
    "gv": "Manx",
    "ha": "Hausa",
    "he": "Hebrew",
    "hi": "Hindi",
    "ho": "Hiri Motu",
    "hr": "Croatian",
    "ht": "Haitian",
    "hu": "Hungarian",
    "hy": "Armenian",
    "hz": "Herero",
    "ia": "Interlingua",
    "id": "Indonesian",
    "ie": "Interlingue",
    "ig": "Igbo",
    "ii": "Sichuan Yi",
    "ik": "Inupiaq",
    "io": "Ido",
    "is": "Icelandic",
    "it": "Italian",
    "iu": "Inuktitut",
    "ja": "Japanese",
    "jv": "Javanese",
    "ka": "Georgian",
    "kg": "Kongo",
    "ki": "Kikuyu",
    "kj": "Kwanyama",
    "kk": "Kazakh",
    "kl": "Kalaallisut",
    "km": "Khmer",
    "kn": "Kannada",
    "ko": "Korean",
    "kr": "Kanuri",
    "ks": "Kashmiri",
    "ku": "Kurdish",
    "kv": "Komi",
    "kw": "Cornish",
    "ky": "Kirghiz",
    "la": "Latin",
    "lb": "Luxembourgish",
    "lg": "Ganda",
    "li": "Limburgish",
    "ln": "Lingala",
    "lo": "Lao",
    "lt": "Lithuanian",
    "lu": "Luba-Katanga",
    "lv": "Latvian",
    "mg": "Malagasy",
    "mh": "Marshallese",
    "mi": "Maori",
    "mk": "Macedonian",
    "ml": "Malayalam",
    "mn": "Mongolian",
    "mr": "Marathi",
    "ms": "Malay",
    "mt": "Maltese",
    "my": "Burmese",
    "na": "Nauru",
    "nb": "Norwegian Bokmal",
    "nd": "North Ndebele",
    "ne": "Nepali",
    "ng": "Ndonga",
    "nl": "Dutch",
    "nn": "Norwegian Nynorsk",
    "no": "Norwegian",
    "nr": "South Ndebele",
    "nv": "Navajo",
    "ny": "Chichewa",
    "oc": "Occitan",
    "oj": "Ojibwa",
    "om": "Oromo",
    "or": "Oriya",
    "os": "Ossetian",
    "pa": "Panjabi",
    "pi": "Pali",
    "pl": "Polish",
    "ps": "Pashto",
    "pt": "Portuguese",
    "qu": "Quechua",
    "rm": "Raeto-Romance",
    "rn": "Kirundi",
    "ro": "Romanian",
    "ru": "Russian",
    "rw": "Kinyarwanda",
    "sa": "Sanskrit",
    "sc": "Sardinian",
    "sd": "Sindhi",
    "se": "Northern Sami",
    "sg": "Sango",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "sm": "Samoan",
    "sn": "Shona",
    "so": "Somali",
    "sq": "Albanian",
    "sr": "Serbian",
    "ss": "Swati",
    "st": "Southern Sotho",
    "su": "Sundanese",
    "sv": "Swedish",
    "sw": "Swahili",
    "ta": "Tamil",
    "te": "Telugu",
    "tg": "Tajik",
    "th": "Thai",
    "ti": "Tigrinya",
    "tk": "Turkmen",
    "tl": "Tagalog",
    "tn": "Tswana",
    "to": "Tonga",
    "tr": "Turkish",
    "ts": "Tsonga",
    "tt": "Tatar",
    "tw": "Twi",
    "ty": "Tahitian",
    "ug": "Uighur",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "ve": "Venda",
    "vi": "Vietnamese",
    "vo": "Volapuk",
    "wa": "Walloon",
    "wo": "Wolof",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "za": "Zhuang",
    "zh": "Chinese",
    "zu": "Zulu"
  };

  // key value array with language name as key and translated word hello as value
  const translation = {
    "Afrikaans": "Hallo",
    "Albanian": "Mirë dita",
    "Amharic": "ታዲያስ",
    "Arabic": "مرحبا",
    "Azerbaijani": "Салам",
    "Bengali": "নমস্কার",
    "Bosnian": "Zdravo",
    "Bulgarian": "Здравей",
    "Croatian": "Bok",
    "Czech": "ahoj",
    "Danish": "Hej",
    "Dutch": "Hallo",
    "English": "Hello",
    "Esperanto": "Saluton",
    "Estonian": "Tere",
    "Persian": "سلام",
    "Fijian": "Bula",
    "Finnish": "Terve",
    "French": "Salut",
    "German": "Hallo",
    "Greek": "Γεια σου",
    "Hebrew": "שלום",
    "Hindi": "नमस्ते",
    "Hungarian": "Szia",
    "Indonesian": "Hai",
    "Irish": "Dia dhuit",
    "Italian": "Ciao",
    "Japanese": "こんにちは",
    "Kannada": "ನಮಸ್ಕಾರ",
    "Khmer": "ជំរាបសួរ",
    "Korean": "안녕",
    "Lao": "ສະບາຍດີ",
    "Latin": "Salve",
    "Latvian": "Sveiki",
    "Limburgish": "Hallau",
    "Lithuanian": "Sveiki",
    "Macedonian": "Добар ден",
    "Malay": "Selamat tengahari",
    "Maltese": "Ħelow",
    "Chinese": "你好",
    "Maori": "Kia ora",
    "Norwegian": "Hei",
    "Polish": "Cześć",
    "Portuguese": "Oi",
    "Romanian": "alo or salut",
    "Russian": "Здравствуйте",
    "Scottish Gaelic": "Haló",
    "Serbian": "Здраво",
    "Slovak": "Ahoj",
    "Slovenian": "Zdravo",
    "Spanish": "Hola",
    "Swahili": "Hujambo",
    "Swedish": "Hallá",
    "Tamil": "வனக்கம்",
    "Telugu": "నమస్కారం",
    "Thai": "สวัสดีค่ะ",
    "Turkish": "Merhaba",
    "Vietnamese": "Xin chào",
    "Yiddish": "שלום"
  };



  const imgsrch = useCallback(async (c) => {
    let dest = c.value
    let code = c.code.toUpperCase()

    const srchimg = await fetch(`http://10.1.1.11:3000/api/img/${dest} tourist destination`)
    const images = await srchimg.json()
    const greeting = !!translation[languageName[languages[code]["languages"][0]]] ? translation[languageName[languages[code]["languages"][0]]] : ""

    SetDestinationList((prevstate) => {
      return { ...prevstate, [dest]: { "image": images.results[0].urls.full, "name": [dest], "greeting": greeting } };
    })

  }, [])

  useEffect(() => {



    [{ value: "japan", code: 'jp' }, { value: "UK", code: 'gb' }, { value: "France", code: 'fr' }, { value: "Bali", code: 'id' }].map((p) => imgsrch(p))

  }, [imgsrch])




  const handleChange = (c) => {
    console.log(c)
    const code = countries.find(ele => ele.value == c.value)
    if (!!code) setSval(code['code'])
    imgsrch(c)
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
              return (
                <Link href={`/country/${dest}`} key={i}>
                  <div style={{ "backgroundImage": `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${destinationList[dest].image})` }} className={styles.card}>
                    <h2>{dest} &rarr;</h2>
                    <p><i><div styles="height:2ch">{`${destinationList[dest].greeting}`}</div></i></p>
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
