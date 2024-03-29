import styles from './nearbyjobs.style'
import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
 } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants'
import NearbyJobsCard from '../../common/cards/nearby/NearbyJobCard'
import  useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search',{
    query : 'React developer',
    num_pages : 1,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>{ 
        isLoading ? 
          <ActivityIndicator/> : error ?
          <Text>
            Something went wrong
          </Text>:(
            data?.map((job) =>(
              <NearbyJobsCard job={job} key={job?.job_id} handleNavigate={
                ()=>router.push(`/job-details/${job?.job_id}`)
              }/>
            ))
          )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs