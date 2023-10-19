import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./src/BottomTabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
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
