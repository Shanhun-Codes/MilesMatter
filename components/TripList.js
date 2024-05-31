// import { FlatList, StyleSheet, View } from "react-native";
// import Trip from "./Trip";

// const TripList = () => {
//   return (

//   );
// };

// const style = StyleSheet.create({
//   listContainer: {
//     padding: 30,
//   },
// });

// export default TripList;

// import { FlatList, StyleSheet, View } from "react-native";
// import Trip from "./Trip";
// import { useState } from "react";

// const TripList = () => {

//   const [trips, setTrip] = useState([
//     {
//       id: 1,
//       startMiles: 1234,
//       endMiles: 1273,
//       startTime: new Date("2023-05-21T11:45:00.000Z"),
//       endTime: new Date("2023-05-21T14:00:00.000Z"),
//       startLocation: "San Francisco, CA",
//       endLocation: "Sacramento, CA",
//     },
//     {
//       id: 2,
//       startMiles: 90123,
//       endMiles: 90161,
//       startTime: new Date("2023-05-22T07:30:00.000Z"),
//       endTime: new Date("2023-05-22T09:45:00.000Z"),
//       startLocation: "Denver, CO",
//       endLocation: "Salt Lake City, UT",
//     },
//     {
//       id: 3,
//       startMiles: 89012,
//       endMiles: 89049,
//       startTime: new Date("2023-05-23T20:00:00.000Z"),
//       endTime: new Date("2023-05-23T22:15:00.000Z"),
//       startLocation: "Atlanta, GA",
//       endLocation: "Charlotte, NC",
//     },
//     {
//       id: 4,
//       startMiles: 78901,
//       endMiles: 78937,
//       startTime: new Date("2023-05-24T16:45:00.000Z"),
//       endTime: new Date("2023-05-24T19:00:00.000Z"),
//       startLocation: "Dallas, TX",
//       endLocation: "Houston, TX",
//     },
//     {
//       id: 5,
//       startMiles: 67890,
//       endMiles: 67925,
//       startTime: new Date("2023-05-25T12:30:00.000Z"),
//       endTime: new Date("2023-05-25T15:45:00.000Z"),
//       startLocation: "Boston, MA",
//       endLocation: "Hartford, CT",
//     },
//     {
//       id: 6,
//       startMiles: 56789,
//       endMiles: 56813,
//       startTime: new Date("2023-05-26T09:15:00.000Z"),
//       endTime: new Date("2023-05-26T11:30:00.000Z"),
//       startLocation: "Seattle, WA",
//       endLocation: "Portland, OR",
//     },
//     {
//       id: 7,
//       startMiles: 45678,
//       endMiles: 45701,
//       startTime: new Date("2023-05-27T18:00:00.000Z"),
//       endTime: new Date("2023-05-27T20:15:00.000Z"),
//       startLocation: "Miami, FL",
//       endLocation: "Tampa, FL",
//     },
//     {
//       id: 8,
//       startMiles: 34567,
//       endMiles: 34589,
//       startTime: new Date("2023-05-28T14:45:00.000Z"),
//       endTime: new Date("2023-05-28T17:00:00.000Z"),
//       startLocation: "Chicago, IL",
//       endLocation: "Indianapolis, IN",
//     },
//     {
//       id: 9,
//       startMiles: 23456,
//       endMiles: 23478,
//       startTime: new Date("2023-05-29T10:30:00.000Z"),
//       endTime: new Date("2023-05-29T13:45:00.000Z"),
//       startLocation: "Los Angeles, CA",
//       endLocation: "San Diego, CA",
//     },
//     {
//       id: 10,
//       startMiles: 12345,
//       endMiles: "",
//       startTime: new Date("2023-05-30T08:15:00.000Z"),
//       endTime: new Date("2023-05-30T10:30:00.000Z"),
//       startLocation: "New York, NY",
//       endLocation: "",
//     },
//   ]);

//   const sortedTrips = trips.sort((a, b) => b.id - a.id);

//   const submitHandler = (text) => {
//     setTrip((trips) => {
//       return [
//         {
//           id: trips.length,
//           startMiles: text,
//           endMiles: '',
//           startTime: new Date(),
//           endTime: '',
//           startLocation: '',
//           endLocation: '',
//         }, ...trips
//       ]

//     },
//     console.log(trips)
//   )
//   }

//   return (
//     <View style={style.listContainer}>
//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={sortedTrips}
//         renderItem={({ item }) => <Trip key={item.id} item={item} submitHandler={submitHandler}/>}
//       />
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   listContainer: {
//     padding: 30,
//   },
// });

// export default TripList;
