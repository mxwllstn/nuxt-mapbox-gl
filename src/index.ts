import { Module } from '@nuxt/types'
import path from 'path'

declare global {
  interface Console {
    warning: (payload: any) => void
    fatal: (payload: any) => void
  }
}

export default <Module>function () {
  const { nuxt } = this

  try {
    /* add mapbox css */
    nuxt.options.css = ['mapbox-gl/dist/mapbox-gl.css', ...nuxt.options.css]

    const { accessToken } = nuxt.options.mapbox || {}
    if (!accessToken) {
      throw new Error(
        'nuxt-mapbox - Mapbox Access Token must be specified in nuxt.config.js `mapbox` option\n\n' +
        'Example:\n\n' +
        'mapbox: { \n · accessToken: \'pk.xxx\'\n}'
      )
    }

    /* add mapbox env vars */
    nuxt.options.env = {
      ...nuxt.options.env,
      MAPBOX_ACCESS_TOKEN: accessToken
    }

    /* add mapbox plugin that injects as this.$mapbox */
    this.addPlugin({
      src: path.resolve(__dirname, '../dist/plugin.js'),
      fileName: 'mapbox.js'
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.fatal(error)
  }
}
