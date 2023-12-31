import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import styles from "./nearbyjobs.style"
import {COLORS} from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = ({navigation}) => {

  const {data, isLoading, error} = useFetch('search', {   
    query: 'react',
    num_pages: "1"
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <NearbyJobCard
                job={item}
                key={`nearby-job-${item?.job_id}`}
                handleNavigate={() => navigation.navigate('JobDetails', {
                  job_id: item?.job_id
                })}
              />
            )}
          />
        )}
      </View>
     
    </View>
  )
}

export default Nearbyjobs