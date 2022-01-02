import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
export default (_ctx, inject) => {
  inject(
    'mapbox', mapboxgl
  )
}
