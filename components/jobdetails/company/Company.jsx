import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../constants'
const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{uri: (checkImageURL(companyLogo) ? companyLogo : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png')}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {companyName}
        </Text>
        <View styles={styles.locationBox}>
            <Image 
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />
        </View>
        
        <Text style={styles.locationText}>
              {Location}
            </Text>
      </View>
    </View>
  )
}

export default Company