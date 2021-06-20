import { useAlbum } from '../../../resources/album'
import { PageLayout } from '../../../components/page-layout'
import { View } from './view'
import { useRouter } from 'next/router'

type AlbumProps = {
  id: string
}
const Album = (props: AlbumProps) => {
  const { id } = props

  const { album, error } = useAlbum({ id })

  if (error) return <div>Woops, something went wrong</div>

  return <View album={album} loading={!album} />
}

const Page = () => {
  const router = useRouter()

  const id = router.query?.albumId as string

  if (!id) return null

  return (
    <PageLayout>
      <Album id={id} />
    </PageLayout>
  )
}

export default Page
