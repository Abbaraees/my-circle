import { makeAutoObservable } from "mobx"
import { Alert } from "react-native"
import groupsStore from "./GroupStore"
import { router } from "expo-router"

class CreateGroupUIStore {
  name = ''
  description = ''

  constructor() {
    makeAutoObservable(this)
  }

  setName = (name: string) => this.name = name
  setDescription = (description: string) => this.description = description
  getName = () => { return "AAAa"}
  
  submit =  async () => {
    if (!this.name) {
      Alert.alert("Error", "Name is required")
      return
    }

    const result = await groupsStore.addGroup(this.name, this.description)
    if (result == 'OK') {
      router.back()
    }
    else {
      Alert.alert("Error", "Failed to create new group")
    }


  }
}

const createGroupStore = new CreateGroupUIStore()
export default createGroupStore