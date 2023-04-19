<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      h1 {
        @apply text-2xl;
      }
      h2 {
        @apply text-xl;
      }
      a {

      }
      .border-grey {
        border-color: #666;
      }
    }

    body {
      font-family: Work Sans, Graphik, sans-serif !important;
      background-color: #333;
    }
   .bg-a100c-1-splash {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.25) 0%, rgba(255,117,0,0.35) 50%, rgba(255,0,35,0.25) 100%);
      background-image: url(~/assets/client-splash-background-light.jpg);
      background-size: cover;
   }
   .bg-a100c-1-hover {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.65) 0%, rgba(255,117,0,0.6) 50%, rgba(255,0,35,0.65) 100%);
      background: linear-gradient(90deg, rgba(255,0,249,0.85) 0%, rgba(255,117,0,0.8) 50%, rgba(255,0,35,0.85) 100%);
   }
   .bg-a100c-white-100 {
      background-color: rgba(255,255,255,1);
   }
   .bg-a100c-white {
      background-color: rgba(255,255,255,0.8);
   }
       /* darkmode */
    #page.darkmode .bg-a100c-1-splash {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.25) 0%, rgba(255,117,0,0.35) 50%, rgba(255,0,35,0.25) 100%);
      background-image: url(~/assets/client-splash-background-dark.jpg);
      background-image: url(~/assets/IMG_5773.jpg);
      background-image: url(~/assets/manu_flyer_schlampenkneipe_mixedcolors.jpg);
      background-size: cover;
   }
    #page.darkmode .bg-a100c-white {
      background-color: rgba(55,55,55,0.7);
      background-color: rgba(55,55,55,0.95);
   }
   #page.darkmode h2 {
      color: rgba(255,255,255,0.8);
   }
   .text-a100c-1 {
      color: #ff6d6d;
      background: -webkit-linear-gradient(120deg,rgba(255,0,35,.65),rgba(255,117,0,.65) 50%,rgba(255,0,249,.65));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
   }
   h2.beta::after {
      content: "(v1)";
      padding: 3px 2px;
      margin-left: 4px;
      display: inline-block;
      font-family: monospace;
      color: #666;
      font-size: 0.6em;
      line-height: 1;
      vertical-align: text-top;
   }
  button.text-link,
    a.text-link {
      text-decoration: none;
      background-image: linear-gradient(120deg,rgba(255,0,249,.35),rgba(255,117,0,.35) 50%,rgba(255,0,35,.35));
      background-repeat: no-repeat;
      background-size: 100% 0.2em;
      background-position: 0 100%;
    }
    button,
    button{
        opacity: 1;
        cursor: pointer;
        transition: all 0.3s;
    }
    button:disabled,
    button[disabled]{
        opacity: 0.5;
        filter: grayscale(1);
        cursor: disabled;
        transition: all 0.3s;
    }
</style>

<template>
<div id="page" :class="viewmode == 'Dark mode' ? 'darkmode' : ''">
  <div class="relative flex overflow-x-auto justify-center h-screen bg-pink-100 bg-a100c-1-splash sm:items-center px-8 pt-8 sm:pt-8">
    <div class="max-w-4xl mx-auto mt-0 pt-0 sm:px-6 sm:pt-8 sm:pt-8 sm:mt-8 lg:px-12 ">
      <div class="overflow-hidden bg-a100c-white shadow sm:rounded-lg mt-4 sm:mt-8 lg:mt-8 p-2 sm:px-4 sm:pt-8 md:px-4 lg:px-8">
        <h2 class="text-3xl beta">
          <span class="text-a100c-1  font-semibold">"From Gay To Queer"</span> — A map of LGBTIQ+ subcultures in Bremen in the 90s</span>
        </h2>
      </div>
      <div class="mt-2 md:mx-24 lg:mx-24 bg-transparent overflow-hidden sm:rounded-lg p-2">

        <div class="mt-2 pt-2 text-gray-800 text-center">
          <select id="layer-selector" v-on:change="onChange($event)" class=" bg-a100c-white rounded text-lg shadow px-3 py-2 outline-none max-w-xs md:max-w-md lg:max-w-lg">
            <option>
              Select a layer ...
            </option>
            <option value="" class="text-lg py-1">
              All layers combined
            </option>
            <option v-for="layer in layers" :value="'/'+layer.slug" class="text-lg py-1">
                {{layer.title}}
            </option>
          </select>
        </div>
        <p class="mt-2 pt-2 text-gray-800 text-center">
          <nuxt-link :to="{ path: '/layer' + this.slug, hash:'map' }" tag="button" :disabled="this.disabled" class="bg-white bg-a100c-1-hover text-white text-bold drop-shadow text-center px-4 py-2 rounded-lg">View map</nuxt-link>
        </p>
      </div>
      <div class="mt-4 mb-4 bg-a100c-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2">
        <p class="text-gray-600">
          In a process of research, interviewing, mapping and contextualization, we have tried to understand how queer (sub)cultures have developed from their separated LGBTI* niches, with the focus on Bremen in the 1990s. This is a spotlight, there are so many other voices, narrations and traces that hopefully will be collected and documented, too.
        </p>
      </div>
      <div class="mt-4 mb-4 bg-a100c-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2">
        <p class="text-gray-600">
          This map is part of <a href="https://citydataexplosion.tumblr.com/intersections-and-constellations" target="_blank" class="text-link">„Intersections + Constellations: From gay to queer“</a>, 2021.<br />
          The content is mixed english and german. Content notice: A few quotes mention violence against LGBTIQ+.
        </p>
        <p class="mt-2 text-sm text-gray-600">
          We would be very excited about feedback and contributions.
          If you have questions or remarks, please contact us via <a href="mailto:queer-narratives-mapped@citydataexplosion.de" class="text-link">queer-narratives-mapped@citydataexplosion.de</a>.
        </p>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
 props: {
    layers: {
      type: Object,
      required: true
    },
 },
 data() {
    return {
      custom_data_url: '',
      slug: '',
      layers_json_url: '',
      disabled: false,
      viewmode: 'Dark mode'
    }
  },
  mounted: function() {
    if ( localStorage.getItem('viewmode') ) {
      this.viewmode = localStorage.getItem('viewmode')
    }
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
      this.disabled = false;
    }
  },
  methods: {
    onChange(event) {
      if ( event.target.value !== "Select a map") {
        this.slug = event.target.value;
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
  }
}
</script>