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
      <Text>Health Icons</Text>
      <BloodBag color="red" opacity={0.3} width={24} height={24} />
      <HealthIconsProvider
        iconProps={{
          color: "#1E441E",
          strokeWidth: 1,
          width: "24px",
          height: "24px",
        }}
      >
        <Diabetes />
      </HealthIconsProvider>
    </SafeAreaView>
  );
}
