<template>
  <Main :layers="layers" />
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
          hid: 'title',
          name: 'title',
          content: 'From Gay To Queer — A mapping by Queer narratives, mapped',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Mapping of the stories and material collected during the Intersections & Constellations: How to map queer narratives? project. This is Work-in-progress'
        }
      ]
    }
  }
}
</script>
