import React, { useEffect } from 'react';
//splash screen for transitions
import SplashScreen from 'react-native-splash-screen';
//other screens
import ItemScreen from './components/temp/item';
import HomeScreen from './app/homeScreen';
import DetailScreen from './app/detailScreen';
import JobDetails from './app/job-details/[id]';
import JobSearch from './app/search/[id]'

//for navigation/routing in react-native app
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//templates from tutorial
import { COLORS, icons, images} from './constants'
import { ScreenHeaderBtn } from './components'

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
        <Stack.Screen name="JobDetails" component={JobDetails}
          options={({navigation}) => ({
            headerStyle: { backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => navigation.goBack()}
                />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"
              />
            ),
            headerTitle: ''
          })
        }
        />
        <Stack.Screen name='JobSearch' component={JobSearch}
          options={({navigation}) => ({
            headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => navigation.goBack()}
                        />
                    ),
                    headerTitle: "",
            })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
