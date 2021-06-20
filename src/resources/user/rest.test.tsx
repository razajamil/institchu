import { addUserResource } from './rest'

describe('addUserResource', () => {
  it('should return added user', async () => {
    const user = await addUserResource({ firstName: 'John', lastName: 'Done' })
    expect(user.id).toBeDefined()
    expect(user.firstName).toEqual('John')
    expect(user.lastName).toEqual('Done')
  })
})
