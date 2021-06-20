import { useMutation } from 'react-query'
import { addUserResource } from './rest'
import { User } from './types'

export const useAddUser = () => {
  const addUserMutation = useMutation(addUserResource)

  const addUser = (user: Omit<User, 'id'>) => {
    addUserMutation.mutate(user)
  }

  return {
    addUser,
    addUserData: addUserMutation.data,
    addUserLoading: addUserMutation.isLoading,
    addUserError: addUserMutation.error,
    addUserResetState: addUserMutation.reset,
  }
}
