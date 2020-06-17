import React from 'react'
import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   StatusBar,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

export default function Register({ navigation }) {
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
         <TouchableOpacity
            style={{
               alignSelf: 'flex-start',
               paddingStart: 20,
               paddingTop: 10,
               height: Dimensions.get('screen').height * 0.1
            }}
            onPress={() => navigation.navigate('Welcome')}
         >
            <Ionicons name="md-arrow-back" size={24} color="white" />
         </TouchableOpacity>
         <ScrollView
            style={{
               width: Dimensions.get('screen').width
            }}
         >
            <KeyboardAvoidingView>
               <View
                  style={{
                     marginTop: Dimensions.get('screen').height * 0.38,
                     height: Dimensions.get('screen').height * 0.5,
                     flex: 1,
                     alignContent: 'center',
                     padding: 50,
                     width: '100%',
                     backgroundColor: '#fff',
                     borderTopStartRadius: 50,
                     borderTopEndRadius: 50
                  }}
               >
                  <Text
                     style={{
                        fontFamily: 'Roboto',
                        fontSize: 23,
                        marginBottom: 20
                     }}
                  >
                     Register New Account
                  </Text>
                  <TextInput
                     placeholder="Email"
                     placeholderTextColor="#000"
                     textContentType="emailAddress"
                     style={{
                        padding: 2,
                        borderBottomColor: '#000',
                        borderBottomWidth: 0.8,
                        width: '100%',
                        fontSize: 14,
                        marginTop: 10
                     }}
                  />
                  <TextInput
                     placeholder="Password"
                     placeholderTextColor="#000"
                     textContentType="password"
                     style={{
                        padding: 2,
                        borderBottomColor: '#000',
                        borderBottomWidth: 0.8,
                        width: '100%',
                        fontSize: 14,
                        marginTop: 10
                     }}
                  />
                  <TouchableOpacity
                     style={{
                        backgroundColor: '#3549FB',
                        width: '100%',
                        padding: 10,
                        alignItems: 'center',
                        borderRadius: 50,
                        marginTop: 50
                     }}
                  >
                     <Text style={{ color: '#fff' }}>Create Account</Text>
                  </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
         </ScrollView>
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
