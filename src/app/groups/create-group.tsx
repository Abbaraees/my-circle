import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CreateGroup = () => {
  return (
    <View style={styles.container}>
      <View style={{gap: 15}}>
        <TextInput 
          label="Group Name"
          placeholder='Enter group name'
          mode='outlined'
        />
        <TextInput 
          label="Description"
          placeholder='Optional: add details about this group '
          mode='outlined'
          numberOfLines={10}
          multiline
        />
        <View style={styles.imagePlaceholder}>
          <Pressable>
            <MaterialCommunityIcons 
              name='image-plus' 
              color={'#aaa'} 
              size={50}
              style={{width: 50}}
            />
          </Pressable>
        </View>
        <Button mode='contained' onPress={() => {}}>Create Group</Button>
      </View>
    </View>
  )
}

export default CreateGroup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 8,
    borderWidth: 1
  }
})