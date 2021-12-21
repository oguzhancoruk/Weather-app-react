import {useContext,useState} from 'react'
import CityContext from '../context/CityContext'

function Weather() {
    
    const data= useContext(CityContext);
    console.log(data)
    
    return (
        <div>
           
        </div>
    )
}

export default Weather
