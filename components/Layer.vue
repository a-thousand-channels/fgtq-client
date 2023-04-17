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
      .border-transparent { border-color: transparent; }
    }
    button.text-link,
    a.text-link {
      text-decoration: none;
      background-image: linear-gradient(120deg,rgba(255,0,249,.35),rgba(255,117,0,.35) 50%,rgba(255,0,35,.35));
      background-repeat: no-repeat;
      background-size: 100% 0.4em;
      background-position: 0 100%;
      cursor: pointer;
    }

    body {
      scroll-behavior: smooth;
      overflow-y: hidden;
      overflow-x: auto;
    }
    #page {

    }
    #page_inner.a1000c-horizontal {
      height: 100%;
      display: flex;
      /* important */
      overflow-y: hidden;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-snap-stop: always;
    }
    #page_inner.a1000c-horizontal > .flex {
      flex-shrink: 0;
      width: 100vw;

      /* important */
      scroll-snap-align: center;

    }
    .nav {
      flex-shrink: 1;
      flex-basis: 4%;
      width: 20px;
      background-color: rgba(20,20,20,0);
      color: rgba(255,255,255,0.1);
      transition: 1.5s all;
    }
    .nav:hover {
      background-color: rgba(20,20,20,0.05);
      color: rgba(255,255,255,1);
      transition: 1s all;
    }
    .content {
    flex-shrink: 1;
    flex-basis: 98%;
    }
    #map #map_inner,
    #info #info_inner,
    #list #list_inner {
      height: auto;
      width: auto;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    #info > .content::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    #info > .content {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    #info #info_inner img {
      max-height: 45vh;
    }
    #map {
      align-items: stretch;
    }
    #map > .content {
    flex-shrink: 1;
    flex-basis: 95%;
    }
    #map #map_inner {
      width: 97%;
      height: 90%;
    }
    #map_title {
      float: left;
      margin-top: 200px;
      margin-top: 20px;
      margin-left: 20px;
      display: none;
    }
    #map #map_map {
      background-color: transparent;
      box-shadow: 0 0 0 white;
      border-color: rgba(255,255,255,0.2);
    }
    #map #map_map:hover {
      border-color: rgba(255,255,255,0.6);
    }
    #map #map_map.dark {
      background-color: rgba(68, 68, 68,0.9);
      border-color: transparent;
    }
    #map #modals_wrapper {
      display: none;
    }
    #map #modals_wrapper.is-active {
      display: block;
    }
    #map .marker-cluster-small {
      width: 35px;
      height: 35px;
      padding-top: 5px;
      background-color: rgba(200,100,100,0.5);
      background-color: rgba(100,100,100,0)
    }
    #map .marker-cluster-small div.marker-cluster-inner {
      width: 25px;
      height: 25px;
      margin-left: 5px;
      margin-top: 0;
      background-color: rgb(255,0,249);
      background-color: rgba(170,100,100,1);
      background-color: var(--markercluster-inner-color)
    }
    #map .curve_normal {
      stroke-width: 3;
      stroke-opacity: 0.25;
      transition: 0.25s all;
    }
    #map .curve_normal_active {
      stroke-width: 4 !important;
      stroke-opacity: 1;
      stroke: 'red';
      transition: 0.25s all;
    }
    #list #list_inner {
      width: 97%;
    }
    #list #list_inner .teaser-block p {
      @apply mb-4
    }
    #list #list_inner .annotation-text-block p {
      @apply md:text-lg mb-4
    }
   .bg-a100c-1 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
      background: linear-gradient(90deg, rgba(255,0,249,0.20) 0%, rgba(255,117,0,0.30) 50%, rgba(255,0,35,0.20) 100%);
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
      background: linear-gradient(90deg, rgba(255,0,35,0.20) 0%, rgba(255,0,249,0.20) 50%, rgba(255,117,0,0.30) 100% );
   }
   .bg-a100c-img {
      background-image: url(~/assets/client-splash-background-light.jpg);
      background-size: cover;
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
      background: linear-gradient(90deg, rgba(255,117,0,0.30) 0%, rgba(255,0,35,0.20) 50%, rgba(255,0,249,0.20) 100% );
   }
   .bg-a100c-3-text {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
   }
   #page.darkmode .bg-a100c-1 {
      background: rgb(71,43,47);
      background: linear-gradient(90deg, rgba(92,62,43,0.9) 0%, rgba(92,57,84,0.9) 50%, rgba(92,56,62,0.95) 100%);
   }
   #page.darkmode .bg-a100c-2 {
      background: rgb(71,43,47);
      background: linear-gradient(90deg, rgba(92,56,62,0.95) 0%, rgba(92,57,84,0.9) 50%, rgba(92,62,43,0.9) 100%);
      /* a bit darker */
      background: linear-gradient(90deg, rgba(71,43,47,0.95) 0%, rgba(80,49,73,0.9) 50%, rgba(71,47,33,0.9) 100%)
   }
   #page.darkmode .bg-a100c-3 {
      background: rgb(71,43,47);
      background: linear-gradient(90deg, rgba(255,117,0,0.30) 0%, rgba(255,0,35,0.20) 50%, rgba(255,0,249,0.20) 100% );
      background: linear-gradient(90deg, rgba(92,62,43,0.9) 0%, rgba(92,57,84,0.9) 50%, rgba(92,56,62,0.95) 100%);
   }
   #page.darkmode .bg-a100c-3-text {
      background: rgb(71,43,47);;
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
   }
   .bg-a100c-white {
      background-color: rgba(255,255,255,0.8);
   }
   .bg-red-100 {

   }
   .text-gray, .text-gray-500 {
     color: rgba(0,0,0,0.6);
   }
   .text-gray:hover, .text-gray-500:hover {
     color: rgba(0,0,0,0.9);
   }
   .text-white {
      color: rgba(255,255,255,0.8);
      text-shadow: 0 0 0 #ddd;
   }
   .text-white:hover {
      color: rgba(255,255,255,1);
      text-shadow: 0 0 3px #bbb;
   }
   .border-white {
      border-color: rgba(255,255,255,1);

   }
   .inline { display: inline-block; }
   .swiper-container {
      max-width: 85vw;
      overflow: hidden;
      /* background-color: silver; */
   }

   .vue2leaflet-map {
      z-index: 39;
    }

   .leaflet-container {
      background-color: rgba(255,255,255,0.3);
      background-color: rgba(55, 55, 55, 0.3);
      background-color: transparent;
   }
   .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar {
      background-clip: padding-box;
      border-radius: 0;
      background-color: transparent;
      border: 2px solid white;
      border-color: rgba(255,255,255,0);
      transition: 1s all;

      line-height: 0;
      /* display:  none; */
    }
    #map_map:hover .leaflet-touch .leaflet-control-layers,
    #map_map:hover .leaflet-touch .leaflet-bar {
      border-color: rgba(255,255,255,0.65);
      border-color: rgba(255,255,255,0.15);
      transition: 1s all;
      color: #444;

    }
    #map_map .leaflet-touch .leaflet-control-attribution {
      display:  none;
    }
    #map_map .leaflet-control-zoom-in, .leaflet-control-zoom-out {
      background-color: transparent;
      border: none;
    }
    #map_map  .leaflet-bar a, #map_map .leaflet-bar a:hover {
      background-color: transparent;
      color: rgba(250,250,250,0.45);
      transition: 1s all;
    }
    #map_map:hover .leaflet-bar a, #map_map:hover .leaflet-bar a:hover {
      background-color: transparent;
      color: rgba(250,250,250,0.75);
      transition: 1s all;
    }
    #map_map  .leaflet-control button svg path, #map_map .leaflet-control button:hover svg path,
    #map_map  .leaflet-control button svg circle, #map_map .leaflet-control button:hover svg circle
    {
      background-color: transparent;
      fill: rgba(250,250,250,0.45);
      transition: 1s all;
    }
    #map_map:hover .leaflet-control button svg path, #map_map:hover .leaflet-control button:hover svg path,
    #map_map:hover .leaflet-control button svg circle, #map_map:hover .leaflet-control button:hover svg circle
    {
      background-color: transparent;
      fill: rgba(250,250,250,0.75);
      transition: 1s all;
    }
    .leaflet-touch .leaflet-control-layers-toggle {

      }
    #map_map .leaflet-control-layers-toggle {
      background-image: url("data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOS44MjY1MzA1bW0iCiAgIGhlaWdodD0iOS44MjY1MzE0bW0iCiAgIHZpZXdCb3g9IjAgMCA5LjgyNjUzMDQgOS44MjY1MzE0IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyMzQyOSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjEgKDNiZjVhZTBkMjUsIDIwMjEtMDktMjApIgogICBzb2RpcG9kaTpkb2NuYW1lPSJhMTAwMC1yZW1peC1pY29uLS1zdGFjay5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyMzQyNiIgLz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzcuNTM3NzczLC0xMTAuODc1NDcpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDp0cmFuc3BhcmVudDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4xNzM0NjkiCiAgICAgICBpZD0icmVjdDE4NTgtNTAtMyIKICAgICAgIHdpZHRoPSI5LjgyNjUzMDUiCiAgICAgICBoZWlnaHQ9IjkuODI2NTMxNCIKICAgICAgIHg9Ijc3LjUzNzc3MyIKICAgICAgIHk9IjExMC44NzU0NyIgLz4KICAgIDxnCiAgICAgICBpZD0iZzk4Ny00LTIiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjMxMzg3NTU2LDAsMCwwLjMyMDU0MTYyLDc4LjY4NDUzNywxMTEuOTQyMjMpIj4KICAgICAgPHBhdGgKICAgICAgICAgZmlsbD0ibm9uZSIKICAgICAgICAgZD0iTSAwLDAgSCAyNCBWIDI0IEggMCBaIgogICAgICAgICBpZD0icGF0aDk3NS02LTQiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMjAuMDgzLDE1LjIgMS4yMDIsMC43MjEgYSAwLjUsMC41IDAgMCAxIDAsMC44NTggbCAtOC43Nyw1LjI2MiBhIDEsMSAwIDAgMSAtMS4wMywwIGwgLTguNzcsLTUuMjYyIGEgMC41LDAuNSAwIDAgMSAwLC0wLjg1OCBMIDMuOTE3LDE1LjIgMTIsMjAuMDUgWiBtIDAsLTQuNyAxLjIwMiwwLjcyMSBhIDAuNSwwLjUgMCAwIDEgMCwwLjg1OCBMIDEyLDE3LjY1IDIuNzE1LDEyLjA3OSBhIDAuNSwwLjUgMCAwIDEgMCwtMC44NTggTCAzLjkxNywxMC41IDEyLDE1LjM1IFogbSAtNy41NjksLTkuMTkxIDguNzcxLDUuMjYyIGEgMC41LDAuNSAwIDAgMSAwLDAuODU4IEwgMTIsMTMgMi43MTUsNy40MjkgYSAwLjUsMC41IDAgMCAxIDAsLTAuODU4IGwgOC43NywtNS4yNjIgYSAxLDEgMCAwIDEgMS4wMywwIHogTSAxMiwzLjMzMiA1Ljg4Nyw3IDEyLDEwLjY2OCAxOC4xMTMsNyBaIgogICAgICAgICBpZD0icGF0aDk3Ny0wLTciIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K")
   }
   .leaflet-tooltip-top::before {
        bottom: 0;
        margin-bottom: -12px;
        border-top-color: none;
    }
   .leaflet-tooltip-bottom::before, .leaflet-tooltip-top::before {
        left: 50%;
        margin-left: -6px;
    }
   .leaflet-tooltip-top::before, .leaflet-tooltip-bottom::before, .leaflet-tooltip-left::before, .leaflet-tooltip-right::before {
      position: absolute;
      pointer-events: none;
      border: 6px solid transparent;
      border-top-color: transparent;
      background: transparent;
      content: "";
    }
    .leaflet-tooltip-top {
        margin-top: -20px;
    }
    .leaflet-tooltip {
        position: absolute;
        padding: 3px 8px;
        background-color: rgba(252, 164, 148, 0.75);
        background-color: rgba(252, 84, 128, 0.55);
        background: linear-gradient(90deg, rgba(255,117,0,0.55) 0%, rgba(255,0,35,0.55) 50%, rgba(255,0,249,0.55) 100% );
        border: 0px solid #fff;
        border-radius: 0;
        color: #fff;
        font-family: monospace;
        white-space: nowrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .leaflet-pane > svg path.leaflet-interactive {
      filter: drop-shadow( 0 0 1px rgba(0,0,0,.2));
    }
    .leaflet-data-outside-marker svg circle {
        fill: rgb(186, 185, 185);
        opacity: 1;
    }

    /* hotfix for display error #40 */
    div#page_inner {
      @apply border-solid border-2 border-transparent
    }

    /* darkmode */
    #page.darkmode h3, #page.darkmode h4, #page.darkmode p, #page.darkmode button, #page.darkmode a,
    #page.darkmode .text-gray-800 {
      color: rgba(255,255,255,0.9);
    }
    #page.darkmode .bg-red-100 {
      background-color: rgba(55, 55, 55, 0.3);
   }
   #page.darkmode #map_map:hover {
      border-color: rgba(255,255,255,0.2);
    }

