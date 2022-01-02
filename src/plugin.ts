import { Context } from '@nuxt/types'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN as string
export default (_ctx: Context, inject: any): void => {
  inject(
    'mapbox', mapboxgl
  )
}
