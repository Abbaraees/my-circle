import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

type GroupItemPropsType = {
  title: string,
  date: string,
  image?: any,
  label?: string,
  onPress?: () => void
}

const GroupItem = ({title, date, image, onPress}: GroupItemPropsType) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image 
        source={typeof image == 'string' ? {uri: image} : image}
        style={styles.image}
      />
      <View style={{gap: 4, marginLeft: 10}}>
        <Text variant='headlineSmall'>{title}</Text>
        <Text variant='bodyLarge'>Last Interaction: {date}</Text>
      </View>
    </Pressable>
  )
}

export default GroupItem

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
})