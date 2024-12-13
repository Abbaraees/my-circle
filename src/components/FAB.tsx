import { StyleSheet, Text, View } from 'react-native'
import { FAB as PaperFAB } from 'react-native-paper'

type FABPropsType = {
  icon: string,
  onPress: () => void
}

const FAB = ({ icon, onPress }: FABPropsType) => {
  return (
    <PaperFAB 
      icon={icon}
      onPress={onPress}
      style={styles.fab}
    />
  )
}

export default FAB

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})