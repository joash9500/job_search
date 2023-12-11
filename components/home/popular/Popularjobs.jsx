import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Touchable } from 'react-native'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = ({navigation}) => {

  const {data, isLoading, error} = useFetch('search', {
    query: 'react',
    num_pages: "1"
  })

  const [selectedJob, setSelectedJob] = useState(0)

  // ALTERNATIVE way for page navigation (different to NearbyJobs)
  const handleCardPress = (item) => {
    setSelectedJob(item.job_id)
    navigation.navigate('JobDetails', {
      job_id: item?.job_id
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                // pass in the handleCardPress function that opens the job with id
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs