import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import DailyMileEntry from "./components/DailyMileEntry";
import Clock from "./components/Clock";

export default function App() {
  return (
    <View style={styles.body}>
      <Header />
      <Clock />
      <DailyMileEntry />

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    backgroundColor: "#fff",
  },
});
