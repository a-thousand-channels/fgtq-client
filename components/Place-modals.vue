<style>
.places-list {
  display: block;
   margin-top: -6px;
}

.modal {
  display: block;
  transition: all 1s ease-out;
  opacity: 0;
  height: 0;
  width: 0;
  min-width: none;
  overflow: hidden;
}
.modal.is-active {
  display: block;
  transition: all 0.6s ease-in;
  opacity: 1;
  height: auto;
  width: auto;
  min-width: none;
}


.modal-content {
  min-width: 15em;
}

.list-place h3,
.modal .modal-header h2 {
  background-color: rgba(252, 84, 128, 0.55);
  background: linear-gradient(90deg, rgba(255,117,0,0.55) 0%, rgba(255,0,35,0.55) 50%, rgba(255,0,249,0.55) 100% );
  display: inline-block;
  padding: 3px 8px;
  margin-bottom: 5px;
  color: #fff;
  font-family: monospace;
}
.modal-relations .modal-header h2 {
  ilter: grayscale(0.1) brightness(1.25);
}
#page.darkmode svg.inline path {
  fill: #ccc;
}

</style>

<template>
  <div class="places-list sm:relative z-50">
    <div :id="'layer-'+llayer.id" v-for='(llayer,lindex) in layer' class="">
      <template v-for='(place,index) in llayer.places'>
        <div class="modal" :class="{ 'is-active' : place.state }" v-bind:id="'place-' + place.id">
          <div class="modal-background"></div>
          <div class="modal-content absolute inset-4 p-4 pt-2 m-1 z-50 sm:relative sm:inset-0 sm:mt-7 sm:mr-10 md:mt-8 md:mr-18 bg-white bg-a100c-white overflow-y-scroll max-h-[88vh] shadow min-w-none sm:min-w-min sm:max-w-md">
            <div class="text-right px-0 py-0 w-8 float-right text-3xl">
              <button class="close-button" aria-label="close" @click="closeModal(place)">&times;</button>
            </div>
            <div v-if="place.images && place.images.length > 0" class="px-0 pb-4 sm:px-4">
              <div class="">
                <div v-if="place.images[0]">
                  <img v-bind:src="place.images[0].image_url" :alt="place.images[0].alt" class="max-w-full sm:max-w-md max-h-56 sm:max-h-56 lg:max-h-64">
                </div>
              </div>
            </div>
            <div class="modal-header pt-1 sm:pt-2 px-4">
              <p class="text-sm sm:text-md my-0 sm:my-4"><span v-if="data.title != llayer.title">{{data.title}} </span><span v-else><nuxt-link :to="{ path: '/'}">From Gay To Queer</nuxt-link></span> <span v-if="data.layer[parseInt(lindex)]">:: {{ data.layer[parseInt(lindex)].title}}</span></p>
              <h2 class="text-sm sm:text-md">{{place.title}}</h2>
            </div>
            <div class="modal-content">
              <div v-if="place.teaser" class="text-sm sm:text-md  text-gray-500 px-4" :inner-html.prop="place.teaser | truncate(200, '...')"></div>
            </div>
            <div class="modal-player">
                <p class="captions" :id="'place-' + place.id + '-infos'"></p>
                <div id="audio" class="player-wrapper px-4" v-if="place.audio">
                  <audio-player :place="place"></audio-player>
                </div>
                <div id="audio" class="player-wrapper px-4" v-if="place.audiolink" v-html="place.audiolink">
                </div>
            </div>
            <footer>
              <p class="text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4">
                <button v-if="metalevel" @click="showPlaceInList(place,layers[parseInt(lindex)].slug)" class="text-link">Show details @ {{ layers[parseInt(lindex)].title}}</button>
                <button v-else @click="showPlaceInList(place,'')" class="text-link">Show details</button>

              </p>
            </footer>
          </div>
        </div>
      </template>
    </div>
    <div :id="'layer-'+llayer.id+'-relations'" v-for='(llayer,lindex) in layer'>
      <template v-for='(relation_to,index) in related_places_from_other_layers'>
          <div class="modal modal-relations" :class="{ 'is-active' : relation_to.state }" v-bind:id="'place-' + relation_to.id">
            <div class="modal-background"></div>
            <div class="modal-content absolute inset-4 p-4 pt-2 m-1 z-50 sm:relative sm:inset-0 sm:mt-7 sm:mr-10 md:mt-8 md:mr-18 bg-white bg-a100c-white overflow-y-scroll max-h-[88vh] shadow min-w-none sm:min-w-min sm:max-w-md">
              <div class="text-right px-0 py-0 w-8 float-right text-3xl">
                <button class="close-button" aria-label="close" @click="closeRelationModal(relation_to)">&times;</button>
              </div>
              <div v-if="relation_to.images && relation_to.images.length > 0" class="px-0 pb-4 sm:px-4">
                <div class="">
                  <div v-if="relation_to.images[0]">
                    <img v-bind:src="relation_to.images[0].image_url" :alt="relation_to.images[0].alt" class="max-w-full sm:max-w-md max-h-56 sm:max-h-56 lg:max-h-64">
                  </div>
                </div>
              </div>
              <div class="modal-header pt-1 sm:pt-2 px-4">
                <p class="text-sm sm:text-md my-0 sm:my-4"><span v-if="data.title != layer.title">From Gay To Queer </span><span>:: {{ data.layer[0].title }}</span></p>
                <h2 class="text-sm sm:text-md">{{relation_to.title}}</h2>
              </div>
              <div class="modal-content">
                <div v-if="relation_to.teaser" class="text-sm sm:text-md  text-gray-500 px-4" :inner-html.prop="relation_to.teaser | truncate(200, '...')"></div>
              </div>
              <footer>
                <p class="text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4">
                  <button @click="showPlaceInList(relation_to,layers[relation_to.layer_index].slug)" class="text-link">
                    Show details
                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="#000"></path></svg>
                    {{ layers[relation_to.layer_index].title}}
                  </button>
                </p>
              </footer>
            </div>
          </div>
      </template>
    </div>
  </div>
</template>


<script>
// import AudioPlayer from '~/components/Audio-player.vue';
import layers from '~/static/layers.json'


export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    layer: {
      type: Array,
      required: true
    },
    layers: {
      type: Object,
      required: true
    },
    metalevel: {
      type: Boolean,
      required: true
    },
    related_places_from_other_layers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slug: this.$route.params.slug || 'thomas-b',
    }
  },
  components: {
    // AudioPlayer
  },
  methods: {
    closeModal(place) {
      this.data.state = false
      place.state = false
    },
    closeRelationModal(relation_to) {
      this.data.state = false
      relation_to.state = false
    },
    showPlaceInList(place,slug) {
      this.$nextTick(() => {
        this.data.state = !this.data.state
        place.state = !place.state;
        console.log("global slug "+this.slug);
        slug =  slug || this.$route.params.slug;
        console.log("show place "+ place.id +" in list");
        console.log("with slug "+ slug +"");
        this.$router.push({ path: '/layer/' + slug, hash: '#list', query: { place_id: "list-place-"+place.id }});
      })
    }
  },
  computed: {
  },
  mounted() {

  }
}
</script>
