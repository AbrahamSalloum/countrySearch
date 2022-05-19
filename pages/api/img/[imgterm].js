import Cors from 'cors'

const cors = Cors()



export default async function handler(req, res) {
    const srchterm = req.query.imgterm
    const options = {
        headers: {'Authorization': `Client-ID ${process.env.UNSPLASHKEY}`}
      }
    const url = `https://api.unsplash.com/search/photos?page=1&query=${srchterm}`
    const response = await fetch(url, options);
    const images = await response.json()
    
    res.status(200).json(images)

}