import { makeAutoObservable } from 'mobx';
import { getAllGroups, addGroup } from '../data/db';

class GroupsStore {
  groups = [];

  constructor() {
    makeAutoObservable(this);
  }

  async addGroup(name: string, description: string) {
    try {
      const result = await addGroup(name, description)
      if (result.changes) {
        return 'OK'
      }
    } catch (error) {
      return  'FAILED'
    }
  }

  async getAllGroups(){
    return getAllGroups()
  }

}

const groupsStore = new GroupsStore();
export default groupsStore;
