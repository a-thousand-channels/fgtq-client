<style>
   .bg-a100c-1 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
   }
   .bg-a100c-1-hover {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.5) 0%, rgba(255,117,0,0.5) 50%, rgba(255,0,35,0.5) 100%);
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
   }
  button.text-link,
    a.text-link {
      text-decoration: none;
      background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.4em;
      background-position: 0 100%;
    }
</style>

<template>
<div id="page">
  <div class="relative flex items-top justify-center min-h-screen bg-pink-100 bg-a100c-1 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="flex justify-center pt-8 mt-8 sm:pt-0">

      </div>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          From Gay To Queer — A mapping by "Queer narratives, mapped"
        </h2>
      </div>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <p class="mt-2 pt-4 text-gray-800 text-center">
          <select id="layer-selector" v-on:change="onChange($event)" class="border bg-white rounded px-3 py-2 outline-none">
          {{layers}}
            <option>
              Select a map
            </option>
            <option v-for="layer in layers" :value="layer.url" class="py-1">
                {{layer.title}}
            </option>
          </select>
          <nuxt-link :to="{ path: '/main', hash:'map', query: { layer: this.custom_data_url }}" class="bg-red-400 bg-a100c-1 text-white text-center px-4 py-2 rounded-lg">View</nuxt-link>
        </p>
        <p class="mt-4 pt-4 text-gray-600">
          This map is work in progress. It is part of the <a href="https://citydataexplosion.tumblr.com/intersections-and-constellations" target="_blank" class="text-link">Intersections + Constellations: „From gay to queer“. Ein queeres Mapping Projekt.</a>
        </p>
        <p class="mt-4 pt-4 text-gray-600">
          Please feel free to try out. We would very happy about feedback and contributions.
        </p>
        <p class="mt-4 pt-4 text-gray-600">
          If you have questions or remarks to the content please contact us via <a href="mailto:queer-narratives-mapped@citydataexplosion.de" class="text-link">queer-narratives-mapped@citydataexplosion.de</a>.
        </p>
        <p class="mt-4 pt-4 text-gray-600">
          For questions about the website please visit the <a href="https://github.com/a-thousand-channels/a1000c-map-client" class="text-link">A 1000 Channels Github repository for this project</a> or send a mail to <a href="mailto:hello@a-thousand-channels.xyz" class="text-link">hello@a-thousand-channels.xyz</a>.
        </p>
      </div>
      <div class="flex justify-center p-4 m-2 space-x-2">
        <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
          A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁
        </a>
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
      layers_json_url: ''
    }
  },
  mounted: function() {
    console.log(this.$route.query.layer)
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
    }
    console.log(this.$route.query);

  },
  methods: {
    onChange(event) {
      this.custom_data_url = event.target.value;
      console.log(this.custom_data_url)
    }
  }
}
</script>