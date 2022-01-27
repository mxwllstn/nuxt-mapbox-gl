# nuxt-mapbox-gl
[![Version](https://img.shields.io/npm/v/nuxt-mapbox-gl.svg)](https://www.npmjs.org/package/nuxt-mapbox-gl)

Nuxt module that adds required **mapbox-gl** options and injects **mapbox-gl** into `$root` & `context` (accessible with `$this.mapbox`)

## Install
Use `yarn` to install the module
```bash
yarn add nuxt-mapbox-gl
```
Or use `npm` to install the module
```bash
npm install nuxt-mapbox-gl
```

## Usage
#### nuxt.config.js
```javascript
{
  modules: ['nuxt-mapbox-gl'],
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  }
}
```

#### index.vue
```vue
<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    this.loadMap()
  },
  methods: {
    loadMap() {
      this.map = new this.$mapbox.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 0.6,
        projection: 'naturalEarth' // starting projection
      })
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

```
