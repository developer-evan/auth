import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
// import { firebase } from "./config";
import Login from "./src/Login";
import Register from "./src/Register";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import {firebase} from './config'
// import { Suspense } from "react";

const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      // <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}

            // options={{
            //   headerTitle: (props) => <Header {...props} name="Login" />,
            //   headerStyle: {
            //     height: 150,
            //     borderBottomLeftRadius: 50,
            //     borderBottomRightRadius: 50,
            //     backgroundColor: "#f4511e",
            //     shadowColor: "#000",
            //     elevation: 25,
            //   },
            // }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          
            // options={{
            //   headerTitle: (props) => <Header {...props} name="Register" />,
            //   headerStyle: {
            //     height: 150,
            //     borderBottomLeftRadius: 50,
            //     borderBottomRightRadius: 50,
            //     backgroundColor: "#f4511e",
            //     shadowColor: "#000",
            //     elevation: 25,
            //   },
            // }}
          />
        </Stack.Navigator>
      // {/* </NavigationContainer> */}
    );
  }
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitle: (props) => <Header {...props} name="Dashboard" />,

            headerStyle: {
              height: 150,

              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#f4511e",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default ()=> {
  return(
    <NavigationContainer>
      <App/>
      </NavigationContainer>
  )
}