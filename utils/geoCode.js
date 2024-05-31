import * as Location from "expo-location";
import { useState, useEffect } from "react";


  const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   let setLocation;
  //   const getPermissions = async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log("Please grant location permissions");
  //       return;
  //     }
  //     let currentLocation = await Location.getCurrentPositionAsync({});
  //     setLocation = currentLocation;
  //     // console.log('Location', currentLocation);
  //     reverseGeocode(currentLocation.coords);
  //   };
  //   getPermissions();
  // }, []);

  const reverseGeocode = async (coords) => {
    const reverseGeoCodedAddress = await Location.reverseGeocodeAsync({
      longitude: coords.longitude,
      latitude: coords.latitude
    });
    if (reverseGeoCodedAddress.length > 0) {
      const currentAddress = {
        streetNumber: reverseGeoCodedAddress[0].streetNumber,
        streetName: reverseGeoCodedAddress[0].street,
        state: reverseGeoCodedAddress[0].region,
        zip: reverseGeoCodedAddress[0].postalCode
      };
      const current 
      console.log('Address');
      console.log(currentAddress);
    } else {
      console.log("No address found");
    }
  };

