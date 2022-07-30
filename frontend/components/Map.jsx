import React from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react"

const Map = ({coordinates, setCoordinates, setBounds}) => {

  return ( <Box width={"full"} height={"full"}>

  <GoogleMapReact
    bootstrapURLKeys={{  key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}}
    defaultCenter={coordinates}
    center= {coordinates}
    defaultZoom= {10}
    margin= {[50, 50, 50, 50]}
    options= {""}
    onChange= {(e) => {
      console.log(e)
      setCoordinates({lat : e.center.lat, lng: e.center.lng})
      setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    }}
    onChildClick= {() => {}}
  ></GoogleMapReact>
  </Box>
  );
};

export default Map;
