<template>
  <div>
    <Splash :layers="layers" />
  </div>
</template>

<script>
import layers from '~/static/layers.json'


export default {
 asyncData ({ params }) {
    return { layers }
 },
 data() {
    return {
      title: 'From Gay To Queer — A mapping by Queer narratives, mapped',
      description: 'Mapping of the stories and material collected during the Intersections & Constellations: How to map queer narratives? project.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          name: 'og:description',
          content: this.description
        },
        {
          name: 'og:site_name',
          content: this.title
        },
        {
          name: 'og:image',
          content: 'https://from-gay-to-queer.net/fromgaytoqueer_sharepic1.png'
        }
      ]
    }
  },
  mounted: function() {
  }
}
</script>
