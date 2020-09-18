import React from 'react';
import GoogleMapReact from 'google-map-react';
import AppConfig from '../../../App.config'

const Gmap = (props) => {
    const { lat, lng } = props.hotelRoom

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: AppConfig.GOOGLE.GAPI_KEY }}
                defaultCenter={{
                    lat: 21.433920,
                    lng: 91.987030
                }}
                defaultZoom={13}
            >
            </GoogleMapReact>
        </div>
    );
};


export default Gmap;