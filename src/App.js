import axios from 'axios'
import {useState,useEffect} from "react"
import './App.css';
import DropDown from './components/DropDown';

import { CityProvider } from './context/CityContext';


function App() {

  

//   const [a,setA]=useState([])


//   useEffect(()=>{
//     axios("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=55b545b5ab248ddbad69ecce233b5321&units=metric&lang=tr")
//     .then((res)=>setA(res.data))
//   },[])
// console.log(a.daily[0].weather[0].description)

  return (
   <CityProvider>
    <DropDown />
    
   </CityProvider>
  );
}

export default App;
