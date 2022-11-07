import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>      
      <Text>Next Test Word</Text>
      <Text style={styles.text}>Hello again</Text>
      <Button title="Click me"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    margin: 10,
  }
});
