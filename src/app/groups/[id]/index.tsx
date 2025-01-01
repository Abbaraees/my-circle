import { FlatList, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Stack, router, useFocusEffect, useLocalSearchParams } from 'expo-router'
import ActivityItem from '@/src/components/ActivityItem'
import FAB from '@/src/components/FAB'
import { Member } from '@/src/types'
import membersStore from '@/src/stores/MembersStore'

const index = () => {
  const [members, setMembers] = useState<Member[]>([])
  const { id } = useLocalSearchParams()
  const idInt = typeof id == 'string' ? parseInt(id) : parseInt(id[0])

  useFocusEffect(useCallback(() => {(async () => {
    try {
      const data = await membersStore.getMembersByGroup(idInt)
      setMembers(data)
    } catch (error) {
      ToastAndroid.show("Failed to fetch members", ToastAndroid.SHORT)
    }
  })()}, []))

  const renderMember = (member: Member) => {
    const [fname, lname] = member.name.split(' ')

    return (
      <Pressable onPress={() => router.push(`/groups/view-member-details?memberId=${member.id}`)}>
        <ActivityItem 
          title={member.name} 
          date={member.nickname}
          label={fname[0] + lname[0]}
        />
      </Pressable>
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
        onPress={() => { router.navigate('/groups/add-member?id=1')}}
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