import { StyleSheet } from 'react-native'
import { colors, screenSize } from '../../constant'
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.gradient2
   },
   gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: screenSize.height * 0.77
   },
   buttonContainer: {
      marginTop: screenSize.height * 0.5,
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
   },
   button: {
      backgroundColor: colors.button,
      width: screenSize.width * 0.7,
      paddingVertical: 10,
      alignItems: 'center',
      borderRadius: 100,
      marginVertical: screenSize.height * 0.027
   },
   buttonText: { color: colors.text, fontFamily: 'Roboto', fontSize: 16.2 }
})

export default styles
