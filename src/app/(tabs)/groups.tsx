import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import GroupItem from '@/src/components/GroupItem'
import FAB from '@/src/components/FAB'
import { router, useFocusEffect } from 'expo-router'
import { Group } from '@/src/types'
import groupsStore from '@/src/stores/GroupStore'


const groups = () => {
  const [groups, setGroups] = useState<Group[]>([])

  useFocusEffect(() => {(async () => {
    try {
      const data = await groupsStore.getAllGroups()
      setGroups(data)
    } catch (error) {
      
    }
  })()})

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Search groups' 
        mode='outlined'
        left={<TextInput.Icon icon='magnify' />}
        style={{height: 40, marginBottom: 10}}
      />
      {groups.length > 0
      ? <FlatList 
          data={groups}
          renderItem={({item}) => (
            <GroupItem 
              key={item.id} 
              title={item.name} 
              date={item.description} 
              image={require('@/assets/images/work-group.png')} 
              onPress={() => router.push(`/groups/${item.id}`)}
            />
            )}
            contentContainerStyle={{gap: 10}}
        />
      : <Text variant='labelLarge' style={{textAlign: 'center'}}>No groups yet! Create one to get started.</Text>
      }

      <FAB
        icon='plus'
        onPress={() => {router.push('/groups/create-group')}}
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