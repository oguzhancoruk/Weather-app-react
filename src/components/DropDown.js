import {useContext,useState,useEffect} from 'react'
import CityContext from '../context/CityContext'
import axios from 'axios'
import './DropDown.css'

function DropDown() {
    const [newcty,setNewcty]=useState({
      "id": 61,
      "name": "Trabzon",
      "latitude": "41.0015",
      "longitude": "39.7178",
      "population": 768417,
      "region": "Karadeniz"
    })
    const data= useContext(CityContext);
    const HandleChange=(e)=>{
        
        data.map((res)=>{
        if(res.name===e.target.value)
        {
            setNewcty(res)
        }
        return false;
        })}

    const [a,setA]=useState([])
    useEffect(()=>{
        const getData=()=>{
      axios
      .get
         ( `https://api.openweathermap.org/data/2.5/onecall?lat=${parseFloat(newcty.latitude)}&lon=${parseFloat(newcty.longitude)}&exclude=hourly,minutely&appid=55b545b5ab248ddbad69ecce233b5321&units=metric&lang=tr`)
     .then((resp)=>setA(resp.data.daily))
   };
   getData();
  },[newcty])
 

    return (
        <div className=' bg-info'>
        <div className='container'> 
        <div className='text-center '>
         
          <select className='btn btn-light border' defaultValue={"Trabzon"} name="city"  onChange={HandleChange}>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Amasya">Amasya</option>
              <option value="Ankara">Ankara</option>
              <option value="Antalya">Antalya</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Edirne">Edirne</option>
              <option value="Elâzığ">Elâzığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkâri">Hakkâri</option>
              <option value="Hatay">Hatay</option>
              <option value="Isparta">Isparta</option>
              <option value="Mersin">Mersin</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Mardin">Mardin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Karaman">Karaman</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Batman">Batman</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Bartın">Bartın</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Yalova">Yalova</option>
              <option value="Karabük">Karabük</option>
              <option value="Kilis">Kilis</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Düzce">Düzce</option>
          </select>

    
          {a.map((res,key)=>{
  
  var date = new Date((res.dt) * 1000);
 

return <div className='container  ' > 
<div className='row '>
  <div class="card border-primary  col-sm-2 float-start" >
   <div class="card-header ">{date.toUTCString().slice(0,3)}</div>
    <div class="card-body text-primary ">
      <img src={`http://openweathermap.org/img/wn/${ res.weather[0].icon}@2x.png`} alt="" />
       <h5>{res.weather[0].main}</h5>
        <h6>{Math.floor(res.temp.max)}°C  / {Math.floor(res.temp.min)}°C</h6>
      </div>
    </div>
  </div>
</div>
})}
    </div>
  </div>
</div>
)}

export default DropDown