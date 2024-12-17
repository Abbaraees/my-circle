import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { Stack, router } from 'expo-router'
import { Button, Icon, TextInput } from 'react-native-paper'
import AddMemberUIStore from '@/src/stores/AddMemberUIStore'
import { observer } from 'mobx-react'

const AddMember = () => {
  const { id } = useLocalSearchParams()
  const group_id = typeof id == 'string' ? parseInt(id) : parseInt(id[0])
  const [addMemberUIStore, _] = useState(new AddMemberUIStore(group_id))

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Add Member'}} />
      <View style={styles.inputs}>
        <TextInput
          label='Full Name'
          placeholder="Enter member's name"
          mode='outlined'
          value={addMemberUIStore.name}
          onChangeText={addMemberUIStore.setName}
          error={addMemberUIStore.errors['name']}
        />
        <TextInput
          label='Nickname'
          placeholder="Enter member's nickname"
          mode='outlined'
          value={addMemberUIStore.nickname}
          onChangeText={addMemberUIStore.setNickname}
        />
        <TextInput
          label='Phone Number'
          placeholder="Enter phone number"
          mode='outlined'
          value={addMemberUIStore.phone}
          onChangeText={addMemberUIStore.setPhone}
          error={addMemberUIStore.errors['phone']}
        />
        <TextInput
          label='Address'
          placeholder="Enter address"
          mode='outlined'
          value={addMemberUIStore.address}
          onChangeText={addMemberUIStore.setAddress}
        />
        <TextInput
          label='Notes'
          placeholder="Enter any details or notes about this person"
          mode='outlined'
          numberOfLines={10}
          value={addMemberUIStore.notes}
          onChangeText={addMemberUIStore.setNotes}
          contentStyle={{height: 100}}
          multiline
        />
        <Button mode='contained' onPress={addMemberUIStore.addMember}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon size={24} source={"plus"} color='#fff' />
            <Text style={{color: 'white'}}>Add Member</Text>
          </View>
        </Button>
        <Button mode='outlined' onPress={router.back}>
          Cancel
        </Button>

      </View>
      
    </View>
  )
}

export default observer(AddMember)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  inputs: {
    gap: 10,
    marginTop: 20
  },
})