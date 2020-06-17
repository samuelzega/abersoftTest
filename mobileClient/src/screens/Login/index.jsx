import React, { useState } from 'react'
import {
   StyleSheet,
   Text,
   View,
   StatusBar,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './style'
import { baseUrl, colors } from '../../constant'

export default function Login({ navigation: { navigate } }) {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const login = () => {
      fetch(`${baseUrl}/users/login`, {
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
            if (!data.message) {
               setEmail('')
               setPassword('')
               navigate('Home')
            } else {
               console.log(data.message)
            }
            console.log(data)
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
                  <Text style={styles.title}>Login</Text>
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
                  <TouchableOpacity style={styles.buttonLogin} onPress={login}>
                     <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
         </ScrollView>
      </View>
   )
}
