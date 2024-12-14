import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { withLayoutContext } from 'expo-router'
import { View, Text } from 'react-native'


const TopTab = withLayoutContext(createMaterialTopTabNavigator().Navigator)

const _layout = () => {
  return (
    <TopTab />
  )
}

export default _layout