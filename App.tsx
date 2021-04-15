import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
      backgroundColor="rgb(86, 227, 251)"
      barStyle='light-content'
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}
