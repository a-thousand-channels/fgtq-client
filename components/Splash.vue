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
   }
   .bg-a100c-white-100 {
      background-color: rgba(255,255,255,1);
   }
   .bg-a100c-white {
      background-color: rgba(255,255,255,0.8);
   }
   .text-a100c-1 {
      color: #ff6d6d;
      background: -webkit-linear-gradient(120deg,rgba(255,0,35,.65),rgba(255,117,0,.65) 50%,rgba(255,0,249,.65));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
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
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="flex justify-center sm:mt-8 sm:pt-0">
      </div>
      <div class="mt-4 overflow-hidden bg-a100c-white shadow sm:rounded-lg  md:px-4 lg:px-8 p-2">
        <h2 class="text-3xl beta">
          <span class="text-a100c-1  font-semibold">"From Gay To Queer"</span> — A project by Queer narratives, mapped</span>
        </h2>
      </div>
      <div class="mt-2 md:mx-24 lg:mx-24 bg-transparent overflow-hidden sm:rounded-lg p-2">

        <div class="mt-2 pt-2 text-gray-800 text-center">
          <select id="layer-selector" v-on:change="onChange($event)" class="border border-grey bg-a100c-white rounded text-lg shadow px-3 py-2 outline-none max-w-xs md:max-w-md lg:max-w-lg">
            <option>
              Select a map ...
            </option>
            <option v-for="layer in layers" :value="layer.slug" class="text-lg py-1">
                {{layer.title}}
            </option>
          </select>
        </div>
        <p class="mt-2 pt-2 text-gray-800 text-center">
          <nuxt-link :to="{ path: '/layer/' + this.slug }" tag="button" :disabled="this.disabled" class="bg-white bg-a100c-1-hover text-white text-bold drop-shadow text-center px-4 py-2 rounded-lg">View map</nuxt-link>
        </p>
      </div>
      <div class="mt-4 mb-4 bg-a100c-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2">
        <p class="text-gray-600">
          In a process of research, interviewing, mapping and contextualization, we have tried to understand how queer (sub)cultures have developed from its seperated LGBTI niches, with the focus on Bremen and the second half of the 1990s. This is a spotlight, they are so many other voices, narrations and traces, that hopefully will be collected and documented too.
        </p>
      </div>
      <div class="mt-4 mb-4 bg-a100c-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2">
        <p class="text-gray-600">
          This map is part of <a href="https://citydataexplosion.tumblr.com/intersections-and-constellations" target="_blank" class="text-link">Intersections + Constellations: „From gay to queer“</a>, 2021.<br />
          The content is mixed english and german.
        </p>
        <p class="mt-2 text-sm text-gray-600">
          We would be very happy about feedback and contributions.
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
      slug: '',
      layers_json_url: '',
      disabled: true
    }
  },
  mounted: function() {
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
      this.disabled = false;
    }
  },
  methods: {
    onChange(event) {
      if ( event.target.value != "Select a map") {
        this.slug = event.target.value;
        this.disabled = false;
      } else {
        this.disabled = true;

      }
    },
  }
}
</script>