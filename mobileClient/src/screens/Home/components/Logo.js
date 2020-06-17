import React from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'

const styles = StyleSheet.create({
   image: {
      width: Dimensions.get('screen').width,
      height: 230,
      marginTop: 100
   }
})

function SuccessLogo() {
   return (
      <Image
         style={styles.image}
         source={require('../../../../assets/image.png')}
      />
   )
}

export default SuccessLogo
