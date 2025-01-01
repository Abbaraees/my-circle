import { makeAutoObservable } from "mobx"
import { Alert } from "react-native"
import membersStore from "./MembersStore"
import { router } from "expo-router"
import { Member } from "../types"

class AddMemberUIStore {
  name = ''
  nickname = ''
  phone = ''
  address = ''
  notes = ''
  group_id: number
  errors = {name: false, phone: false}
  member_id?: number
  isUpdate = false

  constructor(group_id: number, member_id?: number) {
    this.group_id = group_id
    if (member_id) {
      this.member_id = member_id
      this.isUpdate = true
      this.loadMemberDetails(member_id)
      console.warn("Update")
    } else {
      this.member_id = undefined
    }
    makeAutoObservable(this)
  }

  async loadMemberDetails(member_id: number) {
    const { data, error } = await membersStore.getMember(member_id)
    if (data) {
      this.name = data.name
      this.nickname = data.nickname
      this.phone = data.phone
      this.address = data.address
      this.notes = data.notes
    } else {
      Alert.alert("Error", "Failed to load member details")
    }
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
      noError = false
    }
    if (!this.phone) {
      this.toggleError('phone')
      noError = false
    }

    return noError
  }

  addMember = async () => {
    const noError = this.validateFields()

    if (noError) {
      let result
      if (this.isUpdate && this.member_id) {
        result = await membersStore.updateMember(this.member_id, this.name, this.nickname, this.phone, this.notes, this.address)
      } else {
        result = await membersStore.addNewMember(this.group_id, this.name, this.nickname, this.phone, this.notes, this.address)
      }

      if (result == 'OK') {
        router.back()
        return 
      }
      Alert.alert("Error", "Failed to save member")
      return 
    }

    Alert.alert("Error", "Name and Phone are required")
  }
}

export default AddMemberUIStore