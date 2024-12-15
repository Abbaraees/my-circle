import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { Stack } from 'expo-router'
import { Button, Icon, TextInput } from 'react-native-paper'

const AddMember = () => {
  const { id } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Add Member'}} />
      <View style={styles.inputs}>
        <TextInput
          label='Full Name'
          placeholder="Enter member's name"
          mode='outlined'
        />
        <TextInput
          label='Nickname'
          placeholder="Enter member's nickname"
          mode='outlined'
        />
        <TextInput
          label='Phone Number'
          placeholder="Enter phone number"
          mode='outlined'
        />
        <TextInput
          label='Address'
          placeholder="Enter address"
          mode='outlined'
        />
        <TextInput
          label='Notes'
          placeholder="Enter any details or notes about this person"
          mode='outlined'
          numberOfLines={10}
          multiline
        />
        <Button mode='contained'>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon size={24} source={"plus"} color='#fff' />
            <Text style={{color: 'white'}}>Add Member</Text>
          </View>
        </Button>
        <Button mode='outlined'>
          Cancel
        </Button>

      </View>
      
    </View>
  )
}

export default AddMember

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  inputs: {
    gap: 10,
    marginTop: 20
  },
})