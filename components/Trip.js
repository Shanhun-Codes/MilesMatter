import { StyleSheet, Text, View } from "react-native";

const Trip = ({ trip }) => {
  return (
    <View style={[style.card]}>
      <Text style={[style.date, style.center]}>
        {trip.startTime.toLocaleString().slice(0, 9)}
      </Text>
<View style={[style.cardInfo]}>

      <View style={[style.cardLeftInfo]}>
        <Text>Start:</Text>
        <Text>{trip.startTime.toLocaleString().slice(11)}</Text>
        <Text>{trip.startLocation}</Text>
        <Text>{trip.startMiles}</Text>
      </View>

      <View style={[style.cardRightInfo]}>
        <Text>End:</Text>
        <Text>{trip.endTime.toLocaleString().slice(11)}</Text>
        <Text>{trip.endLocation}</Text>
        <Text>{trip.endMiles}</Text>
      </View>
      <View style={[style.location]}></View>
      <View style={[style.miles]}></View>
</View>
      <View style={style.flex}>
      <Text style={[style.center]}>Total Miles:</Text>
        <Text style={style.center}>
          {trip.endMiles ? trip.endMiles - trip.startMiles : ""}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "black",
    borderRadius: 0.01,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  center: {
    textAlign: "center",
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cardLeftInfo: {
    borderWidth: 1,
    width: "45%",
    alignItems: 'center'
  },
  cardRightInfo: {
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
  }
});

export default Trip;
