import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native"
import { Nearbyjobs, Popularjobs, Welcome } from '../components'
import { COLORS, SIZES} from '../constants'
import { useState } from "react"
// home screen page
function HomeScreen({navigation}): JSX.Element {

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:1, padding: SIZES.medium}}>
              <Welcome 
                navigation = {navigation} 
              />
              <Popularjobs navigation = {navigation}/>
              <Nearbyjobs navigation = {navigation}/>
            </View>
          <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
              <Text>Details</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }

  export default HomeScreen