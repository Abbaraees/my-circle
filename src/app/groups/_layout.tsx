import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name='create-group' 
        options={{headerTitle: 'Create a New Group', headerTitleAlign: 'center'}} />
    </Stack>
  )
}

export default _layout