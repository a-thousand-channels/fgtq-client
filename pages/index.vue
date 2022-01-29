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
    }
  },
  mounted: function() {
  }
}
</script>
