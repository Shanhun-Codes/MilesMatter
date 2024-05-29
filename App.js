import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.all}>
      <Header />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
