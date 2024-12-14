import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ActivityItem from '@/src/components/ActivityItem'
import FAB from '@/src/components/FAB'

const activities = () => {
  const data = []
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Activities'}} />
      <FlatList
        data={Array(10).fill(NaN)}
        renderItem={({item}) => (<ActivityItem 
            title='Dinner with Abubakar Mahmud' 
            date='Friday 28, Dec 2024'
          /> )
        }
        contentContainerStyle={{gap: 10, marginTop: 10, paddingBottom: 20}}
      />

      <FAB
        icon='calendar-plus'
        onPress={() => {}}
      />

    </View>
  )
}

export default activities

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 8
  }
})