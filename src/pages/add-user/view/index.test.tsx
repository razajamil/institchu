import { View } from './index'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { FormSchema, formResolver } from '../form'

describe('add-user/view', () => {
  it('should render', () => {
    const Test = () => {
      const form = useForm<FormSchema>({ resolver: formResolver })
      return (
        <View
          form={form}
          onSubmit={() => {}}
          resetSubmit={() => {}}
          submitError={false}
          submitLoading={false}
          submitSuccess={false}
        />
      )
    }
    const el = render(<Test />)
    expect(el).toBeDefined()
  })

  it('should accept first name, last name as text input and call submit function ', async () => {
    const Test = () => {
      const form = useForm<FormSchema>({ resolver: formResolver })
      const onSubmit = form.handleSubmit(() => {})

      return (
        <View
          form={form}
          onSubmit={onSubmit}
          resetSubmit={() => {}}
          submitError={false}
          submitLoading={false}
          submitSuccess={false}
        />
      )
    }

    const { getByRole } = render(<Test />)

    const firstNameInput = getByRole('textbox', {
      name: /first name/i,
    }) as HTMLInputElement
    expect(firstNameInput).toBeDefined()
    fireEvent.change(firstNameInput, { target: { value: 'Jane' } })
    expect(firstNameInput.value).toBe('Jane')

    const lastNameInput = getByRole('textbox', {
      name: /last name/i,
    }) as HTMLInputElement
    expect(lastNameInput).toBeDefined()
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
    expect(lastNameInput.value).toBe('Doe')

    await act(async () => {
      fireEvent.submit(getByRole('form'))
    })
  })

  it('should display error message when submitting without entering first name and/or last name ', async () => {
    const Test = (props: any) => {
      const form = useForm<FormSchema>({ resolver: formResolver })

      const onSubmit = form.handleSubmit(() => {})

      return (
        <View
          form={form}
          onSubmit={onSubmit}
          resetSubmit={() => {}}
          submitError={false}
          submitLoading={false}
          submitSuccess={false}
          {...props}
        />
      )
    }

    const { getByRole, getByText } = render(<Test />)

    await act(async () => {
      fireEvent.submit(getByRole('form'))
    })

    expect(getByText(/please enter your first name/i)).toBeDefined()
    expect(getByText(/Please enter your last name/i)).toBeDefined()
  })

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })
})
