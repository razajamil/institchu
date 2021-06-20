import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import Link from 'next/link'
import { useNavigationStyles } from './styles'

export const Navigation = () => {
  const navigationClasses = useNavigationStyles()
  return (
    <AppBar component='nav' position='static'>
      <Toolbar>
        <Box className={navigationClasses.item} marginRight={3}>
          <Link href='/album/1' passHref>
            <Typography variant='h6'>Album</Typography>
          </Link>
        </Box>
        <Box className={navigationClasses.item} marginRight={3}>
          <Link href='/add-user' passHref>
            <Typography variant='h6'>Add User</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
