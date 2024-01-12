import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { COLORS , icons , images , SIZES} from '../../../constants';

const jobTypes = ["Full Time", "Part Time", "Contractor" , "Freelance" ];

const Welcome = () => {
  const router = useRouter();
  
  const [searchText, setSearchText] = useState("")
  const [activeTabType, setActiveTabType] = useState(jobTypes[0])
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hai  
        </Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            placeholder = "what are you looking for?"
            value = {searchText}
            onChange={(text) => {
              setSearchText(text.nativeEvent.text)
            }}
          />
        </View>
        <TouchableOpacity 
          style={styles.searchBtn}
          onPress={
            () => {
              if(searchText != ""){
                router.push(`/search/${searchText}`);
              }
            }
          }
          >
          <Image 
            source={icons.search}
            resizeMode="cover"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem = { ({item}) => (
            <TouchableOpacity
              style={styles.tab(activeTabType,item)}
              onPress={()=>{
                setActiveTabType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeTabType , item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome