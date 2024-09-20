import SPB from './components/img/320a282765ab36c00fbf408ea26ccb2c1f1835bb.jpg';
import Pekin from './components/img/161015 2Кme bureau Е PВkin_0.jpg';
import Murino from './components/img/b727d6686c851476d25e26345638a4ee.jpg';
import Dushanbe from './components/img/NOLX1244.jpg';
import './App.css';
import Section from './components/Section'
import Button from './components/Button';
import { useEffect, useState } from 'react';




export default function App() {
  const [weather, setWeather] = useState(null)
  const [name, setName] = useState('Пекин')
  const [city1, setcity1] = useState(39.9075)
  const [cityImg, setCityImg] = useState(Pekin)

  const [city2, setcity2] = useState(116.397)

  
  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city1}&longitude=${city2}&current=temperature_2m,wind_speed_10m`;
    fetch(url,{method:'GET'})
      .then((data)=>{
        return data.json()
      })
      .then((weather)=>[
        setWeather(weather)
      ])
  }, [city1, city2])
  function handleClick(params){
    if (params === 'Пекин') {
      setCityImg(Pekin)
      setName('Пекин')
      setcity1(39.9075)
      setcity2(116.397)
    } else if(params === 'Санкт-Петербург') {
      setName('Санкт-Петербург')
      setCityImg(SPB)
      setcity1(59.9386300)
      setcity2(30.3141300)
    } else if(params === 'Мурино') {
      setName('Мурино')
      setCityImg(Murino)
      setcity1(60.0479600)
      setcity2(30.4520400)
    }else if(params === 'Душанбе') {
      setName('Душанбе')
      setCityImg(Dushanbe)
      setcity1(38.5358)
      setcity2(68.7791)
    }
  }
    
    
  console.log(weather);
  
  return (
    <>
      {weather ? (
        <div className="App">
          <Section spd={weather.current.wind_speed_10m} text={name} weather={weather.current.temperature_2m}  img={cityImg} />
          <div className='Buttons-items'>
            <Button onClick={()=>{handleClick('Пекин')}}>Пекин</Button>
            <Button onClick={()=>{handleClick('Санкт-Петербург')}}>Санкт-Петербург</Button>
            <Button onClick={()=>{handleClick('Мурино')}}>Мурино</Button>
            <Button onClick={()=>{handleClick('Душанбе')}}>Душанбе</Button>
          </div>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </>
  )
  
 
}
