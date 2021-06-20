import { UseFormReturn } from 'react-hook-form'
import { FormSchema } from '../form'
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
} from '@material-ui/core'

type ViewProps = {
  onSubmit: () => void
  form: UseFormReturn<FormSchema>
  submitLoading: boolean
  submitSuccess: boolean
  submitError: boolean
  resetSubmit: () => void
}

export const View = (props: ViewProps) => {
  const {
    onSubmit,
    form,
    submitLoading,
    submitSuccess,
    submitError,
    resetSubmit,
  } = props
  const {
    register,
    formState: { errors },
  } = form

  return (
    <Box padding={4}>
      <Grid
        container
        component='form'
        role='form'
        direction='column'
        alignItems='center'
        onSubmit={onSubmit}
      >
        <Grid item container justify='center' xs={6}>
          <Typography variant='h5' color='textSecondary'>
            Add new user
          </Typography>
        </Grid>
        <Grid item container xs={6}>
          <TextField
            inputProps={{ role: 'textbox' }}
            id='first-name'
            label='First name'
            {...register('firstName', { required: true })}
            helperText={errors.firstName?.message}
            error={!!errors.firstName}
            style={{ flex: 1 }}
          />
        </Grid>

        <Grid item container xs={6}>
          <TextField
            inputProps={{ role: 'textbox' }}
            id='last-name'
            label='Last name'
            {...register('lastName', { required: true })}
            helperText={errors.lastName?.message}
            error={!!errors.lastName}
            style={{ flex: 1, margin: '15px 0 60px 0' }}
          />
        </Grid>
        <Grid item container xs={6}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            disabled={submitLoading}
            style={{ flex: 1 }}
          >
            Add User
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={submitSuccess}
        onClose={resetSubmit}
        color='red'
        message='User added successfully!'
      />
      <Snackbar
        open={submitError}
        onClose={resetSubmit}
        message='User added successfully!'
      />
    </Box>
  )
}
