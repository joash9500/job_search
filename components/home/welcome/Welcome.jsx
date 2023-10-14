import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Flatlist } from 'react-native'


import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const jobTypes = ["full-time", "part-time", "contractor"]

const Welcome = () => {

  // creating a state variable for active job types
  const [activeJobType, setActiveJobType] = useState('full-time')

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

      {/* <View style={styles.tabsContainer}> 
        <Flatlist 
          data={jobTypes}
          renderItem={(item) => {
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          }}
        />
      </View> */}
    </View>
  )
}

export default Welcome