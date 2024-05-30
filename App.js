import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.body}>
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    backgroundColor: "#fff",
  },
});
