import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";


const Trip = ({ item, tripPressHandler, deleteTripHandler }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formattedStartDate = formatDate(item.startTime);
  const formattedStartTime = formatTime(item.startTime);
  const formattedEndTime = item.endTime ? formatTime(item.endTime) : "";

  return (
    <View style={style.cardContainer}>
      <View style={style.card}>
        <Text style={[style.date, style.center]}>{formattedStartDate}</Text>
        <View style={style.cardInfo}>
          <View style={[style.cardLeftInfo, style.center]}>
            <TouchableOpacity>
              <Text style={style.center}>Start:</Text>
              <Text style={style.center}>{formattedStartTime}</Text>
              <Text>{item.startLocation}</Text>
              <Text>Miles: {item.startMiles}</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.cardRightInfo]}>
            <TouchableOpacity onPress={() => tripPressHandler(item.id)}>
              <Text style={style.center} t>
                End:
              </Text>
              <Text style={style.center}>{formattedEndTime}</Text>
              <Text>{item.endLocation}</Text>
              <Text>Miles: {item.endMiles} </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.flex}>
          <Text>Total Miles:</Text>
          <Text>{item.endMiles ? item.endMiles - item.startMiles : ""}</Text>
        </View>
        <TouchableOpacity>
          <Entypo
          name="trash"
          onPress={() => deleteTripHandler(item.id)}
           />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "black",
    borderRadius: 0.01,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  center: {
    textAlign: "center",
  },
  cardInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardLeftInfo: {
    borderWidth: 1,
    width: "45%",
    alignItems: "center",
  },
  cardRightInfo: {
    borderWidth: 1,
    width: "45%",
    alignItems: "center",
  },
});

export default Trip;
