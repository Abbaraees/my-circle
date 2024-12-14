import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput, Text } from 'react-native-paper'
import GroupItem from '@/src/components/GroupItem'
import FAB from '@/src/components/FAB'

const groups = () => {
  const groups = [
    {name: 'Family', lastInteraction: '1 day ago', image: require('@/assets/images/family-group.jpg')},
    {name: 'Friends', lastInteraction: '4 days ago', image: require('@/assets/images/friends-group.jpg')},
    {name: 'Work', lastInteraction: '2 days ago', image: require('@/assets/images/work-group.png')}
  ]
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
          renderItem={({item, index}) => (
            <GroupItem 
              key={index} 
              title={item.name} 
              date={item.lastInteraction} 
              image={item.image} 
            />
            )}
            contentContainerStyle={{gap: 15}}
        />
      : <Text variant='labelLarge' style={{textAlign: 'center'}}>No groups yet! Create one to get started.</Text>
      }

      <FAB
        icon='plus'
        onPress={() => {}}
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