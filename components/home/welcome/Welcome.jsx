import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'


import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const jobTypes = ["full-time", "part-time", "contractor"]
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Welcome = () => {

  // creating a state variable for active job types
  const [activeJobType, setActiveJobType] = useState("full-time")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='what are you looking for?'
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}> 
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

export default Welcome