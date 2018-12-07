import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ToastMachine from 'react-native-toast-machine'

import styles from './styles'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Toast Machine</Text>

        <ToastMachine />
      </View>
    )
  }
}

export default App
