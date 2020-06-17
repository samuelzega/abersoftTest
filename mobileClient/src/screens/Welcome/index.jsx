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
import styles from './style'

export default function Welcome({ navigation }) {
   return (
      <View style={styles.container}>
         <StatusBar barStyle={'light-content'} backgroundColor="#3549FB" />
         <LinearGradient
            colors={['#3549FB', '#4ED2DA']}
            style={styles.gradient}
         />
         <View style={styles.buttonContainer}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => navigation.navigate('Register')}
            >
               <Text style={styles.buttonText}>Register Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => navigation.navigate('Login')}
            >
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
