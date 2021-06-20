import { PageLayout } from '../../components/page-layout'
import { View } from './view'
import { useAddUser } from '../../resources/user'
import { useForm } from 'react-hook-form'
import { FormSchema, formResolver } from './form'

const AddUser = () => {
  const {
    addUser,
    addUserData,
    addUserLoading,
    addUserError,
    addUserResetState,
  } = useAddUser()

  const form = useForm<FormSchema>({ resolver: formResolver })
  const { handleSubmit } = form

  const onSubmit = handleSubmit((data) => {
    addUser(data)
  })

  return (
    <>
      <View
        form={form}
        onSubmit={onSubmit}
        submitLoading={addUserLoading}
        submitSuccess={!!addUserData}
        submitError={!!addUserError}
        resetSubmit={addUserResetState}
      />
    </>
  )
}

const Page = () => {
  return (
    <PageLayout>
      <AddUser />
    </PageLayout>
  )
}

export default Page
