import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AppConfig from '../../../App.config'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: AppConfig.GOOGLE.GAPI_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Gmap;