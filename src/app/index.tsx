import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper'
import { router } from 'expo-router'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} variant='headlineMedium'>My Circle</Text>
      <View style={styles.onboarding}>
        <Image style={styles.onboardingImage} source={require("@/assets/images/onboarding-image.jpg")} />
        <Text style={styles.onboardingText} variant='headlineSmall'>Welcome to MyCircle</Text>
        <Text style={styles.onboardingText} variant='bodyMedium'>Stay connected with your people effortlessly. MyCircle helps you organize your contacts, track interactions, and stay connected with ease.</Text>
        <Button style={{marginTop: 40}} mode='contained' onPress={() => {router.replace('/(tabs)')}}>Get Started</Button>
      </View>

    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8
  },
  heading: {
    textAlign: 'center'
  },
  onboarding: {
    marginVertical: 'auto',
    gap: 12

  },
  onboardingImage: {
    width: 300,
    height: 300,
    marginHorizontal: 'auto',
    borderRadius: 10
  },
  onboardingText: {
    textAlign: 'center'
  }
})