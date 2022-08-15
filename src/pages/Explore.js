import React,{useEffect, useState} from 'react'
import { MapContainer, TileLayer, useMap , Marker, Popup, useMapEvents} from 'react-leaflet'
import L from 'leaflet';
import {Empty, Modal} from "antd";
import { useSelector, useDispatch } from 'react-redux';
import LocationDetail from './LocationDetail';
import MyLocationMarker from '../components/LocationMarker';
const icon = L.icon({ iconUrl: "/images/marker-icon.png" });
const beachIcon = L.icon({ iconUrl: "/images/beach.png" });

const Explore = () => {

const [location, setLocation] = useState({lat:27.1751,lng:78.0421} )
const [locationDetailsVisible, setLocationDetailsVisible] = useState(false);
const [place, setPlace] = useState(null);
const places = useSelector((state) => state['places'])

const markerClickHandler =(e, place) => {
     //handle the click on the marker
    window.positions = e     
    setLocation({lat:e.latlng.lat, lng:e.latlng.lng})
    setPlace(place) 
    setLocationDetailsVisible(true)
 } 
 if (places === null){
     return ( <Empty description="Loading initial data"></Empty>)
 }       

  return (
   <>
    <MapContainer center={location} zoom={5} 
       style={{height:"80vh", width: "100%" , }}
       scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    { places.locations.map( place =>
        <Marker position={{ "lat": place.lat, "lng": place.lng }} 
        icon={icon} 
        eventHandlers={{
            click:  (e) =>  markerClickHandler( e, place)                 
          }}
        
        />
    
        )
    }
    <MyLocationMarker />         
    </MapContainer>
    {
        place !== null ?
            <Modal title={`${place.name} - ${place.description}`}
                centered
                visible={locationDetailsVisible}
                onOk={() => setLocationDetailsVisible(false)}
                onCancel={() => setLocationDetailsVisible(false)}           
                width={"80%"}>
                <LocationDetail place={place} lat={location.lat} lng={location.lng}/>    
            </Modal> 
        :
        <></>
    }
    </>            
  )
}

export default Explore