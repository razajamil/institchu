import { User } from './types'
import fetch from 'cross-fetch'

const BASE_URI = process.env.API_BASE_URI

export async function addUserResource(user: Omit<User, 'id'>): Promise<User> {
  const response = await fetch(`${BASE_URI}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  const json = await response.json()

  return json as User
}
