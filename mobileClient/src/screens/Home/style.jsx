import { StyleSheet, Dimensions } from 'react-native'
import { colors, screenSize } from '../../constant'
const styles = StyleSheet.create({
   container: {
      width: screenSize.width,
      height: screenSize.height,
      backgroundColor: colors.white
   },
   textContainer: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      fontSize: 25,
      color: colors.text,
      fontWeight: 'bold',
      fontFamily: 'Roboto'
   },
   description: {
      marginTop: screenSize.height * 0.05,
      fontSize: 15,
      textAlign: 'center',
      marginHorizontal: 12,
      fontFamily: 'Roboto'
   }
})

export default styles
