import { Album } from '../../../../resources/album'
import { viewStyles } from './styles'
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
} from '@material-ui/core'
import { LoadingBlanket } from '../../../../components/loading-blanket'

type ViewProps = {
  album?: Album
  loading: boolean
}

export const View = (props: ViewProps) => {
  const { album, loading } = props
  const classes = viewStyles()

  if (loading || !album) return <LoadingBlanket />

  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={600} className={classes.gridList} cols={1}>
          <GridListTile key='Subheader' cols={1} style={{ height: 'auto' }}>
            <ListSubheader component='div'>{album.title}</ListSubheader>
          </GridListTile>
          {album.photos?.map((photo) => (
            <GridListTile key={photo.id} cols={1}>
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.url} alt={photo.title} />
              }
              <GridListTileBar title={photo.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}
