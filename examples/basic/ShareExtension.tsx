import { close, openHostApp, type InitialProps } from "expo-share-extension";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ShareExtension({ url, text }: InitialProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Inter-Black", fontSize: 24, marginBottom: 10 }}
      >
        Basic Example
      </Text>
      <View style={styles.body}>
        {url && (
          <Text
            style={{
              textAlign: "center",
              color: "#313639",
              fontSize: 16,
            }}
          >
            URL: {url}
          </Text>
        )}
        {text && (
          <Text
            style={{
              textAlign: "center",
              color: "#313639",
              fontSize: 16,
            }}
          >
            Text: {text}
          </Text>
        )}
      </View>
      <Button title="Open Host App" onPress={() => openHostApp("/")} />
      <Button title="Close" onPress={close} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