</style>

<template>
<div id="page" :class="viewmode == 'Dark mode' ? 'darkmode' : ''">
   <style>
    :root {
      --markercluster-inner-color: {{ markerClusterInnerColor }};
    }
  </style>

  <div v-if="$fetchState.pending" class="z-50 flex h-screen w-screen absolute items-center justify-center flex-col text-sm text-red-300">
    <p class="block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="rgba(253, 164, 175, 1)" d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 0 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"/></svg></p>
    <p>Loading places …</p>
  </div>
  <div v-else-if="$fetchState.error" class="z-50 flex h-screen w-screen absolute items-center justify-center flex-col text-sm text-red-300">Please wait …</div>
  <div id="page_inner" class="flex a1000c-horizontal" ref="scroll_container">
    <section ref="info" id="info" class="flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0 sm:pb-8">
      <div class="content flex items-top overflow-x-auto">
        <div id="info_inner" class="bg-opacity-30 my-4 mx-5">
          <p v-if="$fetchState.pending" class="text-sm text-red-300">…</p>
          <p v-else-if="$fetchState.error" class="text-sm text-red-300">…</p>
          <div v-else>
            <info :data="this.data"></info>
          </div>
        </div>
      </div>
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/layer' + this.slug_for_link, hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold">
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
        </nuxt-link>
      </div>
    </section>

    <section ref="map" id="map" class="flex min-h-screen max-h-screen bg-a100c-2">
      <div class="nav flex flex-col content-center">
        <nuxt-link :to="{ path: '/layer' + this.slug_for_link, hash:'info'}" class="flex h-full self-center items-center justify-center text-white font-bold">
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </nuxt-link>
      </div>


      <div class="content items-center justify-center">
        <div id="map_header" class="block">
          <p v-if="$fetchState.pending" class="text-sm text-red-300">…</p>
          <p v-else-if="$fetchState.error" class="text-sm text-red-300">…</p>
          <div v-else>
            <p id="map_header_content" class="text-sm text-red-300">
              <nuxt-link :to="{ path: '/'}" class="text-red-300">From Gay To Queer</nuxt-link>
              <span v-if="this.slug">
                —
                <nuxt-link :to="{ path: '/layer' + this.slug_for_link, hash: 'info'}">{{ this.data.title }}</nuxt-link>
              </span>
            </p>
          </div>
          <p>
            <button class="hidden" v-shortkey="['arrowup']" @shortkey="navigate_top()">
              <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"/></svg>
            </button>
            <button class="hidden" v-shortkey="['arrowleft']" @shortkey="navigate_left()">
              <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
            </button>
            <button class="hidden" v-shortkey="['arrowright']" @shortkey="navigate_right()">
              <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
            </button>
          </p>
        </div>
        <div id="map_title" class="inline-block bg-a100c-white rounded shadow py-2 px-2 sm:px-2 lg:px-4 lg:py-4">
           <h2 class="block font-semibold text-1xl px-4 py-1 lg:px-8">
              <nuxt-link :to="{ path: '/'}" class="">From Gay To Queer</nuxt-link>
              —
            <nuxt-link :to="{ path: '/'}" class="text-a100c-1">
              {{ data.title }}
            </nuxt-link>
          </h2>
        </div>
        <div id="map_inner" class="h-full bg-opacity-0 my-1 mx-1">
          <div id="map_map" class="h-full w-full border-solid border-2 border-white shadow z-40">
           <client-only>
                <l-map :zoom="this.mapzoom" :minZoom=2 :maxZoom=20 :center="this.mapcenter" ref="map" @ready="onMapReady">
                  <l-control-layers position="topright"></l-control-layers>

                  <l-marker-cluster
                      :options="clusterOptions"
                  >
                      <l-circle-marker
                        v-for="(place, index) in this.places"
                        :key="'marker-' + index"
                        :lat-lng="[place.lat,place.lon]"
                        :radius="circle.radius"
                        :color="circle.color"
                        :stroke="circle.stroke"
                        :fillColor="place.color"
                        :fillOpacity="circle.fillopacity"
                        :bubblingMouseEvents=false
                        @click="handleMarkerClick"
                        @mouseover="handleMarkerHover"
                        :id="index"
                        :options="{ title: 'marker-' + place.id, id: place.id, place_index: place.place_index, layer_index: place.layer_index, layer_title: place.layer_title }"
                      >
                        <l-tooltip :content="place.title" :options="{ permanent: false, sticky: false, direction: 'top' }" />
                      </l-circle-marker>

                      <span v-for="(place, index) in this.places_with_relations">
                        <l-circle-marker
                          v-for="(relation, iindex) in place.relations"
                          v-if="relation.to.lat && ( relation.to.layer_id != relation.from.layer_id )"
                          :key="'marker-relation-' + index + '-' + iindex"
                          :lat-lng="[relation.to.lat,relation.to.lon]"
                          :radius="circle.radius"
                          :color="circle.color"
                          :stroke="circle.stroke"
                          :fillColor="outsideMarkerColor"
                          :fillOpacity="circle.fillopacity"
                          :bubblingMouseEvents=false
                          @click="handleMarkerClick"
                          :id="iindex"
                          :options="{ title: 'marker-relation' + relation.to.id, id: relation.to.id, place_index: relation.to.place_index, layer_index: relation.to.layer_index, layer_title: relation.to.layer_title }"
                        >
                          <l-tooltip :content="'See also: ' + relation.to.title" :options="{ permanent: false, sticky: false, direction: 'top' }" />
                        </l-circle-marker>
                      </span>

                  </l-marker-cluster>

                  <div class="leaflet-bottom leaflet-left">
                    <div class="leaflet-control leaflet-control-layers">
                      <button class="" v-on:click="centerMap()" title="Center map"><svg width="9.8265mm" height="9.8265mm" version="1.1" viewBox="0 0 9.8265 9.8265" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-154.92 -71.428)"><rect x="154.92" y="71.428" width="9.8265" height="9.8265" fill="transparent"/><g transform="matrix(.90179 0 0 .90179 170.41 131.3)"><path d="m-13.24-60.949-1.6667 1.6667-0.33329-0.33329 1.3334-1.3334-1.3334-1.3334 0.33329-0.33306z"/><path d="m-10.208-60.949 1.6667-1.6667 0.33329 0.33329-1.3334 1.3334 1.3334 1.3334-0.33329 0.33306z"/><circle cx="-11.724" cy="-60.949" r=".75"/></g></g></svg></button>
                    </div>
                  </div>
               </l-map>
           </client-only>
          </div>
        </div>
      </div>
      <p v-if="$fetchState.pending" class="text-sm text-red-300">...</p>
      <p v-else-if="$fetchState.error" class="text-sm text-red-300">...</p>
      <div v-else id="modals_wrapper" class="sm:absolute sm:top-4 sm:right-4" :class="{ 'is-active' : this.data.state }">
        <place-modals :layers="this.layers" :layer="this.data.layer" :data="this.data" :metalevel="this.metalevel" :related_places_from_other_layers="this.related_places_from_other_layers"></place-modals>
      </div>

      <div class="nav flex flex-col  items-center content-center justify-center">
        <nuxt-link :to="{ path: '/layer' + this.slug_for_link, hash:'list'}" class="flex h-full self-center items-center justify-center text-white font-bold">
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
        </nuxt-link>
      </div>
    </section>

    <section ref="list"  id="list" class="flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0">
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/layer' + this.slug_for_link, hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold">
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </nuxt-link>
      </div>
      <div id="list_content" class="content flex items-top overflow-x-auto pb-10">
          <div id="list_inner" class="bg-opacity-30 my-0 mx-0 mr-6 sm:my-4 sm:mx-5">
            <p v-if="$fetchState.pending" class="text-sm text-red-300">…</p>
            <p v-else-if="$fetchState.error" class="text-sm text-red-300">…</p>
            <div v-else>
              <list :places="this.list_content" :places_with_relations="this.places_with_relations" :layerindex="this.list_content_layer_index" :data="this.data" :map="this.mapobj" :layers="layers"></list>
            </div>
        </div>
      </div>
    </section>

    <keys-navigation v-show="key_navigation_visible" ></keys-navigation>
  </div>
