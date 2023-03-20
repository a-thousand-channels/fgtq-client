<style>
.toggle-bg:after {
    content: '';
    background-color: #333;
    @apply absolute top-0.5 left-0 border rounded-full h-5 w-5 transition shadow-sm;
}

input:checked + .toggle-bg:after {
    transform: translateX(120%);
    background-color: #eee;
}

input:checked + .toggle-bg {
    background-color: transparent;
}

span#toggle-viewmode-label:after {
    content: '';
    @apply inline-block absolute ml-1.5 mt-1.5 h-4 w-4 transition;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
}
span#toggle-viewmode-label.darkmode:after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill='white' d='M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z'/%3E%3C/svg%3E");
}
#page.darkmode svg path {
  fill: #eee;
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
    <p class="px-4 py-1 lg:px-8">
      <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path class="" d="M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"/></svg>
      Please go right to see
      <nuxt-link :to="{ path: '/layer/' + this.slug, hash:'map'}" class="text-link">
        the map
      </nuxt-link>
    </p>
    <p class="mt-4 px-4 py-1 lg:px-8">
      <label for="toggle-viewmode" class="flex items-center cursor-pointer relative">
        <input type="checkbox" id="toggle-viewmode" class="sr-only" checked @click="toggleMode">
        <div class="toggle-bg bg-gray-200 border-2 border-gray-200 mt-1 h-3 w-11 rounded-full"></div>
        <span id="toggle-viewmode-label" class="darkmode ml-3 text-gray-900 text-sm font-medium">{{ viewmode }}</span>
      </label>
    </p>
  </div>
    <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <h2 class="font-semibold text-gray-800 px-4 py-1 lg:px-8"><span class="text-a100c-1"><nuxt-link :to="{ path: '/'}">From Gay To Queer</nuxt-link></span> — A map of LGBTIQ+ subcultures in Bremen in the 90s</h2>
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
      console.log('toggleMode');
      var p = document.getElementById("page");
      var l = document.getElementById("toggle-viewmode-label");
      if ( this.viewmode == 'Dark mode' ) {
        this.viewmode = 'Day mode';
        p.classList.remove("dark");
        p.classList.remove("darkmode");
        l.classList.remove("darkmode")
        localStorage.setItem('viewmode', 'Day mode')

      } else {
        this.viewmode = 'Dark mode';
        p.classList.add("dark");
        p.classList.add("darkmode");
        l.classList.add("darkmode")
        localStorage.setItem('viewmode', 'Dark mode')
      }

    }

  },
  data() {
    return {
      slug: this.$route.params.slug || 'thomas-b',
      viewmode: 'Dark mode'
    }
  },
  computed: {
  },
  mounted: function() {
     if ( localStorage.getItem('viewmode') ) {
      this.viewmode = localStorage.getItem('viewmode');
      if ( localStorage.getItem('viewmode') == 'Day mode') {
        var p = document.getElementById("page");
        p.classList.remove("darkmode");
        var l = document.getElementById("toggle-viewmode-label");
        l.classList.remove("darkmode")
        var i = document.getElementById("toggle-viewmode");
        i.checked = false;
      }
    }

  }
}
</script>
