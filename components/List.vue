<style>


</style>

<template>
  <div class="">
    <ul class="pb-10">
      <li v-if="places.length == 0" class="bg-a100c-white px-4 py-2 rounded shadow mt-4">
        <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"/></svg>
        Please go left to see
        <nuxt-link :to="{ name: '/layer/' + this.slug, hash:'map'}" class="text-link">
          our map
        </nuxt-link>
        and select a place or layer to see more details here.
      </li>
      <li v-if="!places" class="bg-a100c-white px-4 py-2 rounded shadow mt-4">
        <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z"/></svg> Or check the
        <nuxt-link :to="{ name: '/layer/' + this.slug, hash:'info'}" class="text-link">
          info page
        </nuxt-link>
        to learn more about this map :)
      </li>
      <li v-else class="bg-a100c-white px-4 py-2 rounded shadow mt-4 ">
        <h2 class="font-semibold pl-0 sm:pl-4 md:pl-16"><span v-if="data.title != data.layer[parseInt(layerindex)].title">{{data.title}}</span><span v-else><nuxt-link :to="{ path: '/'}">From Gay To Queer</nuxt-link></span> <span v-if="data.layer[parseInt(layerindex)]">— <span class="text-a100c-1">{{ data.layer[parseInt(layerindex)].title}}</span></span></h2>
      </li>

      <li v-for="(place,index) in places" :id="'list-place-'+place.id" class="bg-a100c-white px-4 py-2 rounded shadow mt-4">
        <div v-swiper:[index]="swiperOptions" class="md:px-12 swiper">
          <div class="swiper-wrapper" v-if="place.images">
            <div v-for="(image,iindex) in place.images" :key="iindex" class="swiper-slide px-0 pb-4 pt-2 sm:px-4 sm:pt-4">
              <p v-if="place.images.length > 1" class="text-sm text-gray max-w-60 text-left">{{iindex+1}}/{{place.images.length}}</p>
              <span v-if="image">
                <img v-bind:src="image.image_url" :alt="image.alt" class="max-w-full sm:max-w-ws max-h-72 sm:max-h-80 lg:max-h-96">
                <span class="text-sm leading-tight text-gray-500 max-w-60">{{image.title}}</span>
              </span>
              <span v-else>
                <img src="https://via.placeholder.com/585x870?text=Platzhalter_585x870px" alt="">
              </span>
            </div>
          </div>
          <div class="swiper-pagination"  slot="pagination"></div>
        </div>
        <h3 class="font-semibold text-lg px-4 py-2 sm:px-16 sm:pt-6">{{ place.title }}</h3>
        <div class="text-gray-800 px-4 md:text-lg sm:px-16 sm:py-3 lg:max-w-3xl teaser-block" v-html="place.teaser"></div>
        <div :id="'list-audio-'+place.id" class="player-wrapper px-4 sm:px-16 sm:py-3" v-if="place.audiolink" v-html="place.audiolink">
        </div>
        <ul v-if="place.annotations.length > 0" class="pb-0 sm:px-8">
          <li v-for="(annotation,aindex) in place.annotations" class="bg-a100c-3-text rounded shadow mt-4 mb-6 px-4 py-3 sm:px-4 sm:py-6 lg:max-w-3xl">
            <h4 v-if="annotation.title" class="font-semibold md:text-lg px-4 py-2">{{ annotation.title }}</h4>
            <div class="text-gray-800 px-4 annotation-text-block" v-html="annotation.text"></div>
          </li>
        </ul>
        <div v-if="places_with_relations" v-for="(rwr,rwrindex) in places_with_relations">

          <div v-if="rwr.relations[0].from.id == place.id">
            <div v-if="rwr.relations.length > 0" class="pb-0 px-8 sm:px-16">
              <div v-for="(relation,rindex) in rwr.relations" class="">
                <div v-if="rindex == 0" class="mb-2">
                  <p v-if="rwr.relations.length == 1 && relation.from.layer_id == relation.to.layer_id">Jump to:</p>
                  <p v-else>See also:</p>
                </div>

                <div v-if="relation.to.title && place.layer_id == relation.from.layer_id">
                  <p class="leading-tight mb-4">
                    <span v-if="relation.from.layer_id == relation.to.layer_id">
                      <a @click="scrollToEntry(relation.to.id)" class="text-link" >
                        {{ relation.to.title }}
                      </a>
                    </span>
                    <span v-else>
                      <a @click="jumpToLayerAndEntry(relation.to.id, returnLayerSlug(relation.to.layer_id))" class="text-link" >
                        {{ relation.to.title }}
                      </a>
                      (<nuxt-link :to="{ path: '/layer/' + returnLayerSlug(relation.to.layer_id), hash: 'map'}" class="text-link">
                        {{ returnLayerTitle(relation.to.layer_id) }}
                      </nuxt-link>)

                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="flex pt-8 pb-4 lg:max-w-3xl pl-4 md:pl-16 lg:pl-14 pr-4 md:pr-12 lg:pr-4">
          <p class="flex-auto text-gray-500 px-0 py-2">
            <button @click="recenterMap(place.lat,place.lon,index)" class="text-link2">
              <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current"  d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
              Show on the map
            </button>
          </p>
          <p class="flex-auto text-gray-500 text-right x-0 py-2">
            <button @click="scrollToTop" class="text-link2">
              <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current" d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
              To top
            </button>
          </p>
        </footer>
      </li>
    </ul>
  </div>
</template>


<script>


export default {
  props: {
    places: {
      type: Array,
      required: false
    },
    places_with_relations: {
      type: Array,
      required: false
    },
    data: {
      type: Object,
      required: false
    },
    layerindex: {
      type: Number,
      required: false
    },
    layers: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: false
    }
  },
  components: {
  },
  methods: {
    recenterMap(lat,lon,index) {
      this.$nextTick(() => {
        console.log("recenter map to "+ lat +"/"+lon);
        this.$router.push({ path: '/layer/' + this.slug, hash: '#map' });
        this.map.flyTo([lat,lon],17);
      })
    },
    scrollToTop() {
      console.log('Scroll')
      document.getElementById('list_content').scrollTo({ top: 0, behavior: 'smooth' })
    },
    scrollToEntry(id) {
      console.log('list-place-'+id)
      let el = document.getElementById('list-place-'+id)
      document.getElementById('list_content').scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    },
    jumpToLayerAndEntry(id,slug) {
      console.log('list-place-'+id)
      console.log(slug)
      this.$router.push({ path: '/layer/' + slug, hash: '#list', query: { place_id: "list-place-"+id }});
    },
    returnLayerTitle(layer_id) {
      console.log(layer_id)
      var layers = this.layers
      var title = ''
      Object.keys(layers).forEach(function(index ) {
          if ( layers[index].id == layer_id ) { title = layers[index].title }
      })
      return title
    },
    returnLayerSlug(layer_id) {
      console.log(layer_id)
      var layers = this.layers
      var slug = ''
      Object.keys(layers).forEach(function(index ) {
          if ( layers[index].id == layer_id ) { slug = layers[index].slug }
      })
      return slug
    }
  },
  data() {
    return {
      slug: this.$route.params.slug || 'thomas-b',
      swiperOptions: {
          width: null,
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
          },
          paginationClickable: true,
          spaceBetween: 50
        }
    }
  },
  computed: {
   },
  mounted() {
  }
}
</script>
