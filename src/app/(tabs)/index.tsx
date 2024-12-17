import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { Text } from 'react-native-paper';
import GroupCard from '@/src/components/GroupCard';
import ActivityItem from '@/src/components/ActivityItem';
import FAB from '@/src/components/FAB';
import { useCallback, useState } from 'react';
import { Group } from '@/src/types';
import { router, useFocusEffect } from 'expo-router';
import groupsStore from '@/src/stores/GroupStore';

export default function TabOneScreen() {
  const [groups, setGroups] = useState<Group[]>()

  useFocusEffect(() => {(async () => {
    try {
      const data = await groupsStore.getAllGroups()
      setGroups(data)
    } catch (error) {
      
    }
  })()})
  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={{fontWeight: 'bold', marginVertical: 8}}>MyCircle</Text>
      <Text variant='bodyLarge' style={{fontWeight: '600'}}>Hi, Raees! You’ve connected with 3 groups this week. Keep it up!</Text>
      <View style={{ height: 300}}>
        <FlatList 
          data={groups}
          horizontal
          contentContainerStyle={{marginVertical: 20, height: 300,  gap: 8}}
          renderItem={({item}) => (
            <GroupCard 
            key={item.id}
            title={item.name} 
            subtitle="10 members, 6 recent activities" 
            cover={require("@/assets/images/family.png")}
            onPress={() => {router.push(`/groups/${item.id}`)}}
          />
          )}
        />
      {/* <Text variant='headlineSmall' style={{fontWeight: 'bold', marginVertical: 10}}>Recent Activities</Text>
      <ScrollView contentContainerStyle={{marginTop: 10, gap: 10}}>
        <ActivityItem 
          title='Dinner with Abubakar Mahmud' 
          date='Friday 28, Dec 2024'
        /> 

      </ScrollView> */}

      
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'flex-start',
    paddingHorizontal: 8
  }

});
