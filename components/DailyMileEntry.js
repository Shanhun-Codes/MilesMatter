import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const DailyMileEntry = () => {
  return (
    <>
      <View style={style.form}>
        <View style={style.inputContainer}>
        <TextInput style={style.input} placeholder="Start miles" />
        <TextInput style={style.input} placeholder="End miles" />
        </View>
     <TouchableOpacity style={style.buttonContainer}>
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
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20, 
    backgroundColor: 'aqua',
  }
});

export default DailyMileEntry;
