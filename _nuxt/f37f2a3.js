(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(t){t.exports=JSON.parse('{"0":{"uid":0,"id":"57","slug":"manu","title":"Manu","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/manu.json"},"1":{"uid":1,"id":"59","slug":"ulf","title":"Ulf","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/ulf.json"},"2":{"uid":2,"id":"60","slug":"thomas-b","title":"Thomas B","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/thomas.json"},"3":{"uid":3,"id":"61","slug":"arno","title":"Arno","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/arno.json"},"4":{"uid":4,"id":"62","slug":"marcio","title":"Marcio","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/marcio.json"},"5":{"uid":5,"id":"63","slug":"tunten-terror-tour-93","title":"Tunten Terror Tour \'93","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/tunte-terror-tour-93.json"},"6":{"uid":6,"id":"64","slug":"annette","title":"Annette","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/anette.json"},"7":{"uid":7,"id":"65","slug":"unsere-traeume","title":"Unsere Träume","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/65.json"},"8":{"uid":8,"id":"67","slug":"thomas-and-nils","title":"Thomas and Nils","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/thomas-and-nils.json"},"9":{"uid":9,"id":"68","slug":"vortragsreihe-500-jahre-unterdrueckung-und-widerstand","title":"Vortragsreihe 500 Jahre Unterdrückung und Widerstand","url":"https://orte-backend.a-thousand-channels.xyz/public/maps/from-gay-to-queer/layers/68.json"}}')},361:function(t,e,l){var content=l(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("a939a93c",content,!0,{sourceMap:!1})},372:function(t,e,l){"use strict";l(361)},373:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,".places-list{display:block;margin-top:-6px}.modal{transition:all 1s ease-out;opacity:0;height:0;width:0;overflow:hidden}.modal,.modal.is-active{display:block;min-width:none}.modal.is-active{transition:all .6s ease-in;opacity:1;height:auto;width:auto}.modal-content{min-width:15em}.list-place h3,.modal .modal-header h2{background-color:rgba(252,84,128,.55);background:linear-gradient(90deg,rgba(255,117,0,.55),rgba(255,0,35,.55) 50%,rgba(255,0,249,.55));display:inline-block;padding:3px 8px;margin-bottom:5px;color:#fff;font-family:monospace}.modal-relations .modal-header h2{ilter:grayscale(.1) brightness(1.25)}#page.darkmode svg.inline path{fill:#ccc}",""]),r.locals={},t.exports=r},381:function(t,e,l){"use strict";l.r(e);l(358);var r={props:{data:{type:Object,required:!0},layer:{type:Array,required:!0},layers:{type:Object,required:!0},metalevel:{type:Boolean,required:!0},related_places_from_other_layers:{type:Array,required:!0}},data:function(){return{slug:this.$route.params.slug||"thomas-b"}},components:{},methods:{closeModal:function(t){this.data.state=!1,t.state=!1},closeRelationModal:function(t){this.data.state=!1,t.state=!1},showPlaceInList:function(t,e){var l=this;this.$nextTick((function(){l.data.state=!l.data.state,console.log("Place/Relation: "+t),t.state=!t.state,console.log("global slug "+l.slug),e=e||l.$route.params.slug,console.log("show place "+t.id+" in list"),console.log("with slug "+e),l.$router.push({path:"/layer/"+e,hash:"list",query:{place_id:"list-place-"+t.id}})}))}},computed:{},mounted:function(){}},o=(l(372),l(54)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"places-list sm:relative z-50"},[t._l(t.layer,(function(e,r){return l("div",{attrs:{id:"layer-"+e.id}},[t._l(e.places,(function(o,n){return[l("div",{staticClass:"modal",class:{"is-active":o.state},attrs:{id:"place-"+o.id}},[l("div",{staticClass:"modal-background"}),t._v(" "),l("div",{staticClass:"modal-content absolute inset-4 p-4 pt-2 m-1 z-50 sm:relative sm:inset-0 sm:mt-7 sm:mr-10 md:mt-8 md:mr-18 bg-white bg-a100c-white overflow-y-auto max-h-[88vh] shadow min-w-none sm:min-w-min sm:max-w-md"},[l("div",{staticClass:"text-right px-0 py-0 w-8 float-right text-3xl"},[l("button",{staticClass:"close-button",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal(o)}}},[t._v("×")])]),t._v(" "),o.images&&o.images.length>0?l("div",{staticClass:"px-0 pb-4 sm:px-4"},[l("div",{},[o.images[0]?l("div",[l("img",{staticClass:"max-w-full sm:max-w-md max-h-56 sm:max-h-56 lg:max-h-64",attrs:{src:o.images[0].image_url,alt:o.images[0].alt}})]):t._e()])]):t._e(),t._v(" "),l("div",{staticClass:"modal-header pt-1 sm:pt-2 px-4"},[l("p",{staticClass:"text-sm sm:text-md my-0 sm:my-4"},[t.data.title!=e.title?l("span",[t._v(t._s(t.data.title)+" ")]):l("span",[l("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("From Gay To Queer")])],1),t._v(" "),t.data.layer[parseInt(r)]?l("span",[t._v(":: "+t._s(t.data.layer[parseInt(r)].title))]):t._e()]),t._v(" "),l("h2",{staticClass:"text-sm sm:text-md"},[t._v(t._s(o.title))])]),t._v(" "),l("div",{staticClass:"modal-content"},[o.teaser?l("div",{staticClass:"text-sm sm:text-md  text-gray-500 px-4",domProps:{innerHTML:t._f("truncate")(o.teaser,200,"...")}}):t._e()]),t._v(" "),l("div",{staticClass:"modal-player"},[l("p",{staticClass:"captions",attrs:{id:"place-"+o.id+"-infos"}}),t._v(" "),o.audio?l("div",{staticClass:"player-wrapper px-4",attrs:{id:"audio"}},[l("audio-player",{attrs:{place:o}})],1):t._e(),t._v(" "),o.audiolink?l("div",{staticClass:"player-wrapper px-4",attrs:{id:"audio"},domProps:{innerHTML:t._s(o.audiolink)}}):t._e()]),t._v(" "),l("footer",[l("p",{staticClass:"text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4"},[t.metalevel?l("button",{staticClass:"text-link",on:{click:function(e){t.showPlaceInList(o,t.layers[parseInt(r)].slug)}}},[t._v("Show details @ "+t._s(t.layers[parseInt(r)].title))]):l("button",{staticClass:"text-link",on:{click:function(e){return t.showPlaceInList(o,"")}}},[t._v("Show details")])])])])])]}))],2)})),t._v(" "),t._l(t.layer,(function(e,r){return l("div",{attrs:{id:"layer-"+e.id+"-relations"}},[t._l(t.related_places_from_other_layers,(function(e,r){return[l("div",{staticClass:"modal modal-relations",class:{"is-active":e.state},attrs:{id:"place-"+e.id}},[l("div",{staticClass:"modal-background"}),t._v(" "),l("div",{staticClass:"modal-content absolute inset-4 p-4 pt-2 m-1 z-50 sm:relative sm:inset-0 sm:mt-7 sm:mr-10 md:mt-8 md:mr-18 bg-white bg-a100c-white overflow-y-auto max-h-[88vh] shadow min-w-none sm:min-w-min sm:max-w-md"},[l("div",{staticClass:"text-right px-0 py-0 w-8 float-right text-3xl"},[l("button",{staticClass:"close-button",attrs:{"aria-label":"close"},on:{click:function(l){return t.closeRelationModal(e)}}},[t._v("×")])]),t._v(" "),e.images&&e.images.length>0?l("div",{staticClass:"px-0 pb-4 sm:px-4"},[l("div",{},[e.images[0]?l("div",[l("img",{staticClass:"max-w-full sm:max-w-md max-h-56 sm:max-h-56 lg:max-h-64",attrs:{src:e.images[0].image_url,alt:e.images[0].alt}})]):t._e()])]):t._e(),t._v(" "),l("div",{staticClass:"modal-header pt-1 sm:pt-2 px-4"},[l("p",{staticClass:"text-sm sm:text-md my-0 sm:my-4"},[t.data.title!=t.layer.title?l("span",[t._v("From Gay To Queer ")]):t._e(),l("span",[t._v(":: "+t._s(t.data.layer[0].title))])]),t._v(" "),l("h2",{staticClass:"text-sm sm:text-md"},[t._v(t._s(e.title))])]),t._v(" "),l("div",{staticClass:"modal-content"},[e.teaser?l("div",{staticClass:"text-sm sm:text-md  text-gray-500 px-4",domProps:{innerHTML:t._f("truncate")(e.teaser,200,"...")}}):t._e()]),t._v(" "),l("footer",[l("p",{staticClass:"text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4"},[l("button",{staticClass:"text-link",on:{click:function(l){return t.showPlaceInList(e,t.layers[e.layer_index].slug)}}},[t._v("\n                  Show details\n                  "),l("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[l("path",{attrs:{d:"M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z",fill:"#000"}})]),t._v("\n                  "+t._s(t.layers[e.layer_index].title)+"\n                ")])])])])])]}))],2)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);