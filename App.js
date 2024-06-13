import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import DailyMileEntry from "./components/DailyMileEntry";
import Clock from "./components/Clock";
import Trip from "./components/Trip";
import * as Location from "expo-location";
import EndTripMilageEntry from "./components/EndTripMilageEntry";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState();
  const [tripPressed, setTripPressed] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [trips, setTrips] = useState([]);

  // Store data in Async Storage
  const storeTrips = async (updatedTrips) => {
    try {
      await AsyncStorage.setItem("trips", JSON.stringify(updatedTrips));
    } catch (e) {
      console.error("Error storing trips:", e);
    }
  };

  // Retrieve trips from Async Storage when the component mounts
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
      setIsLoading(false);
    };

    const loadTrips = async () => {
      try {
        const storedTrips = await AsyncStorage.getItem("trips");
        if (storedTrips !== null) {
          setTrips(JSON.parse(storedTrips));
        }
      } catch (e) {
        console.error("Error loading trips:", e);
      }
    };

    getPermissions();
    loadTrips();
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
        streetName: reverseGeoCodedAddress[0].street,
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

  const startSubmitHandler = (text, textInputRef) => {
    if (text.length > 0) {
      const getAddress = async () => {
        const addressFormat = await reverseGeocode(location.coords);
        console.log(addressFormat);
        const newTrip = {
          id: trips.length + 1,
          startMiles: text.padStart(6, 0),
          startTime: new Date().toISOString(),
          startLocation: addressFormat,
        };

        setTrips((prevTrips) => {
          const updatedTrips = [newTrip, ...prevTrips];
          console.log("New Trip:", newTrip);
          storeTrips(updatedTrips);
          return updatedTrips;
        });
      };
      getAddress();
      textInputRef.current.clear();
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

  const endSubmitHandler = (text, textInputRef) => {
    console.log(`the end milage is ${text}`);
    if (text.length > 0) {
      const getAddress = async () => {
        const addressFormat = await reverseGeocode(location.coords);
        console.log(addressFormat);
        const tripToUpdate = trips.find((trip) => trip.id === selectedTripId);
        console.log(tripToUpdate);

        const updatedTrip = {
          ...tripToUpdate,
          endMiles: text.padStart(6, 0),
          endTime: new Date().toISOString(),
          endLocation: addressFormat,
        };

        setTrips((prevTrips) => {
          const updatedTrips = prevTrips.map((trip) =>
            trip.id === selectedTripId ? updatedTrip : trip
          );
          console.log("Updated array", updatedTrips);
          storeTrips(updatedTrips);
          return updatedTrips;
        });
      };
      getAddress();
      textInputRef.current.clear()
    } else {
      Alert.alert("OOPS!", "Entry must be at least 1 character!", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
    setTripPressed(false);
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
          {tripPressed ? (
            <EndTripMilageEntry endSubmitHandler={endSubmitHandler} />
          ) : (
            <DailyMileEntry startSubmitHandler={startSubmitHandler} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.content}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={trips.slice().sort((a, b) => b.id - a.id)}
          renderItem={({ item }) => (
            <Trip
              key={item.id}
              item={item}
              tripPressHandler={tripPressHandler}
            />
          )}
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
    height: "30%",
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
