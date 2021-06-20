import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export const LoadingBlanket = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}
