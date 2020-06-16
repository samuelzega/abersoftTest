import React from 'react'
import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   StatusBar,
   TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Modalize } from 'react-native-modalize'
export default function App() {
   return (
      <View
         style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#4ED2DA'
         }}
      >
         <StatusBar barStyle={'light-content'} backgroundColor="#3549FB" />
         <LinearGradient
            colors={['#3549FB', '#4ED2DA']}
            style={{
               position: 'absolute',
               left: 0,
               right: 0,
               top: 0,
               height: Dimensions.get('screen').height * 0.77
            }}
         />
         <View
            style={{
               marginTop: Dimensions.get('screen').height * 0.5,
               flex: 1,
               alignContent: 'center',
               justifyContent: 'center'
            }}
         >
            <TouchableOpacity
               style={{
                  backgroundColor: '#fff',
                  width: Dimensions.get('screen').width * 0.7,
                  paddingVertical: 5,
                  alignItems: 'center',
                  borderRadius: 100,
                  marginVertical: Dimensions.get('screen').height * 0.027
               }}
            >
               <Text style={{ color: '#000', fontFamily: 'Roboto' }}>
                  Register Account
               </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{
                  backgroundColor: '#fff',
                  width: Dimensions.get('screen').width * 0.7,
                  paddingVertical: 5,
                  alignItems: 'center',
                  borderRadius: 100,
                  marginVertical: Dimensions.get('screen').height * 0.027
               }}
            >
               <Text style={{ color: '#000', fontFamily: 'Roboto' }}>
                  Login
               </Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange'
   },
   gradient: {
      flex: 1
   }
})
