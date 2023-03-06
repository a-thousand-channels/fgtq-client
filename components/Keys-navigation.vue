<style>


</style>

<template>
  <div class="static z-50 invisible md:visible">
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
      <p class="text-red-300 bg-red-100 px-2 py-0.5 rounded-sm text-sm items-center whitespace-nowrap">
        <span class="hidden">Navigate with arrow keys:</span>
        <button v-if="show_label_left" @click="navigate_left()" class="whitespace-nowrap rounded-lg pl-1 pr-2">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current"  d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
          {{label_left}}
        </button> |
        <button @click="navigate_top()" class="whitespace-nowrap rounded-lg pl-1 pr-2">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current" d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
          {{label_center}}
        </button> |
        <button v-if="show_label_right" @click="navigate_right()" class="whitespace-nowrap rounded-lg pl-1 pr-2">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current"  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
          {{label_right}}
        </button>
      </p>
    </div>
  </div>
</template>


<script>


export default {
  data() {
    return {
      label_left: 'Info',
      label_center: 'Start',
      label_right: 'Listing',
      show_label_left: true,
      show_label_center: true,
      show_label_right: true,
    }
  },
  props: {
  },
  components: {
  },
  methods: {
    navigate_top() {
      console.log( "<-- top "+this.$route.hash)
      this.$router.push({ name: 'index', hash: '' })
    },
    navigate_left() {
      console.log( "<-- from "+this.$route.hash)
      let to = '';
      if ( this.$route.hash == '#map' ) {
        to = '#info'
      } else if ( this.$route.hash == '#list' ) {
        to = '#map'
      }
      if (to) {
        // this.$router.push({ name: '/layer/' + this.slug, hash: to })
        location.hash = to;
      }
    },
    navigate_right() {
      console.log( "--> from " +this.$route.hash)
      let to = '';
      if ( this.$route.hash == '#map' ) {
        to = '#list'
      } else if ( this.$route.hash == '#info' ) {
        to = '#map'
      }
      if (to) {
        // this.$router.push({ name: '/layer/' + this.slug, hash: to })
        location.hash = to;
      }
    },
  },
  created() {
    this.$nextTick(() => {
      /* not called (yet). tbc */
      // console.log('updated :: Check label and label display w/'+this.$route.hash)
      if ( this.$route.hash == '#map' ) {
          this.label_right = 'Listing'
          this.label_left = 'Info'
          this.show_label_left = true;
          this.show_label_right = true;
      } else if ( this.$route.hash == '#info' ) {
          this.label_right = 'Map'
          this.show_label_right = true;
      } else if ( this.$route.hash == '#list' ) {
          this.label_left = 'Map'
          this.show_label_right = false;
      }
    })
  },
  computed: {
  },
  updated() {

  }
}
</script>
