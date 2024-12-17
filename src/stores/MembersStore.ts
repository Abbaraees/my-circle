import { makeAutoObservable } from "mobx"
import { Member } from "../types"
import { addMember, getGroupMembers } from "../data/db"

class MembersStore {
  members: Member[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addNewMember = async (group_id: number, name: string, nickname: string, phone: string, notes: string, address: string) => {
    try {
      const result = await addMember(group_id, name, nickname, phone, notes, address)
      return 'OK'
    } catch (error) {
      console.log(error)
      return 'FAILED'
    }
  }

  getMembersByGroup =async (group_id:number) => {
    return await getGroupMembers(group_id)
  }
}

const membersStore = new MembersStore()
export default membersStore