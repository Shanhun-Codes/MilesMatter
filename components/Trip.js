import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Trip = ({ item, tripPressHandler }) => {
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
            <Text style={style.center}>Start:</Text>
            <Text>{formattedStartTime}</Text>
            <Text>{item.startLocation}</Text>
            <Text>{item.startMiles}</Text>
          </View>
            <View style={[style.cardRightInfo]}>
          <TouchableOpacity onPress={() => tripPressHandler(item.id)}>
              <Text>End:</Text>
              <Text>{formattedEndTime}</Text>
              <Text>{item.endLocation}</Text>
              <Text>{item.endMiles}</Text>
          </TouchableOpacity>
            </View>
        </View>
        <View style={style.flex}>
          <Text style={style.center}>Total Miles:</Text>
          <Text style={style.center}>
            {item.endMiles ? item.endMiles - item.startMiles : ""}
          </Text>
        </View>
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
