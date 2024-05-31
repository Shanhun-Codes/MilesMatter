import { useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DailyMileEntry = () => {
const [location, setLocation] = useState()
const [address, setAddress] = useState()


  useEffect(() => {
    const getPermissions = async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({})
      setLocation(currentLocation)
      console.log('Location', currentLocation);
    };
    getPermissions();
  }, []);

  const reverseGeocode = async () => {
    const reverseGeoCodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    })
    console.log(reverseGeoCodedAddress);

  }


  return (
    <>
      <View style={style.form}>
        <View style={style.inputContainer}>
          <TextInput style={style.input} placeholder="Start miles" />
          <TextInput style={style.input} placeholder="End miles" />
        </View>
        <TouchableOpacity style={style.buttonContainer}
        onPress={reverseGeocode}>
          <Text style={style.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  form: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    width: "45%",
    fontSize: 25,
    backgroundColor: "coral",
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "aqua",
  },
});

export default DailyMileEntry;
