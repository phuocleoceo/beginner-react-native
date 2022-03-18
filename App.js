import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomContactBar from './components/Contact/CustomContactBar';
import CustomNavigationBar from './components/CustomNavigationBar';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './components/Contact/ContactList';
import NewContact from './components/Contact/NewContact';
import DetailScreen from './components/DetailScreen';
import HomeScreen from './components/HomeScreen';
import DogApp from './components/DogApp/DogApp';


const Stack = createNativeStackNavigator();

export default function App()
{
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DogApp" screenOptions={{
          header: CustomNavigationBar,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detail" }} />
          <Stack.Screen name="ContactList" component={ContactList} options={{ title: "Contact" }} />
          <Stack.Screen name="NewContact" component={NewContact} options={{ title: "New Contact" }} />
          <Stack.Screen name="DogApp" component={DogApp} options={{ title: "DogApp" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
