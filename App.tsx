import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//splash screen for transitions
import SplashScreen from 'react-native-splash-screen';
//for navigation/routing in react-native app
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//templates from tutorial
import { COLORS, icons, images, SIZES} from './constants'
import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from './components'
import ItemScreen from './components/temp/item';

// home screen page
function HomeScreen({navigation}): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <View style={{flex:1, padding: SIZES.medium}}>
          <Welcome 
            navigation = {navigation}
            />
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
            <Text>Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// details screen page
function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Deposit"
        onPress={() => navigation.navigate('Deposit')}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go Back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

// for navigation. contains two properties: screen and navigator 
const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="ItemScreen" component={ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  DMBold: {
    fontFamily: "DMSans-Bold"
  },
  DMMedium: {
    fontFamily: "DMSans-Medium"
  },
  DMRegular: {     
    fontFamily: "DMSans-Regular"
  }
});

export default App;
