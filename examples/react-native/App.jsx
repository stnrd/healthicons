import { SafeAreaView, Text } from "react-native";
import {
  BloodBag,
  Diabetes,
  HealthIconsProvider,
} from "healthicons-react-native";

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    
    }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 24 }}>Health Icons</Text>
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
    </SafeAreaView>
  );
}
