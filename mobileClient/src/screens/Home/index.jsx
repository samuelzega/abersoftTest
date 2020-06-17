import React from 'react'
import { View, Text, Dimensions, StatusBar, StyleSheet } from 'react-native'
import styles from './style'
//component
import Logo from './components/Logo'

export default function Home() {
   return (
      <View style={styles.container}>
         <StatusBar backgroundColor="white" barStyle="dark-content" />
         <Logo />
         <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to the app</Text>
            <Text style={styles.description}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
               porta aliquet lacinia. Vivamus ultrices, sem quis varius laoreet,
               erat tellus porttitor tortor, non pharetra turpis tellus ac
               tellus. Maecenas at massa porta nulla vehicula rhoncus. Praesent
               lobortis ac justo nec consectetur. Nullam quis ipsum id purus
               dictum condimentum vitae at neque. In hac habitasse platea
               dictumst. In eget lorem quis mauris ornare ultricies in et
               ligula.
            </Text>
         </View>
      </View>
   )
}
