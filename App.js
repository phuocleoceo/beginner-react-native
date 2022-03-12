import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './components/DetailScreen';
import HomeScreen from './components/HomeScreen';
import * as React from 'react';


const Stack = createNativeStackNavigator();

export default function App()
{
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
