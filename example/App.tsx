import * as ExpoShareExtension from "expo-share-extension";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#313639" }}>{ExpoShareExtension.hello()}</Text>
      <Button title="Add from App" onPress={() => Alert.alert("added")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
