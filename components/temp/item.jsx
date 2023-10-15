import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

// search item component page (move to another file later)
function ItemScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Item Screen </Text>
        <TouchableOpacity
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }

  export default ItemScreen