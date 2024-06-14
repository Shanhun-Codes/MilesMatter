import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DailyMileEntry = ({ startSubmitHandler }) => {
  const [text, setText] = useState("");
  const startTextInputRef = useRef(null);

  const changeHandler = (val) => {
    setText(val);
    console.log(text);
  };

  return (
    <>
      <View style={style.form}>
        <View style={style.inputContainer}>
          <TextInput
            ref={startTextInputRef}
            style={style.input}
            keyboardType="numeric"
            placeholder="Enter Start Miles"
            onChangeText={changeHandler}
          />
        </View>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            onPress={() => startSubmitHandler(text, startTextInputRef)}
          >
            <Text style={style.button}>Start Trip</Text>
          </TouchableOpacity>
        </View>
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
    textAlign: "center",
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
