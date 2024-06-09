import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Trip = ({ item, tripPressHandler }) => {



  return (
    <TouchableOpacity onPress={() => tripPressHandler(item.id)}>
    <View style={style.cardContainer}>
      <View style={style.card}>
        <Text style={[style.date, style.center]}>
          {item.startTime.toLocaleString().slice(0, 9)}
        </Text>
        <View style={style.cardInfo}>
          <View style={[style.cardLeftInfo, style.center]}>
            <Text>Start:</Text>
            <Text>{item.startTime.toLocaleString().slice(10)}</Text>
            <Text>{item.startLocation}</Text>
            <Text>{item.startMiles}</Text>
          </View>
          <View style={[style.cardRightInfo]}>
            <Text>End:</Text>
            <Text>
              {item.endTime ? item.endTime.toLocaleString().slice(10) : ""}
            </Text>
            <Text>{item.endLocation}</Text>
            <Text>{item.endMiles}</Text>
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
    </TouchableOpacity>
      
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
