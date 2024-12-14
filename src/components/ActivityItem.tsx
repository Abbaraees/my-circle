import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Text, useTheme } from 'react-native-paper'

type ActivityItemPropsType = {
  title: string,
  date: string,
  image?: string,
  label?: string
}

const ActivityItem = ({title, date, image, label}: ActivityItemPropsType) => {
  const theme = useTheme()
  const colors = ['red', '#ee2aa2', 'slateblue', 'purple']
  const selectedColor = Math.floor(Math.random() * colors.length)
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {
        image 
        ? <Avatar.Image source={{uri: image}} />
        : label 
        ? <Avatar.Text label={label} style={{backgroundColor: colors[selectedColor]}}/>
        : <Avatar.Icon icon={'calendar'} />
      }
      <View style={{gap: 2}}>
        <Text variant='labelLarge'>{title}</Text>
        <Text style={{color: '#7E858C'}}>{date}</Text>
      </View>
    </View>
  )
}

export default ActivityItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 3,
    padding: 4,
    borderRadius: 8
  }
})