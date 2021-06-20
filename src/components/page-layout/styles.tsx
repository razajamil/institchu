import { makeStyles } from '@material-ui/core'

export const useLayoutStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
}))

export const useNavigationStyles = makeStyles(() => ({
  item: {
    cursor: 'pointer',
  },
}))
