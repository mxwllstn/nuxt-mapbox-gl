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
