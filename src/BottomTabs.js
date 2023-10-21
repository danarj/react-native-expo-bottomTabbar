import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Products from "./screens/Products";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import Cart from "./screens/Cart";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";

const Tab = createBottomTabNavigator();
function BottomTabs(props) {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTab {...props} initialRouteName="Home" />}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{ tabBarLabel: "حسابى" }}
          name="MyAccount"
          component={Cart}
        />
        <Tab.Screen
          options={{ tabBarLabel: "الأحكام" }}
          name="Rules"
          component={Favourites}
        />
        <Tab.Screen
          options={{ tabBarLabel: "مسابقاتى" }}
          name="Competitions"
          component={Profile}
        />
        <Tab.Screen
          options={{ tabBarLabel: "الرئيسيه" }}
          name="Home"
          component={Products}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BottomTabs;
