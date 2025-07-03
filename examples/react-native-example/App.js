import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  BloodBag,
  Diabetes,
  HealthIconsProvider,
} from "healthicons-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 24 }}>
        Health Icons
      </Text>
      <BloodBag color="red" opacity={0.3} width={24} height={24} />
      <HealthIconsProvider
        iconProps={{
          color: "#1E441E",
          strokeWidth: 1,
          width: "240px",
          height: "240px",
        }}
      >
        <Diabetes />
      </HealthIconsProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
