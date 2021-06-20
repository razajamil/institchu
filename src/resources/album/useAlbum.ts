import { useQuery } from 'react-query'
import { getAlbum } from './rest'

type useAlbumProps = {
  id: string
}
export const useAlbum = (props: useAlbumProps) => {
  const { id } = props

  const { data, error } = useQuery(`album-${id}`, () => getAlbum(id))

  return {
    album: data,
    error,
  }
}
