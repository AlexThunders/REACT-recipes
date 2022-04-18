import { useState } from 'react';
import { 
  YMaps,
  Map,
  FullscreenControl,
  GeolocationControl,
  Placemark,
  ZoomControl,
  TypeSelector } from 'react-yandex-maps';

  const YandexMap = () => {
    const [currentLatitude, setCurrentLatitude] = useState(0)
    const [currentLongitude, setCurrentLongitude] = useState(0)
    const [geoInfo, setGeoInfo] = useState('')

    const handleClick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => showPosition(position));
        } else {
          setGeoInfo("Geolocation is not supported by this browser.")
        }
      const showPosition = (position: any) => {
          setCurrentLatitude(position.coords.latitude)
          setCurrentLongitude(position.coords.longitude)
        }
      }

    return (
      <div  className="map-div">
        {geoInfo !== "" && <p>{geoInfo}</p>}
        <YMaps query={{ lang: 'en_RU' }}>
          <Map className='mainmap' defaultState={{ center: [56.859421, 35.912369], zoom: 8 }}>
            <Placemark geometry={[56.859421, 35.912369]} />
            <Placemark geometry={[currentLatitude, currentLongitude]} />
            <FullscreenControl options={{float: 'right'}} />
            <TypeSelector options={{ position: {top: 10, left: 10}, size: 'small' }} />
            <GeolocationControl onClick={handleClick} options={{position: {bottom: 30, right: 10}}} />
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    )
  }
  
  export default YandexMap