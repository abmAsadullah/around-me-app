import { useRef, useEffect, useState } from "react";
// import GoogleMapReact from 'google-map-react'
// import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Paper, Typography, useMediaQuery } from "@mui/material";
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = import.meta.env.VITE_MAPBOX_API_KEY;
console.log(accessToken);


import useStyles from './styles'

const Map = () => {
  // const isMobile = useMediaQuery('(min-width:600px)');
  // const coordinates = { lat:0, lng: 0 }
  const classes = useStyles();
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      center: [-73.935242, 40.730610], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    mapInstanceRef.current.on("load", () => {
      setMapLoaded(true);
    });
  }, []);
  return (
    <div className={classes.mapContainer}>
      {/* <GoogleMapReact
        bootstrapURLKeys = {{ key: ''}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >
      </GoogleMapReact> */}
      {/* <Typography variant='h6'>Search around you and select. </Typography> */}

      <SearchBox
        accessToken={accessToken}
        map={mapInstanceRef.current}
        mapboxgl={mapboxgl}
        value={inputValue}
        onChange={(d) => {
          setInputValue(d);
        }}
        marker
      />
      <div id="map-container" ref={mapContainerRef} style={{ height: '100vh' }} />
    </div>
  )
}

export default Map