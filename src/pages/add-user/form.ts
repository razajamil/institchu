import { Resolver } from 'react-hook-form'

export type FormSchema = {
  firstName: string
  lastName: string
}

export const formResolver: Resolver<FormSchema> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'Please enter your first name',
          },
          lastName: {
            type: 'required',
            message: 'Please enter your last name',
          },
        }
      : {},
  }
}
