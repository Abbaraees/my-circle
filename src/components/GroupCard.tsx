import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

type GroupCardPropTypes = {
  title: string,
  subtitle: string,
  cover: ImageSourcePropType,
  onPress: () => void
}

const GroupCard = ({title, subtitle, cover, onPress}: GroupCardPropTypes) => {
  return (
    <Card onPress={onPress}>
      <Card.Cover source={cover} />
      <Card.Title title={title} subtitle={subtitle} subtitleStyle={{color: '#7E858C'}} />
    </Card>
  )
}

export default GroupCard

const styles = StyleSheet.create({})