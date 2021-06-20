import AddUser from './index'
import { render, fireEvent, act, waitFor, screen } from '@testing-library/react'
import { ReactQueryProvider } from '../../components/react-query-provider'

describe('add-user', () => {
  it('should render', () => {
    render(
      <ReactQueryProvider>
        <AddUser />
      </ReactQueryProvider>
    )
  })
  it('should show success snack after submitting form with first name and last name', async () => {
    const Test = () => {
      return (
        <ReactQueryProvider>
          <AddUser />
        </ReactQueryProvider>
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

    await waitFor(
      () => expect(screen.getByText(/User added successfully!/i)).toBeDefined(),
      { timeout: 5000 }
    )
  })
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })
})
