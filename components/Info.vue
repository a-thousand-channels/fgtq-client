<style>


</style>

<template>
  <div>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-6 lg:px-8 lg:py-8">
    <div id="info_image" class="lg:px-8" v-if="data.image_link">
      <img v-bind:src="data.image_link" :alt="data.title" class="max-w-full sm:max-w-ws">
    </div>
    <div id="info_content" class="my-2">
      <div id="info_content_header" class="">
        <h2 class="block font-semibold text-2xl px-4 py-1 lg:px-8">{{ data.title }}</h2>
        <h3 v-if="data.subtitle" class="block font-semibold text-md px-4 py-1 lg:px-8">{{ data.subtitle }}</h3>
      </div>
      <div  class="block px-4 py-1 lg:px-8" v-html="data.text"></div>
      <div v-if="data.credits" class="block text-sm text-grey-500  px-4 py-2 lg:px-8" v-html="data.credits"></div>
    </div>
  </div>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"/></svg>
    Please go right to see
    <nuxt-link :to="{ path: '/main', hash:'map'}" class="text-link">
      the map
    </nuxt-link>
  </div>
    <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <h2 class="font-semibold text-gray-800 px-4 py-1 lg:px-8"><span class="text-a100c-1"><nuxt-link :to="{ path: '/'}">From Gay To Queer</nuxt-link></span> — A mapping by "Queer narratives, mapped"</h2>
    <h3 class="text-gray-800 px-4 py-1 lg:px-8">
        About this project:
    </h3>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
          In a process of research, interviewing, mapping and contextualization, we have tried to understand how queer (sub)cultures have developed from its seperated LGBTI niches, with the focus on Bremen and the second half of the 1990s. This is a spotlight, they are so many other voices, narrations and traces, that hopefully will be collected and documented too.
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
          More about this project <a href="https://citydataexplosion.tumblr.com/intersections-and-constellations" target="_blank" class="text-link">Intersections + Constellations: „From gay to queer“. A queer mapping project</a>
    </p>
  </div>
  <div class="block bg-a100c-white rounded shadow  py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <h3 class="font-semibold text-gray-800 px-4 py-1 lg:px-8">
        Credits
    </h3>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        List of people that participated...
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        Many thanks to the interviewees, for sharing your thoughts and impressions: Annette, Arno, Manu, Marcio, Niels, Thomas B, Thomas M and Ulf

    </p>
    <p class="text-gray-400 px-4 py-1 text-sm lg:px-8">
        Map data by <a href="www.openstreetmap.org/copyright" target="_blank" class="text-link">Openstreetmap and its contributors</a>
        <br/>
        Base map design by Ulf Treger
    </p>
  </div>
  <div class="block bg-a100c-white rounded shadow  py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        Published by
        <a href="https://spedition-bremen.com/" target="_blank" class="text-link">
          kunst- und kulturverein Spedition e.V., Bremen
        </a>
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        Das Projekt wird gefördert vom Fonds Soziokultur im Rahmen des Programms "Neustart Kultur".
        <img src="neustart_kultur.png" alt="Logos des Fonds Soziokultur, des Programms Neustart Kultur und der Beauftragten der Bundesregierung für Kultur und Medien">
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">

    </p>


  </div>
</div>
</template>


<script>


export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
  },
  methods: {
  },
  data() {
    return {}
  },
  computed: {
  },
  mounted() {
  }
}
</script>
