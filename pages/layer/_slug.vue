<template>
  <Layer :layers="layers" />
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
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'From Gay To Queer — A mapping by Queer narratives, mapped',
          name: 'From Gay To Queer — A mapping by Queer narratives, mapped',
          content: 'Mapping of the stories and material collected during the Intersections & Constellations: How to map queer narratives? project. This is Work-in-progress'
        }
      ]
    }
  }
}
</script>
