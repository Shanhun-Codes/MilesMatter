import { StyleSheet, TextInput, View } from "react-native";


const DailyMileEntry = () => {
  return (
  <View style={style.form}>
    <TextInput
    style={style.input}
    placeholder="Start miles" />
  </View>);
};

const style = StyleSheet.create({
    input: {
        border: 'solid',
        fontSize: 20,

    }
})

export default DailyMileEntry;
