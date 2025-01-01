import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Text, Button, Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper'
import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router'
import membersStore from '../../stores/MembersStore'
import { Member } from '@/src/types'

const ViewMemberDetails = () => {
  const { memberId: id } = useLocalSearchParams()
  const memberId = typeof id === 'string' ? parseInt(id) : parseInt(id[0])
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useFocusEffect(() => {
    const fetchMemberDetails = async () => {
      const { data, error } = await membersStore.getMember(memberId)
      if (data) {
        setMember(data)
      } else {
        Alert.alert("Error", "Failed to load member details")
      }
      setLoading(false)
    }

    fetchMemberDetails()
  })

  if (loading) {
    return <ActivityIndicator animating={true} style={styles.loading} />
  }

  if (!member) {
    return <Text>No member found</Text>
  }

  const handleEdit = () => {
    router.push(`/groups/add-member?memberId=${memberId}&id=0`)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "Member's Information"}}/>
      <Card>
        <Card.Content>
          <Title>{member.name}</Title>
          <Paragraph>Nickname: {member.nickname}</Paragraph>
          <Paragraph>Phone: {member.phone}</Paragraph>
          <Paragraph>Address: {member.address}</Paragraph>
          <Paragraph>Notes: {member.notes}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleEdit}>Edit</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default ViewMemberDetails