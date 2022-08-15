import React,{useEffect, useState} from 'react';
import { Marker, Popup, useMapEvents} from 'react-leaflet';
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

const MyLocationMarker = () =>{    
    const [position, setPosition] = useState(null)
    
    const map = useMapEvents({
        
        click(){
            map.locate()
        },
        locationfound(e){
           map.flyTo(e.latlng, map.getZoom())
           setPosition( e.latlng )
        }
      
    })

    return position === null ? null : (
      <Marker position={position } icon={icon}>
      <Popup>
        You are here.
      </Popup>
    </Marker>
    )
}

export default MyLocationMarker;