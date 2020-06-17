import React, { useState } from 'react'
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
import styles from './style'
import { colors, baseUrl } from '../../constant'

export default function Register({ navigation: { navigate } }) {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const register = () => {
      console.log(email, password)
      fetch(`${baseUrl}/users/`, {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: email,
            password: password
         })
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.errors) {
               console.log(data.errors.message)
            } else {
               setEmail('')
               setPassword('')
               navigate('Welcome')
            }
         })
         .catch((error) => {
            console.error('Error:', error)
         })
   }
   return (
      <View style={styles.container}>
         <StatusBar barStyle={'light-content'} backgroundColor="#3549FB" />
         <LinearGradient
            colors={[colors.gradient1, colors.gradient2]}
            style={styles.gradient}
         />
         <TouchableOpacity
            style={styles.backToWindow}
            onPress={() => navigate('Welcome')}
         >
            <Ionicons name="md-arrow-back" size={24} color="white" />
         </TouchableOpacity>
         <ScrollView style={styles.scrollView}>
            <KeyboardAvoidingView>
               <View style={styles.registerContainer}>
                  <Text style={styles.title}>Register New Account</Text>
                  <TextInput
                     placeholder="Email"
                     value={email}
                     placeholderTextColor="#000"
                     textContentType="emailAddress"
                     style={styles.textInput}
                     onChangeText={(text) => setEmail(text)}
                  />
                  <TextInput
                     placeholder="Password"
                     value={password}
                     placeholderTextColor="#000"
                     textContentType="password"
                     style={styles.textInput}
                     onChangeText={(text) => setPassword(text)}
                  />
                  <TouchableOpacity
                     style={styles.buttonRegister}
                     onPress={register}
                  >
                     <Text style={styles.btnText}>Create Account</Text>
                  </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
         </ScrollView>
      </View>
   )
}
