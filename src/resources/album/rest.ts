import { Album, Photo } from './types'
import fetch from 'cross-fetch'
const BASE_URI = process.env.API_BASE_URI

export async function getAlbum(id: string): Promise<Album> {
  const response = await fetch(`${BASE_URI}/albums/${id}`)
  const json = await response.json()

  const album: Album = {
    id: json.id,
    title: json.title,
  }

  const photos = await getAlbumPhotos(id)
  album.photos = photos

  return album
}

async function getAlbumPhotos(id: string): Promise<Array<Photo>> {
  const response = await fetch(`${BASE_URI}/albums/${id}/photos`)
  const json = await response.json()

  if (Array.isArray(json))
    return json.map(
      (photo): Photo => ({
        id: photo.id,
        albumId: photo.albumId,
        title: photo.title,
        url: photo.url,
        thumbnailUrl: photo.thumbnailUrl,
      })
    )

  return []
}
