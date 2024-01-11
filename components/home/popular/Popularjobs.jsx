import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
 } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobsCard from '../../common/cards/popular/PopularJobCard'
import  useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search',{
    query : 'React developer',
    num_pages : 1,
  });
  const [selectedJob, setSelectedJob] = React.useState(null);
  const handleCardPress = (item) =>{
    router.push(`/job-details/${item?.job_id}`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>{ 
        isLoading ? 
          <ActivityIndicator/> : error ?
          <Text>
            Something went wrong
          </Text>:
          <FlatList
            data = {data}
            renderItem={({item})=>(
              <PopularJobsCard item={item}  selectedJob
              handleCardPress={handleCardPress}/>
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{
              columnGap : SIZES.medium
            }}
            horizontal
            showsHorizontalScrollIndicator = {false}
          />
        }
      </View>
    </View>
  )
}

export default Popularjobs