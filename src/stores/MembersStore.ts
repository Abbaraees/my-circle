import { makeAutoObservable } from "mobx"
import { Member } from "../types"
import { addMember, getGroupMembers, getMember as dbGetMember, updateMember as dbUpdateMember } from "../data/db"

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

  updateMember = async (id: number, name: string, nickname: string, phone: string, notes: string, address: string) => {
    try {
      const result = await dbUpdateMember(id, name, nickname, phone, notes, address)
      return 'OK'
    } catch (error) {
      console.log(error)
      return 'FAILED'
    }
  }

  getMembersByGroup = async (group_id: number) => {
    return await getGroupMembers(group_id)
  }

  getMember = async (id: number) => {
    try {
      const result = await dbGetMember(id)
      return { data: result, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}

const membersStore = new MembersStore()
export default membersStore