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
   backToWindow: {
      alignSelf: 'flex-start',
      paddingStart: 20,
      paddingTop: 10,
      height: screenSize.height * 0.1
   },
   scrollView: {
      width: screenSize.width
   },
   registerContainer: {
      marginTop: screenSize.height * 0.38,
      height: screenSize.height * 0.5,
      flex: 1,
      alignContent: 'center',
      padding: 50,
      width: '100%',
      backgroundColor: colors.white,
      borderTopStartRadius: 50,
      borderTopEndRadius: 50
   },
   title: {
      fontFamily: 'Roboto',
      fontSize: 23,
      marginBottom: 20
   },
   textInput: {
      padding: 2,
      borderBottomColor: colors.text,
      borderBottomWidth: 0.8,
      width: '100%',
      fontSize: 14,
      marginTop: 10
   },
   buttonRegister: {
      backgroundColor: colors.gradient1,
      width: '100%',
      padding: 10,
      alignItems: 'center',
      borderRadius: 50,
      marginTop: 50
   },
   btnText: { color: colors.white }
})

export default styles
