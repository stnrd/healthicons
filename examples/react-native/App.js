import { View } from "react-native";
import { Bloodbag, DiabetesPeople } from "healthicons-react-native/dist/filled";
import { HealthIconsProvider } from "healthicons-react/dist/HealthIconsContext";

export default function App() {
  return (
    <View>
      <BloodBag fill="red" height={36} width={36} />
      <HealthIconsProvider
        iconProps={{
          color: "#1E441E",
          strokeWidth: 1,
          width: "2em",
          height: "2em",
        }}
      >
        <DiabetesPeople fill="currentColor" />
      </HealthIconsProvider>
    </View>
  );
}
