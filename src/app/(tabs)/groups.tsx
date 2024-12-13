import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const groups = () => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Search groups' 
        mode='outlined'
        left={<TextInput.Icon icon='magnify' />}
        style={{height: 40}}
        
        
      />
    </View>
  )
}

export default groups

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  }
})