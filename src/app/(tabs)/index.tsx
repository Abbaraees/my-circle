import { ScrollView, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { Text } from 'react-native-paper';
import GroupCard from '@/src/components/GroupCard';
import ActivityItem from '@/src/components/ActivityItem';
import FAB from '@/src/components/FAB';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={{fontWeight: 'bold', marginVertical: 8}}>MyCircle</Text>
      <Text variant='bodyLarge' style={{fontWeight: '600'}}>Hi, Raees! You’ve connected with 3 groups this week. Keep it up!</Text>
      <View style={{width: '100%', height: 300}}>
        <ScrollView 
          horizontal
          contentContainerStyle={{marginVertical: 20, height: 300,  gap: 8}}>
          <GroupCard 
            title="Family" 
            subtitle="10 members, 6 recent activities" 
            cover={require("@/assets/images/family.png")}
            onPress={() => {}}
          />
          <GroupCard 
            title="Friends" 
            subtitle="5 members, 3 recent activities" 
            cover={require("@/assets/images/friends.png")}
            onPress={() => {}}
          />

        </ScrollView>
      </View>
      <Text variant='headlineSmall' style={{fontWeight: 'bold', marginVertical: 10}}>Recent Activities</Text>
      <ScrollView contentContainerStyle={{marginTop: 10, gap: 10}}>
        <ActivityItem 
          title='Dinner with Abubakar Mahmud' 
          date='Friday 28, Dec 2024'
        /> 

      </ScrollView>
      <FAB 
        icon='plus'
        onPress={() => {}}
      />
      
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