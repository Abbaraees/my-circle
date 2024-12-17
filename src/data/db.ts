import * as SQLite from 'expo-sqlite'
import { Group, Member } from '../types'

const db = SQLite.openDatabaseSync("my-circle.db")


export const initDB = () => {(async () => {
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
      );
    
      CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        group_id INTEGER,
        name TEXT NOT NULL,
        nickname TEXT,
        phone TEXT,
        address TEXT,
        notes TEXT,
        FOREIGN KEY(group_id) REFERENCES groups(id)
      );
      `)
  } catch (error) {
    console.log(error)
  }

  })()
}


export async function addGroup(name: string, description: string) {
  return await db.runAsync(`INSERT INTO groups (name, description) VALUES ('${name}', '${description}');`)
}

export const getGroup = async (id: number) => {
  return await db.getFirstAsync(`SELECT * FROM groups WHERE id = ${id}`)
}

export const getAllGroups = async () => {
  return await db.getAllAsync<Group>(`SELECT * FROM groups`)
}

export async function addMember(group_id: number, name: string, nickname: string, phone: string, notes: string, address: string) {
  const statement = db.prepareAsync('INSERT INTO members (group_id, name, nickname, phone, notes, address) VALUES ($group_id, $name, $nickname, $phone, $notes, $address);')
  try {
    let result = (await statement).executeAsync({$group_id: group_id, $name: name, $phone: phone, $nickname: nickname, $address: address, $notes: notes})
    return result
  } 
  finally {
    (await statement).finalizeAsync()
  }
}

export const getGroupMembers = async (group_id: number) => {
  return await db.getAllAsync<Member>(`SELECT * FROM members WHERE group_id=${group_id}`)
}



export default db