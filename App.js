import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import DailyMileEntry from "./components/DailyMileEntry";
import Clock from "./components/Clock";
import Trip from "./components/Trip";
import * as Location from "expo-location";
import EndTripMilageEntry from "./components/EndTripMilageEntry";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState();
  const [tripPressed, setTripPressed] = useState(false)
  const [ selectedTripId, setSelectedTripId] = useState(null)

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }
      setIsLoading(true);
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("LOCATION");
      console.log(currentLocation);
      setIsLoading(false);
    };
    getPermissions();
  }, []);

  let currentAddressFormat = "";

  const reverseGeocode = async (coords) => {
    const reverseGeoCodedAddress = await Location.reverseGeocodeAsync({
      longitude: coords.longitude,
      latitude: coords.latitude,
    });

    if (reverseGeoCodedAddress.length > 0) {
      const currentAddress = {
        streetNumber: reverseGeoCodedAddress[0].streetNumber,
        streetName: reverseGeoCodedAddress[0].street, // Access street from the first object
        city: reverseGeoCodedAddress[0].city,
        state: reverseGeoCodedAddress[0].region,
        zip: reverseGeoCodedAddress[0].postalCode,
      };
      currentAddressFormat = `${currentAddress.streetNumber} ${currentAddress.streetName},
      ${currentAddress.city}, ${currentAddress.state}`;
      console.log("Address");
      console.log(currentAddress);

      return currentAddressFormat;
    } else {
      console.log("No address found");
      return "";
    }
  };

  const [trips, setTrips] = useState([
    {
      id: 1,
      startMiles: 1234,
      endMiles: 1273,
      startTime: new Date("2023-05-21T11:45:00.000Z"),
      endTime: new Date("2023-05-21T14:00:00.000Z"),
      startLocation: "San Francisco, CA",
      endLocation: "Sacramento, CA",
    },
    {
      id: 2,
      startMiles: 90123,
      endMiles: 90161,
      startTime: new Date("2023-05-22T07:30:00.000Z"),
      endTime: new Date("2023-05-22T09:45:00.000Z"),
      startLocation: "Denver, CO",
      endLocation: "Salt Lake City, UT",
    },
    {
      id: 3,
      startMiles: 89012,
      endMiles: 89049,
      startTime: new Date("2023-05-23T20:00:00.000Z"),
      endTime: new Date("2023-05-23T22:15:00.000Z"),
      startLocation: "Atlanta, GA",
      endLocation: "Charlotte, NC",
    },
    {
      id: 4,
      startMiles: 78901,
      endMiles: 78937,
      startTime: new Date("2023-05-24T16:45:00.000Z"),
      endTime: new Date("2023-05-24T19:00:00.000Z"),
      startLocation: "Dallas, TX",
      endLocation: "Houston, TX",
    },
    {
      id: 5,
      startMiles: 67890,
      endMiles: 67925,
      startTime: new Date("2023-05-25T12:30:00.000Z"),
      endTime: new Date("2023-05-25T15:45:00.000Z"),
      startLocation: "Boston, MA",
      endLocation: "Hartford, CT",
    },
    {
      id: 6,
      startMiles: 56789,
      endMiles: 56813,
      startTime: new Date("2023-05-26T09:15:00.000Z"),
      endTime: new Date("2023-05-26T11:30:00.000Z"),
      startLocation: "Seattle, WA",
      endLocation: "Portland, OR",
    },
    {
      id: 7,
      startMiles: 45678,
      endMiles: 45701,
      startTime: new Date("2023-05-27T18:00:00.000Z"),
      endTime: new Date("2023-05-27T20:15:00.000Z"),
      startLocation: "Miami, FL",
      endLocation: "Tampa, FL",
    },
    {
      id: 8,
      startMiles: 34567,
      endMiles: 34589,
      startTime: new Date("2023-05-28T14:45:00.000Z"),
      endTime: new Date("2023-05-28T17:00:00.000Z"),
      startLocation: "Chicago, IL",
      endLocation: "Indianapolis, IN",
    },
    {
      id: 9,
      startMiles: 23456,
      endMiles: 23478,
      startTime: new Date("2023-05-29T10:30:00.000Z"),
      endTime: new Date("2023-05-29T13:45:00.000Z"),
      startLocation: "Los Angeles, CA",
      endLocation: "San Diego, CA",
    },
    {
      id: 10,
      startMiles: 12345,
      endMiles: "",
      startTime: new Date("2023-05-30T17:15:00.000Z"),
      endTime: new Date("2023-05-30T10:30:00.000Z"),
      startLocation: "New York, NY",
      endLocation: "",
    },
  ]);

  // const sortedTrips = trips.sort((a, b) => b.id - a.id);
  // console.log("SORTED TRIPS");
  // console.log(sortedTrips)

  const startSubmitHandler = (text) => {
    if (text.length > 0) {
      const getAddress = async () => {
        const addressFormat = await reverseGeocode(location.coords);
        console.log(addressFormat);
        const newTrip = {
          id: trips.length + 1,
          startMiles: text,
          startTime: new Date(),
          startLocation: addressFormat,
        };

        setTrips((prevTrips) => {
          const updatedTrips = [newTrip, ...prevTrips];
          console.log("New Trip:", newTrip);
          return updatedTrips;
        });
      };
      getAddress();
    } else {
      Alert.alert("OOPS!", "Entry must be at least 1 character!", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };


  const tripPressHandler = (tripId) => {
    setTripPressed(true);
    console.log(`Item with id ${tripId} was pressed`);
    setSelectedTripId(tripId);
  };
  
  const endSubmitHandler = (text) => {
    console.log(`the end milage is ${text}`);
    if (text.length > 0) {
      const getAddress = async () => {
        const addressFormat = await reverseGeocode(location.coords);
        console.log(addressFormat);
        const tripToUpdate = trips.find(trip => trip.id === selectedTripId);
        console.log(tripToUpdate);
  
        const updatedTrip = {
          ...tripToUpdate, 
          endMiles: text,
          endTime: new Date(),
          endLocation: addressFormat
        };
  
        setTrips((prevTrips) => {
          const updatedTrips = prevTrips.map(trip =>
            trip.id === selectedTripId ? updatedTrip : trip
          );
          console.log("Updated array", updatedTrips);
          return updatedTrips;
        });
      };
      getAddress();
    } else {
      Alert.alert("OOPS!", "Entry must be at least 1 character!", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
    setTripPressed(false)
  };




  return isLoading ? (
    <View style={styles.loadingContainer}>
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Content is Loading...</Text>
      </View>
    </View>
  ) : (
      <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Header />
        <Clock />
        { tripPressed ? (<EndTripMilageEntry endSubmitHandler={endSubmitHandler}/> ) : ((<DailyMileEntry startSubmitHandler={startSubmitHandler} />))}
      </View>
            </TouchableWithoutFeedback>
        <View style={styles.content}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={trips.slice().sort((a, b) => b.id - a.id)}
              renderItem={({ item }) => 
              <Trip key={item.id} item={item} tripPressHandler={tripPressHandler}/>}
            />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
},
  list: {
    flex: 1,
    height: '30%'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
