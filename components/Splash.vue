<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


    /* work-sans-regular - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-600 - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-800 - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-600italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 600;
  src: local(''),
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-800italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 800;
  src: local(''),
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-800italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fgtq-client/fonts/worksans/work-sans-v13-latin-ext_latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
    @layer base {
      h1 {
        @apply text-2xl;
      }
      h2 {
        @apply text-xl;
      }
      a {

      }
    }

    body {
      font-family: Work Sans, Graphik, sans-serif !important;
    }
   .bg-a100c-1-splash {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
      background-image: url(/fgtq-client/client-splash-background-light.jpg);
      background-size: cover;
   }
   .bg-a100c-1-hover {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.65) 0%, rgba(255,117,0,0.6) 50%, rgba(255,0,35,0.65) 100%);
   }
   .text-a100c-1 {
      color: #ff6d6d;
      background: -webkit-linear-gradient(120deg,rgba(255,0,35,.65),rgba(255,117,0,.65) 50%,rgba(255,0,249,.65));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
   }
   h2.beta::after {
      content: "(Beta)";
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
<div id="page">
  <div class="relative flex overflow-x-auto items-top justify-center min-h-screen bg-pink-100 bg-a100c-1-splash sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="flex justify-center sm:mt-8 sm:pt-0">
      </div>
      <div class="mt-4 overflow-hidden bg-white shadow sm:rounded-lg  md:px-4 lg:px-8 p-2">
        <h2 class="text-3xl beta">
          <span class="text-a100c-1  font-semibold">"From Gay To Queer"</span> — A project by Queer narratives, mapped</span>
        </h2>
      </div>
      <div class="mt-2 md:mx-24 lg:mx-36 bg-transparent overflow-hidden sm:rounded-lg p-2">

        <div class="mt-2 pt-2 text-gray-800 text-center">
          <select id="layer-selector" v-on:change="onChange($event)" class="border bg-white rounded text-lg  px-3 py-2 outline-none">
          {{layers}}
            <option>
              Select a map ...
            </option>
            <option v-for="layer in layers" :value="layer.url" class="text-lg py-1">
                {{layer.title}}
            </option>
          </select>
        </div>
        <p class="mt-2 pt-2 text-gray-800 text-center">
          <nuxt-link :to="{ path: '/main', hash:'map', query: { layer: this.custom_data_url }}" tag="button" :disabled="this.disabled" class="bg-white bg-a100c-1-hover text-white text-bold drop-shadow text-center px-4 py-2 rounded-lg">View map</nuxt-link>
        </p>
      </div>
      <div class="mt-4 mb-4 bg-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2">
        <p class="mt-2 pt-2 text-gray-600">
          In a process of research, interviewing, mapping and contextualization, we have tried to understand how queer (sub)cultures have developed from its seperated LGBTI niches, with the focus on Bremen and the second half of the 1990s. This is a spotlight, they are so many other voices, narrations and traces, that hopefully will be collected and documented too.
        </p>
        <p class="mt-2 pt-2 text-gray-600">
          It is part of the <a href="https://citydataexplosion.tumblr.com/intersections-and-constellations" target="_blank" class="text-link">Intersections + Constellations: „From gay to queer“. A queer mapping project.</a>

        </p>
        <p class="mt-2 pt-2 text-sm text-gray-600">
          We would very happy about feedback and contributions.
          If you have questions or remarks please contact us via <a href="mailto:queer-narratives-mapped@citydataexplosion.de" class="text-link">queer-narratives-mapped@citydataexplosion.de</a>.
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
      layers_json_url: '',
      disabled: true
    }
  },
  mounted: function() {
    console.log(this.$route.query.layer)
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
      this.disabled = false;
      console.log(this.disabled)
    }
    console.log(this.$route.query);

  },
  methods: {
    onChange(event) {
      if ( event.target.value != "Select a map") {
        this.custom_data_url = event.target.value;
        console.log(this.custom_data_url)
        this.disabled = false;
      } else {
        this.disabled = true;

      }
    },
  }
}
</script>