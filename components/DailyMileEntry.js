import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DailyMileEntry = ({submitHandler}) => {
  const [text, setText] = useState('')



  const changeHandler = (val) => {
    setText(val)
    console.log(text);
  }


  return (
    <>
      <View style={style.form}>
        <View style={style.inputContainer}>
          <TextInput style={style.input} 
          keyboardType="numeric"
          placeholder="Enter Miles"
          onChangeText={changeHandler}
          />


          {/* <TextInput style={style.input} placeholder="End miles" /> Needs to go onto the edit page of each list item so initial submit enters start miles and location then user will click on the trip at end of shift and enter end miles which will log miles and current location once again */}


        </View>
        <TouchableOpacity style={style.buttonContainer}
        onPress={() => submitHandler(text)}>          
          <Text style={style.button}
          >Start Trip</Text>
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
    textAlign: 'center',
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