</div>
</template>

<script>
import axios from "axios";
import List from '~/components/List.vue';
import Info from '~/components/Info.vue';
import PlaceModals from '~/components/Place-modals.vue';
import KeysNavigation from '~/components/Keys-navigation.vue';

export default {
  name: "App",
  props: {
    layers: {
      type: Object,
      required: true
    },
  },
  transition: {
    name: "bounce",
    mode: "in-out", // default is out-in
    appear: true, // default is false
  },
  watch: {
    '$route.query': '$fetch'
  },
  head() {
      return {
        title: this.title + "From Gay To Queer",
        meta: [
          {
            name: 'og:title',
            content: this.title + "From Gay To Queer",
          },
          {
            hid: 'description',
            name: 'description',
            content: this.subtitle
          },
          {
            name: 'og:description',
            content: this.subtitle
          },
          {
            name: 'og:site_name',
            content: this.title
          },
          {
            name: 'og:image',
            content: 'https://from-gay-to-queer.net/fromgaytoqueer_sharepic-nightmode.png'
          }
        ]
      }
  },
  mounted: function() {
    console.log("Mounted****")
    if ( localStorage.getItem('viewmode') ) {
      this.viewmode = localStorage.getItem('viewmode')
    }
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
    }
    const referrer = document.referrer;
    const currentUrl = window.location.href;
    console.log("refferer: "+referrer)
    console.log("currentUrl: "+currentUrl)
    if (referrer && currentUrl.includes(referrer)) {
      // User clicked on an internal link to get to this page
      console.log('Internal link to get to the contact page');
    } else {
      // User typed the URL directly in the browser to get to this page
      console.log('User typed the URL directly in the browser to get to the contact page');
    }
    this.jumpToMap();
  },
  data() {
      return {
        mapobj: null,
        dataobj: {},
        data: {},
        places: [],
        all_places: [],
        places_with_relations: [],
        related_places_from_other_layers: [],
        list_content: [],
        list_content_layer_title: '',
        list_content_layer_index: 0,
        tooltip: {},
        slug: this.$route.params.slug || '',
        slug_for_link: '/' + this.$route.params.slug || '',
        metalevel: false,
        title: '',
        subtitle: '',
        data_url: '',
        default_data_url: 'https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer.json',
        custom_data_url: '',
        mapcenter: [53.075878, 8.807311],
        mapzoom: 12,
        circle: {
          radius: 14,
          color: 'transparent',
          fillcolor: 'rgba(242, 71, 38, 1)',
          fillopacity: 0.95
        },
        outsideMarkerColor: "rgb(186, 185, 185)",
        markerClusterInnerColor: '#cc0000',
        clusterOptions: {
          maxClusterRadius: 5,
          zoomToBoundsOnClick: true,
          spiderfyOnMaxZoom: true,
          showCoverageOnHover: false,
          spiderLegPolylineOptions: { weight: 5, color: '#c67d87', opacity: 0.7 },
          spiderfyDistanceMultiplier: 1,
          iconCreateFunction: function(cluster) {
              return L.divIcon({
                html: '<div class=\'marker-cluster marker-cluster-small marker-cluster-layer-1\'><div class=\'marker-cluster-inner\'></div></div>',
                className: 'leaflet-data-markercluster',
                iconAnchor  : [15, 15],
                iconSize    : [30, 30],
                popupAnchor : [0, -28]
              });
            },
        },
        key_navigation_visible: true,
        viewmode: 'Dark mode'
      }
  },
  fetchOnServer: false,
  async fetch() {

    /* first case: layer is defined via URL like /layer/slug */
    if ( this.slug ) {
      if (( this.slug !== 'undefined' ))  {
        console.log("Select data via Slug "+this.slug)
        this.layer = Object.values(this.layers).find(layer => layer.slug === this.slug);
        if ( this.layer.url ) {
          this.custom_data_url = this.layer.url
          localStorage.setItem('layer', this.custom_data_url)
        }
      } else {
        console.log("Don't select data if slug is undefined")
        this.metalevel = true
        this.slug = ''
        this.slug_for_link = ''
        localStorage.setItem('layer', '')
        // this.$router.push({ path: '/layer/', hash: '#map' })
      }
    } else  {
      this.metalevel = true
      this.slug = ''
      this.slug_for_link = ''
      localStorage.setItem('layer', '')
    }
    /* first case: layer is defined via URL like ?layer=URL */
    if (this.$route.query.layer ) {
      console.log("Select data via URL param")
      this.custom_data_url = this.$route.query.layer
      localStorage.setItem('layer', this.$route.query.layer)
    } else if ( localStorage.getItem('layer')) {
      console.log("Select data via Localstorage")
      this.custom_data_url = localStorage.getItem('layer')
    } else {
      console.log("Select fallback or fail")
      this.custom_data_url = this.default_data_url

    }
    console.log('Start to fetch...')
    console.log(this.custom_data_url)
    console.log(this.dataobj)
    console.log(this.dataobj.map)

    if ( this.custom_data_url.length > 0 ) {
      this.data_url = this.custom_data_url
    } else if ( this.default_data_url.length > 0 ) {
      this.data_url = this.default_data_url
    } else {
      // window.location = "/"
    }
    console.log(this.data_url)

    if ( this.dataobj.map ) {
      console.log('Fetching skipped ...')
    } else {
      this.dataobj = await axios.get(this.data_url).then(response =>
        response.data
      )
      console.log('Fetch success ...')
    }


    // check if its a map
    if ( this.dataobj.map ) {
      this.data = this.dataobj.map
      this.places = []
      console.log("Data for a map with " + this.data.layer.length + " accessible layers")
      this.data.layer.forEach ((layer, key) => {
        this.places.push(...layer.places);
        this.places_with_relations.push(...layer.places_with_relations);
      });
      console.log("Map with "+this.places.length+" places and "+this.data.layer.length+" layers")

      // add state value to all places
      this.data.layer.forEach ((layer, lkey) => {
        for (let i = 0; i < layer.places.length; i++) {
          if ( i=== 0) {
            this.$set(layer.places[i], 'state', false)
          } else {
            this.$set(layer.places[i], 'state', false)
          }
          this.$set(layer.places[i], 'layer_id', layer.id)
          this.$set(layer.places[i], 'layer_index', lkey)
          this.$set(layer.places[i], 'place_index', i)
          this.$set(layer.places[i], 'color', layer.color)
        }
      })

    // or a layer
    } else {
      console.log("Data for a single layer")
      this.data = this.dataobj.layer
      this.data.layer = []
      this.data.layer[0] = this.dataobj.layer

      if (this.data.mapcenter_lat && this.data.mapcenter_lon ) {
        this.mapcenter = [this.data.mapcenter_lat, this.data.mapcenter_lon]
      }
      if (this.data.zoom ) {
        this.mapzoom = this.data.zoom
      }
      console.log("Data for a map with " + this.data.layer.length + " accessible layer")
      this.places = this.data.places
      this.places_with_relations = this.data.places_with_relations
      console.log(this.places_with_relations)
      this.list_content = this.data.places
      console.log("Layer Map with "+this.places.length+" places and "+this.places_with_relations.length+" Relation sets")

      // add state value to all places
      for (let i = 0; i < this.data.places.length; i++) {
        if ( i=== 0) {
          this.$set(this.data.places[i], 'state', false)
        } else {
          this.$set(this.data.places[i], 'state', false)
        }
        // disabled, since it destroys the see also function at list.vue, t.b.c.
        // this.$set(this.data.places[i], 'layer_id', this.data.layer.id)
        this.$set(this.data.places[i], 'layer_index', 0)
        this.$set(this.data.places[i], 'place_index', i)
        this.$set(this.data.places[i], 'color', this.data.color)
      }
      for (let i = 0; i < this.data.places_with_relations.length; i++) {
        for (let ii = 0; ii < this.data.places_with_relations[i].relations.length; ii++) {
          let relation = this.data.places_with_relations[i].relations[ii];
          if ( relation.to.layer_id != relation.from.layer_id ) {
            this.$set(relation.to, 'state', false)
            let layer_index = Object.values(this.layers).find(layer => layer.id === relation.to.layer_id.toString());
            console.log('layer_index for '+relation.to.layer_id+': '+layer_index.uid)
            this.$set(relation.to, 'layer_index', layer_index.uid)
            this.related_places_from_other_layers.push(relation.to)
          }
        }
      }
      console.log(this.related_places_from_other_layers)
    }

    if ( (this.data) && (this.places) && (this.$refs.map) ) {
      this.title = this.data.title + " — "
      this.subtitle = this.data.subtitle || ''
      if ( this.places.length > 0 ) {
        // console.log("afterFetch: fitBounds w/"+this.places.length)
        // this.$refs.map.mapObject.fitBounds(this.places.map(m => { return [m.lat, m.lon] }))
      } else {
        console.log("afterFetch: NO fitBounds w/"+this.places.length)
      }
      if ( this.data.layer ) {
        console.log("Check for data.layer w/"+this.data.layer.length+ " layer(s). Call drawCurves")
        if ( this.metalevel ) {

          this.drawCurves();
        } else {
          this.drawCurves();
          // set divicon cluster color per layer color
          this.markerClusterInnerColor = this.data.color
        }
      }
    }
    this.$set(this.data, 'state', false)
    console.log('Fetch ready...')

    // exposes $fetchState with .pending and .error
    // TODO: For static hosting , the fetch hook is only called during page generation!!
  },
  methods: {
    onLayerReady(mapObject) {
      this.mapobj = mapObject;
      console.log(this.mapobj)

    },
    onLayerVisible(id) {
      this.id = id;
      console.log("onLayerVisible");
    },
    onTileLayerVisible(basemap) {
      console.log("onTileLayerVisible");
      console.log(basemap)

    },
    onMapReady(mapObject) {
      this.$nextTick(() => {
        this.mapobj = mapObject;
        if ( (this.data) && (this.places) && (this.$refs.map) ) {
          if ( this.places.length > 0 ) {
            // use bremen as center for ever :)
            console.log("onMapReady: fitBounds w/"+this.places.length)
            // this.$refs.map.mapObject.fitBounds(this.places.map(m => { return [m.lat, m.lon] }))
          } else {
            console.log("onMapReady: NO fitBounds w/"+this.places.length)
          }


          const controlelements = document.getElementsByClassName('leaflet-top leaflet-right');
          var elements = controlelements[0].getElementsByClassName('leaflet-control-layers');
          // remove content layers
          controlelements[0].removeChild(elements[0]);

          var openstreetmap_layer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Openstreemap + Contributors' })
          var simple_basemap_pop_grey_layer = L.tileLayer('https://tiles.3plusx.io/world_populated_places/lightpink/{z}/{x}/{y}.png', {attribution: ''}).addTo(this.$refs.map.mapObject);
          // var simple_basemap_pop_grey_layer = L.tileLayer('https://tiles.3plusx.io/world_populated_places/lightpink_with_bremen_streets/{z}/{x}/{y}.png', {attribution: ''}).addTo(this.$refs.map.mapObject);
          var simple_basemap_pop_yellow_layer = L.tileLayer('https://tiles.3plusx.io/world_populated_places/lightyellow/{z}/{x}/{y}.png', {attribution: ''})

          /*
          var m = document.getElementById("map_map");
          m.classList.add("dark");
          */
          var baseMaps = {
              "Basemap": simple_basemap_pop_grey_layer,
              "Basemap (dark)": simple_basemap_pop_yellow_layer
          };


          /* L.control.layers(baseMaps).addTo(this.$refs.map.mapObject); */

          this.mapobj.on('baselayerchange', function(e) {
            console.log('Changed to ' + e.name);
            var m = document.getElementById("map_map");
            if ( ( e.name =='Basemap (dark)') ) {
              m.classList.add("dark");
            } else {
              m.classList.remove("dark");

            }
          });
          if ( this.data.layer ) {
            // console.log("Check for data.layer w/"+this.data.layer.length+ " layer(s)")
            // this.drawCurves();
          }
        }
      })
    },
    drawCurves() {
        var curves_layer = L.layerGroup().addTo(this.mapobj);
            this.data.layer.forEach ((layer, lkey) => {
              if ( layer.places_with_relations ) {
                layer.places_with_relations.forEach ((place, key) => {

                  // console.log("places_with_relations: "+place.relations.length);

                  place.relations.forEach ((relation, kkey) => {

                    // if ( relation.from.layer_id == relation.to.layer_id) {

                      var point1 = [Number(relation.from.lat), Number(relation.from.lon)];
                      var point2 = [Number(relation.to.lat), Number(relation.to.lon)];

                      var length = this.$refs.map.mapObject.distance(point1, point2)/1000;
                      var color = "hsl(" + Math.random() * 360 + ", 100%, 85%)";
                      // var color = clustercolor;
                      if ( layer.color ) {
                        color = layer.color
                      }
                      var pathOptions = {
                              color: color,
                              weight: 6,
                              opacity: 0.25,
                              className: 'curve_normal curve_'+relation.from.id+' curve_'+relation.to.id,
                              animate: false
                      }
                      var controlpoint = this.calcControlPoint(point1,point2,length)

                      var curvedPath = L.curve(
                        [
                          'M', point1,
                          'Q', controlpoint,
                             point2
                        ], pathOptions).addTo(curves_layer)

                      // draw endpoint, if it resides on an different layer
                        var iconSettings = {
                            mapIconUrl: "<svg height='{radius}' width='{radius}' xmlns='http://www.w3.org/2000/svg'><circle cx='15' cy='15' r='15' fill='{color}' fill-opacity='{opacity}' shape-rendering='geometricPrecision'></circle></svg>",
                            color: color,
                            opacity: 0.7,
                            radius: 30
                        };
                        var divIcon = L.divIcon({
                          className: "leaflet-data-outside-marker",
                          html: L.Util.template(iconSettings.mapIconUrl, iconSettings), //.replace('#','%23'),
                          iconAnchor  : [15, 15],
                          iconSize    : [30, 30],
                          popupAnchor : [0, -28]
                        });
                        if ( relation.from.layer_id != relation.to.layer_id) {

                          // TODO: add @click="handleMarkerClick"
                           var endpoint2_marker = L.marker(point2, {icon: divIcon}).bindTooltip(relation.to.title, {
                            permanent: false,
                            direction: 'top'
                          }); //.on('click', this.handleMarkerClick).addTo(curves_layer);
                           /* this is not reactive... handle endpoint marker in l-map object */

                        }
                      // }
                  });
                });
              }
            });

    },
    calcControlPoint(point1,point2,distance_in_kms) {
      var boost = 2.9;
      var d = 2;
      // if transcontinental
      if ( distance_in_kms > 5000 ) {
        d = 3
      // if continental
      } else if ( distance_in_kms > 1000 ) {
        d = 5
      // if regional
      } else if ( distance_in_kms > 100 ) {
        d = 5
      // if local
      } else if ( distance_in_kms > 10 ) {
        d = 10
      // if close
      } else if ( distance_in_kms > 5 ) {
        d = 40
      } else if ( distance_in_kms > 1 ) {
        d = 120
      } else if ( distance_in_kms <= 1 ) {
        d = 8000 // sic!
      }

      var offsetX = point2[1] - point1[1],
      offsetY = point2[0] - point1[0];
      var r = Math.sqrt( Math.pow(offsetX, 0) + Math.pow(offsetY, 2) ),
                theta = Math.atan2(offsetY, offsetX);
      var thetaOffset = (3.14/boost);
      var r2 = (r/d)/(Math.cos(thetaOffset)),
                theta2 = theta + thetaOffset;
      var midpointX = (r2 * Math.cos(theta2)) + point1[1],
                midpointY = (r2 * Math.sin(theta2)) + point1[0];
      return [midpointY, midpointX];
    },
    centerMap() {
      console.log("centerMap")
      this.$refs.map.mapObject.flyTo(this.mapcenter,this.mapzoom);
    },
    recenterMap(lat,lon) {
      // this.$refs.map.mapObject.panTo(lat,lon);
      this.$nextTick(() => {
        console.log("recenter map to "+ lat +"/"+lon);
        this.$router.push({ path: '/layer/' + this.slug, hash: '#map' });
        this.$refs.map.mapObject.flyTo([lat,lon],16);
      })
    },
    jumpToMap() {
      console.log("jumpToMap " + this.$route.hash )
      if ( this.slug && ( this.slug !== 'undefined') && ( this.slug !== '/')) {
          console.log('Slug '+this.slug+' seems known')
        if ( this.$route.hash === '#info' ) {
          console.log('Jump to '+this.$route.hash)
          this.$router.push({ path: '/layer/' + this.slug, hash: 'info' })
          location.hash = this.$route.hash;
        } else if ( this.$route.hash === '#list' ) {
          console.log('Jump to '+this.$route.hash)
          this.$router.push({ path: '/layer/' + this.slug, hash: 'list'  })
          location.hash = this.$route.hash;
        } else {
          this.$router.push({ path: '/layer/' + this.slug })
          location.hash = '#map';
        }
      } else {
        console.log('No known slug')
        // jump in all three cases to map, the only stable version for now
        if ( this.$route.hash === '#info' ) {
          console.log('Jump to '+this.$route.hash)
          this.$router.push({ path: '/layer', hash: 'info' })
          location.hash = this.$route.hash;
        } else if ( this.$route.hash === '#list' ) {
          console.log('Jump to '+this.$route.hash)
          this.$router.push({ path: '/layer', hash: 'list'  })
          location.hash = this.$route.hash;
        } else {
          this.$router.push({ path: '/layer', hash:'map' })
          location.hash = '#map';
        }

      }
    },
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
        // this.$router.push({ path: '/layer/' + this.slug, hash: to })
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
        // this.$router.push({ path: '/layer/' + this.slug, hash: to })
        location.hash = to;
      }
    },
    handleMarkerHover(e) {
      console.log("onMouseover for ID: " + e.target.options.id + " -- "+ e.target.options.title);
      let all_curves = document.getElementsByClassName('curve_normal');
      Array.prototype.forEach.call(all_curves, function(element) {
        element.classList.remove('curve_normal_active');
        element.style.strokeWidth = 3;
        element.style.strokeOpacity = 0.25;
      });
      let el = document.getElementsByClassName('curve_'+e.target.options.id);
      // console.log(el);
      if ( el.length > 0 ) {
        el[0].classList.add('curve_normal_active');
        el[0].style.strokeWidth = 4;
        el[0].style.strokeOpacity = 0.75;
      }

    },
    handleMarkerClick(e) {
      // toggleModal
      this.key_navigation_visible = false;
      console.log("onClick for ID " + e.target.options.id + " -- " + e.target.options.title);
      console.log("LayerIndex " + e.target.options.layer_index + " -- PlaceIndex " + e.target.options.place_index);
      // console.log(this.data);

      if ( e.target.options.title ) {

        // set all state to false
        for (let i = 0; i < this.places.length; i++) {
          this.$set(this.places[i], 'state', false)
        }
        for (let i = 0; i < this.related_places_from_other_layers.length; i++) {
          this.$set(this.related_places_from_other_layers[i], 'state', false)
        }

        var clicked_place = this.places.find( place => place.id === e.target.options.id )

        if ( clicked_place ) {
          var clicked_place_index = this.places.findIndex( place => place.id === e.target.options.id )
          console.log("Clicked place: "+clicked_place.title+" :: place ID: "+clicked_place.id+" :: index: "+e.target.options.place_index)
          console.log("Clicked layer title: "+e.target.options.layer_title+" :: index (via target.options): "+e.target.options.layer_index)
          // show modal
          this.places[clicked_place_index].state = !this.places[clicked_place_index].state;
          this.data.state = true;
          this.data.layer[parseInt(e.target.options.layer_index)].places[parseInt(e.target.options.place_index)].state = !this.data.layer[parseInt(e.target.options.layer_index)].places[parseInt(e.target.options.place_index)].state.state;
          // if in map mode: show place content in the list view!
          this.list_content = []
          this.list_content.push(this.places[clicked_place_index])
          this.list_content_layer_title = e.target.options.layer_title
          this.list_content_layer_index = parseInt(e.target.options.layer_index)
          console.log("Clicked layer index (via list): "+this.list_content_layer_index)
        } else {
          console.log('Place from a different layer');
          // to proceed, we'd need more other_layer infos, like title...
          // for tooltip: Layer.title + Place.title
          // for linking, call modal: modal must be generated

          console.log(this.related_places_from_other_layers)

          this.related_places_from_other_layers.forEach ((relation_to, index) => {

             if ( relation_to.id === e.target.options.id ) {
                clicked_place = relation_to
                clicked_place_index = index
            }
          })
          // TODO: layer title and deeplink

          console.log("Clicked place: "+clicked_place.title+" :: place ID: "+clicked_place.id+" :: index: "+clicked_place_index);
          this.related_places_from_other_layers[clicked_place_index].state = !this.related_places_from_other_layers[clicked_place_index].state;
          this.data.state = true;
        }
      }
    }
  },
  computed: {

  }
};
</script>
