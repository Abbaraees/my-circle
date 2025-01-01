import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SimpleLineIcons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Stack screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen 
        name='create-group' 
        options={{headerTitle: 'Create a New Group'}} 
      />
      <Stack.Screen 
        name='[id]' 
        options={{
          headerShown: false
        }}
        
      />
    </Stack>
  )
}

export default _layout