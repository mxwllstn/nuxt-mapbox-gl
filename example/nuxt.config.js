import { resolve } from 'path'
import mapboxModule from '../src'

export default {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [mapboxModule],
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  }
}
