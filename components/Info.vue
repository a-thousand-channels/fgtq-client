<style>
.toggle-bg:after {
    content: '';
    background-color: rgba(255,255,255,0.8);
    background-color: #eee;
    @apply absolute top-0.5 left-0.5 border rounded-full h-5 w-5 transition shadow-sm;
}

input:checked + .toggle-bg:after {
    transform: translateX(100%);
    border-color: rgba(255,255,255,0.8);
    border-color: #ccc;
}

input:checked + .toggle-bg {
    background-color: black;
}

</style>

<template>
  <div>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-6 lg:px-8 lg:py-8">
    <div id="info_image" class="lg:px-8" v-if="data.image_link">
      <img v-bind:src="data.image_link" :alt="data.title" class="max-w-full sm:max-w-ws">
    </div>
    <div id="info_content" class="my-2">
      <div id="info_content_header" class="">
        <h2 class="block font-semibold text-2xl px-4 py-1 lg:px-8">
          <nuxt-link :to="{ path: '/'}" class="text-a100c-1">
            {{ data.title }}
          </nuxt-link>
        </h2>
        <h3 v-if="data.subtitle" class="block font-semibold text-md px-4 py-1 lg:px-8">{{ data.subtitle }}</h3>
      </div>
      <div  class="block px-4 py-1 lg:px-8" v-html="data.text"></div>
      <div v-if="data.credits" class="block text-sm text-grey-500  px-4 py-2 lg:px-8" v-html="data.credits"></div>
    </div>
  </div>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <p>
      <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"/></svg>
      Please go right to see
      <nuxt-link :to="{ path: '/layer/' + this.slug, hash:'map'}" class="text-link">
        the map
      </nuxt-link>
    </p>
    <p class="mt-4">
      <label for="toggle-example-checked" class="flex items-center cursor-pointer relative">
        <input type="checkbox" id="toggle-example-checked" class="sr-only" checked @click="toggleMode">
        <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
        <span class="ml-3 text-gray-900 text-sm font-medium">{{ this.mode }}</span>
      </label>
    </p>
  </div>
    <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <h2 class="font-semibold text-gray-800 px-4 py-1 lg:px-8"><span class="text-a100c-1"><nuxt-link :to="{ path: '/'}">From Gay To Queer</nuxt-link></span> — A mapping by "Queer narratives, mapped"</h2>
    <h3 class="text-gray-800 px-4 py-1 lg:px-8">
        About this project:
    </h3>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        In a process of research, interviewing, mapping and contextualization, we have tried to understand how queer (sub)cultures have developed from their separated LGBTI* niches, with the focus on Bremen in the 1990s. This is a spotlight, there are so many other voices, narrations and traces that hopefully will be collected and documented, too.
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
          More about this project <a href="https://citydataexplosion.tumblr.com/intersections-and-constellations" target="_blank" class="text-link">„Intersections + Constellations: From gay to queer“. A queer mapping project</a>, E-Mail <a href="mailto:queer-narratives-mapped@citydataexplosion.de" class="text-link">queer-narratives-mapped@citydataexplosion.de</a>
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
      For all texts and images: All rights reserved by the creators. No redistribution, no copying and re-publishing of texts and visual material without explicit consent. If you would like to use material of this map, please contact us.
    </p>
  </div>
  <div class="block bg-a100c-white rounded shadow  py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <h3 class="font-semibold text-gray-800 px-4 py-1 lg:px-8">
        Credits
    </h3>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
      A project by

        Thomas Böker, Dafne Jaramillo, Kyan Mitwollen, Brunn Morais, Laura Franziska Reyes Pollak and Ulf Treger.
        <br />
        With editorial support by Jimena Stephanie Alvarez.
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
          Many thanks to the interviewees, for sharing your thoughts and impressions: Annette, Arno, Manu, Marcio, Nils, Thomas B, Thomas M, Ulf
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
          Thanks and big shout to the other members of "Queer narratives, mapped" working group. Thanks to Alp Savran and Linus Wirth for facilitating of the queer youth workshops. Thanks also to the participants of our workshops!
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
          Thanks to <a href="https://www.a-thousand-channels.xyz/" target="_blank" class="text-link">A thousand channels — a queer mapping platform</a> for allow us to use their mapping client. Thanks for the contribution to our presentation by art decolonized, a project by Queeraspora.
    </p>
    <p class="text-gray-400 px-4 py-1 text-sm lg:px-8">
        Map design by Ulf Treger. Map data by <a href="https://www.openstreetmap.org/copyright" target="_blank" class="text-link">Openstreetmap and its contributors</a> with a Creative Commons (CC BY-SA 2.0) licence.
    </p>
  </div>
  <div class="block bg-a100c-white rounded shadow  py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        Published by
        <a href="https://spedition-bremen.com/" target="_blank" class="text-link">
          kunst- und kulturverein spedition e.V., Bremen
        </a> with
        <a href="https://citydataexplosion.tumblr.com/" target="_blank" class="text-link">city/data/explosion</a>.
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8">
        The project is supported by the Fonds Soziokultur within the program "Neustart Kultur".
        <img src="neustart_kultur.png" alt="Logos des Fonds Soziokultur, des Programms Neustart Kultur und der Beauftragten der Bundesregierung für Kultur und Medien">
    </p>
    <p class="text-gray-800 px-4 py-1 lg:px-8 pb-4">
        The project has received support by our cooperation partner, the Rosa-Luxemburg-Initiative Bremen and funding by Hannchen-Mehrzweck-Stiftung and by the Senate of Culture of Bremen.
        <img src="intersections-and-constellations-logoleiste2.png" alt="Logos of Rosa-Luxemburg-Initiative Bremen, spedition, city/data/explosion and  Hannchen-Mehrzweck-Stiftung">
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
    toggleMode(e) {
      var p = document.getElementById("page");
      if ( this.mode == 'Dark mode' ) {
        this.mode = 'Day mode';
        p.classList.remove("dark");
        p.classList.remove("darkmode");
      } else {
        this.mode = 'Dark mode';
        p.classList.add("dark");
        p.classList.add("darkmode");
      }

    }

  },
  data() {
    return {
      slug: this.$route.params.slug || 'thomas-b',
      mode: 'Dark mode'
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>
