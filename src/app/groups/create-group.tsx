import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import createGroupStore from '@/src/stores/CreateGroupUIStore'
import { observer } from 'mobx-react'

const CreateGroup = () => {
  return (
    <View style={styles.container}>
      <View style={{gap: 15}}>
        <TextInput 
          label="Group Name"
          placeholder='Enter group name'
          mode='outlined'
          value={createGroupStore.name}
          onChangeText={createGroupStore.setName}          
        />
        <TextInput 
          label="Description"
          placeholder='Optional: add details about this group '
          mode='outlined'
          numberOfLines={10}
          value={createGroupStore.description}
          onChangeText={createGroupStore.setDescription}
          contentStyle={{height: 100}}
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
        <Button mode='contained' onPress={createGroupStore.submit}>Create Group</Button>
      </View>
    </View>
  )
}

export default observer(CreateGroup)

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