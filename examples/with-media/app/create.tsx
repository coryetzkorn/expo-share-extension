import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Create() {
  const { extra } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Inter-Black", fontSize: 24, marginBottom: 10 }}
      >
        Create Media
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#313639",
          fontSize: 16,
        }}
      >
        {extra ? `Extra: ${extra}` : "No extra data"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
