import { Entypo } from "@expo/vector-icons";

import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const HamburgerDropdown = () => {
  const pressHandler = () => {
    console.log("pressed");
  };

  return (
    <TouchableOpacity>
      <Entypo
        style={style.menuBtn}
        onPress={pressHandler}
        name="menu"
        size={30}
        color="white"
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  menuBtn: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default HamburgerDropdown;
