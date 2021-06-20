export type Album = {
  id: string
  title: string
  photos?: Array<Photo>
}

export type Photo = {
  id: string
  albumId: string
  title: string
  url: string
  thumbnailUrl: string
}
