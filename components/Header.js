import { StyleSheet, Text, View, Button } from "react-native";
import BurgerDropdown from "./Dropdown";

const Header = () => {
  return (
    <View style={style.header}>
      <BurgerDropdown />
      <Text style={style.title}>Miles Matter</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 80,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "purple",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default Header;
