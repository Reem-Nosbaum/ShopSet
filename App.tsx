import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux'
import Home from './src/screens/home';
import SavedSets from './src/screens/SavedSets';
import Outfit from './src/screens/outfit';
import { store } from './src/store/store'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Outfit" component={Outfit} />
        <Stack.Screen name="SavedSets" component={SavedSets} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
