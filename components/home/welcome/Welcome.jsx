import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'


import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const jobTypes = ["full-time", "part-time", "contractor"]

const Welcome = ({navigation}) => {
  // creating a state variable for active job types
  const [activeJobType, setActiveJobType] = useState("full-time")
  const [searchTerm, setSearchTerm] = useState("")

  // CONSIDER SETTING UP HANDLECLICK FUNCTION HERE - RATHER THAN USING AS A PROP INTO WELCOME...
  handleClick = () => {
    if (searchTerm) {
      console.log(searchTerm)
      navigation.navigate('JobSearch', {
        // send searchterm to the new page
        search_term: searchTerm
      })
    }}

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
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='what are you looking for?'
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* NOTE no nesting of FlatList in view container as FlatList already has a scrollable view */}

      {/* Update list with selected job type category */}
      <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)} 
              onPress={() => {
                setActiveJobType(item)
                // update navigation route
                navigation.navigate('')
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
      />

    </View>
  )
}

export default Welcome