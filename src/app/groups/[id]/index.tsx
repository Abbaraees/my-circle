import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ActivityItem from '@/src/components/ActivityItem'
import FAB from '@/src/components/FAB'

const index = () => {
  const members = [
    {'name': 'Muhammad Lawal', nickname: '@raees', image: ''},
    {'name': 'Umar Salisu', nickname: '@salkalee', image: ''},
    {'name': 'Abubakar Yusuf', nickname: '@abuyusuf', image: ''},
    {'name': 'Ibrahim Mustapha', nickname: '@inrahim', image: ''},
    {'name': 'Abdulmumini Bashir', nickname: '@abba', image: ''}
  ]
  members[0].name.split(' ')[0]
  const renderMember = (member) => {
    const [fname, lname] = member.name.split(' ')

    return (
      <ActivityItem 
        title={member.name} 
        date={member.nickname}
        label={fname[0] + lname[0]}
  
      />
    )
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Members'}} />
      <FlatList
        data={members}
        renderItem={({item}) => renderMember(item)}
        contentContainerStyle={{gap: 10, marginTop: 10, paddingBottom: 20}}
      />
      <FAB
        onPress={() => {}}
        icon='account-plus'
      />
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 8
  }
})