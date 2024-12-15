import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import { Avatar, Button, Checkbox, TextInput } from 'react-native-paper'

const AddParticipant = () => {
  const { category } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: `Add ${category}`}} />
      <TextInput 
        placeholder='Search contacts...' 
        mode='outlined'
        left={<TextInput.Icon icon='magnify' />}
        style={{height: 40, marginBottom: 10}}
      />
      <FlatList
        data={Array(10).fill(NaN)}
        renderItem={() => (
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}> 
            <Avatar.Text label='A' />
            <View>
              <Text>Muhammad Lawal</Text>
              <Text>Friend</Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
              <Checkbox.Item
                label=''
                status='checked' 
                style={{marginLeft: 'auto'}}
              />
            </View>

          </View>
        )}
        contentContainerStyle={{gap: 10, paddingBottom: 10}}
      />
      <Button mode='outlined' style={{marginTop: 10}} onPress={router.back}>
        Add to Activity
      </Button>

    </View>
  )
}

export default AddParticipant

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    }
})