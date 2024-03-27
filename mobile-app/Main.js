import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./componenets/TabNavigator";
import Onboarding from "./componenets/Onboarding";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

import { useSelector, useDispatch } from "react-redux";
import { me } from "./store/auth";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function Main() {
  // const [user, setUser] = useState(true);
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state.auth?.me);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(me());
      }
    })();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator
          initialRouteName="onBoarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="onBoarding" component={Onboarding} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="sign-up" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
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
