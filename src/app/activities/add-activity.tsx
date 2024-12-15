import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { Stack, router } from 'expo-router'
import { Button, Icon, TextInput, Text, IconButton } from 'react-native-paper'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'


const AddActivity = () => {
  const { groupId } = useLocalSearchParams()
  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: 'date',
      onChange
    })
  }

  const onChange = (event, selectedDate) => {
    setDate(selectedDate)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Add Activity'}} />
      <View style={styles.inputs}>
        <TextInput
          label='Activity Title'
          placeholder="e.g Launch with Ibrahim"
          mode='outlined'
        />
        <Pressable onPress={showDatePicker}>
          <TextInput
            label='Date'
            value={date.toDateString()}
            mode='outlined'
            editable={false}
          />
        </Pressable>
        
        <TextInput
          label='Description'
          placeholder="Enter any details or notes about this activity"
          mode='outlined'
          numberOfLines={10}
          contentStyle={{height: 100}}
          multiline
        />
      </View>
      <View style={styles.association}>
        <Text variant='labelLarge' style={{fontSize: 18, marginVertical: 10}}>Group/Contact Association</Text>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{alignItems: 'center'}}>
            <IconButton icon={'account'} size={100} mode='contained' onPress={() => router.push('/activities/add-participant?category=Contact')}/>
            <Text style={{fontSize: 18}}>Contact</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <IconButton icon={'account-group'} size={100} mode='contained' onPress={() => router.push('/activities/add-participant?category=Group')}/>
            <Text style={{fontSize: 18}}>Group</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button mode='contained'>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon size={24} source={"plus"} color='#fff' />
            <Text style={{color: 'white'}}>Add Activity</Text>
          </View>
        </Button>
        <Button onPress={router.back} mode='outlined'>Cancel</Button>
      </View>
      
    </View>
  )
}

export default AddActivity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  inputs: {
    gap: 10,
    marginTop: 20
  },
  association: {
    marginTop: 20
  },
  buttons: {
    marginTop: 20,
    gap: 10
  }
})