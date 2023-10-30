import React, { useEffect } from 'react';
//splash screen for transitions
import SplashScreen from 'react-native-splash-screen';
//other screens
import ItemScreen from './components/temp/item';
import HomeScreen from './screens/homeScreen';
import DetailScreen from './screens/detailScreen';

//for navigation/routing in react-native app
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//templates from tutorial
import { COLORS, icons, images} from './constants'
import { ScreenHeaderBtn } from './components'

// configure screens here
const screens = {
  Home: {
    screen: HomeScreen,
  }
}

// for navigation. contains two properties: screen and navigator 
const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // should only have ONE navigation container in your app, at the root. best not to nest multiple nav containers.
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
            ),
            headerTitle: "" 
          }}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
        <Stack.Screen name="ItemScreen" component={ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
