import { makeAutoObservable } from "mobx"
import { Alert } from "react-native"
import membersStore from "./MembersStore"
import { router } from "expo-router"

class AddMemberUIStore {
  name = ''
  nickname = ''
  phone = ''
  address = ''
  notes = ''
  group_id: number
  errors = {name: false, phone: false}

  constructor(group_id: number) {
    this.group_id = group_id
    makeAutoObservable(this)
  }

  setName = (name: string) => this.name = name
  setNickname = (nickname: string) => this.nickname = nickname
  setPhone = (phone: string) => this.phone = phone
  setAddress = (address: string) => this.address = address
  setNotes = (notes: string) => this.notes = notes
  resetErrors = () => this.errors = {name: false, phone: false}
  toggleError = (field: 'name' | 'phone') => this.errors[field] = true

  validateFields = () => {
    let noError = true

    this.resetErrors()
    if (!this.name) {
      this.toggleError('name')
      noError = true
    }
    if (!this.phone) {
      this.toggleError('phone')
      noError = true
    }

    return noError
  }

  addMember = async () => {
    const noError = this.validateFields()

    if (noError) {
      const result = await membersStore.addNewMember(this.group_id, this.name, this.nickname, this.phone, this.notes, this.address)
      if (result == 'OK') {
        router.back()
        return 
      }
      Alert.alert("Error", "Failed to add new member")
      return 
    }

    Alert.alert("Error", "Name and Phone are required")
  }
}

export default AddMemberUIStore