import { useAddUser } from './useAddUser'
import { renderHook, act } from '@testing-library/react-hooks/pure'
import { ReactQueryProvider } from '../../components/react-query-provider'

describe('useAddUser', () => {
  it('should add user and return newly added user', async () => {
    const { result, waitForValueToChange } = renderHook(() => useAddUser(), {
      wrapper: ReactQueryProvider,
    })

    act(() => result.current.addUser({ firstName: 'John', lastName: 'Doe' }))

    await waitForValueToChange(() => result.current.addUserData, {
      timeout: 5000,
    })
    expect(result.current.addUserData?.id).toBeDefined()
    expect(result.current.addUserData?.firstName).toEqual('John')
    expect(result.current.addUserData?.lastName).toEqual('Doe')
  })
})
