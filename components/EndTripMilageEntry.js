import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const EndTripMilageEntry = ({ endSubmitHandler }) => {
  const [text, setText] = useState("");
  const textInputRef = useRef(null)

  const changeHandler = (val) => {
    setText(val);
    console.log(text);
  };
  return (
    <>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
          ref={textInputRef}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter End Miles"
            onChangeText={changeHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => endSubmitHandler(text, textInputRef)}>
            <Text style={styles.button}>End Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default EndTripMilageEntry;
