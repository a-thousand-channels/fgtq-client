(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{359:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("19151522",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";var r=n(3),l=n(19),o=n(11),c=n(8),path=n(239),d=n(5),h=n(114),m=n(13),v=n(240),_=n(45),x=n(86),f=n(238),w=n(4),y=n(87).f,C=n(39).f,k=n(21).f,E=n(365),T=n(366).trim,N="Number",I=c.Number,M=path.Number,L=I.prototype,z=c.TypeError,O=d("".slice),S=d("".charCodeAt),A=function(t){var e=f(t,"number");return"bigint"==typeof e?e:V(e)},V=function(t){var e,n,r,l,o,c,d,code,h=f(t,"number");if(x(h))throw z("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=T(h),43===(e=S(h,0))||45===e){if(88===(n=S(h,2))||120===n)return NaN}else if(48===e){switch(S(h,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+h}for(c=(o=O(h,2)).length,d=0;d<c;d++)if((code=S(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+h},H=h(N,!I(" 0o1")||!I("0b1")||I("+0x1")),j=function(t){return _(L,t)&&w((function(){E(t)}))},B=function(t){var e=arguments.length<1?0:I(A(t));return j(this)?v(Object(e),this,B):e};B.prototype=L,H&&!l&&(L.constructor=B),r({global:!0,constructor:!0,wrap:!0,forced:H},{Number:B});var P=function(t,source){for(var e,n=o?y(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),r=0;n.length>r;r++)m(source,e=n[r])&&!m(t,e)&&k(t,e,C(source,e))};l&&M&&P(path.Number,M),(H||l)&&P(path.Number,I)},365:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},366:function(t,e,n){var r=n(5),l=n(25),o=n(14),c=n(367),d=r("".replace),h=RegExp("^["+c+"]+"),m=RegExp("(^|[^"+c+"])["+c+"]+$"),v=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,m,"$1")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},367:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},368:function(t,e,n){"use strict";n(359)},369:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,"#list_inner .swiper-slide{width:100%!important}#list_inner .swiper-button-prev{opacity:0;color:#999}#list_inner .swiper-button-next{opacity:.8;color:#999}#list_inner .swiper-button-next:after{font-size:25px}#list_inner .swiper-button-next.swiper-button-disabled,#list_inner .swiper-button-prev.swiper-button-disabled{opacity:0}",""]),r.locals={},t.exports=r},379:function(t,e,n){"use strict";n.r(e);var r=n(31),l=(n(364),n(55),n(38),n(46),{props:{places:{type:Array,required:!1},places_with_relations:{type:Array,required:!1},data:{type:Object,required:!1},layerindex:{type:Number,required:!1},layers:{type:Object,required:!0},map:{type:Object,required:!1}},components:{},methods:{recenterMap:function(t,e,n){var r=this;this.$nextTick((function(){console.log("Recenter map to "+e+"/"+n),r.$router.push({path:"/layer/"+r.slug,hash:"#map"}),r.map.flyTo([e,n],17)}))},scrollToTop:function(){console.log("Scroll"),document.getElementById("list_content").scrollTo({top:0,behavior:"smooth"})},scrollToEntry:function(t){console.log("list-place-"+t);var e=document.getElementById("list-place-"+t);document.getElementById("list_content").scrollTo({top:e.offsetTop,behavior:"smooth"})},jumpToLayerAndEntry:function(t,e){console.log("list-place-"+t),console.log(e),this.$router.push({path:"/layer/"+e,hash:"#list",query:{place_id:"list-place-"+t}})},returnLayerTitle:function(t){var e=this.layers,title="";return Object.keys(e).forEach((function(n){e[n].id==t&&(title=e[n].title)})),title},returnLayerSlug:function(t){var e=this.layers,n="";return Object.keys(e).forEach((function(r){e[r].id==t&&(n=e[r].slug)})),n},getSwiperOptions:function(t){var e;return e={slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination"+t,clickable:!0},paginationClickable:!0,navigation:{nextEl:".swiper-button-next"+t,prevEl:".swiper-button-prev"+t}},Object(r.a)(e,"spaceBetween",50),Object(r.a)(e,"loop",!0),e}},data:function(){return{slug:this.$route.params.slug||""}},computed:{},mounted:function(){}}),o=(n(368),n(54)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ul",{staticClass:"pb-10"},[0==t.places.length?n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[n("p",[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"}})]),t._v("\n        Please go left to see\n        "),n("nuxt-link",{staticClass:"text-link",attrs:{to:{name:"/layer/"+this.slug,hash:"map"}}},[t._v("\n          our map\n        ")]),t._v("\n        and select a place or layer to see more details here.\n      ")],1)]):t._e(),t._v(" "),t.places?t._e():n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z"}})]),t._v(" Or check the\n      "),n("nuxt-link",{staticClass:"text-link",attrs:{to:{name:"/layer/"+this.slug,hash:"info"}}},[t._v("\n        info page\n      ")]),t._v("\n      to learn more about this map :)\n    ")],1),t._v(" "),this.slug?n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4 "},[n("h2",{staticClass:"font-semibold pl-0 sm:pl-4 md:pl-16"},[t.data.title!=t.data.layer[parseInt(t.layerindex)].title?n("span",[t._v(t._s(t.data.title))]):n("span",[n("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("From Gay To Queer")])],1),t._v(" "),t.data.layer[parseInt(t.layerindex)]?n("span",[t._v("— "),n("span",{staticClass:"text-a100c-1"},[t._v(t._s(t.data.layer[parseInt(t.layerindex)].title))])]):t._e()])]):n("li"),t._v(" "),t._l(t.places,(function(e,r){return n("li",{staticClass:"list-place bg-a100c-white px-4 py-2 rounded shadow mt-4 pt-4",attrs:{id:"list-place-"+e.id}},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:t.getSwiperOptions(r),expression:"getSwiperOptions(index)",arg:r}],staticClass:"md:px-12"},[e.images?n("div",{staticClass:"swiper-wrapper"},t._l(e.images,(function(image,r){return n("div",{key:r,staticClass:"swiper-slide px-0 pb-4 pt-2 sm:px-4 sm:pt-4"},[e.images.length>1?n("p",{staticClass:"text-sm text-gray max-w-60 text-left"},[t._v(t._s(r+1)+"/"+t._s(e.images.length))]):t._e(),t._v(" "),n("span",image?[n("img",{staticClass:"max-w-full sm:max-w-ws max-h-72 sm:max-h-80 lg:max-h-96",attrs:{src:image.image_url,alt:image.alt}}),t._v(" "),n("span",{staticClass:"text-sm leading-tight text-gray-500 max-w-60"},[t._v(t._s(image.title))])]:[n("img",{attrs:{src:"https://via.placeholder.com/585x870?text=Platzhalter_585x870px",alt:""}})])])})),0):t._e(),t._v(" "),e.images.length>1?n("div",[n("div",{class:"swiper-button-prev swiper-button-prev"+r,attrs:{tabindex:"0",role:"button"}}),t._v(" "),n("div",{class:"swiper-button-next swiper-button-next"+r,attrs:{tabindex:"1",role:"button"}})]):t._e()]),t._v(" "),n("h3",{staticClass:"font-semibold text-lg px-4 py-2 mt-4 sm:mt-4 ml-4 sm:ml-8 sm:px-16 sm:pt-6 rounded"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-gray-800 px-4 md:text-lg sm:px-16 sm:py-3 lg:max-w-3xl teaser-block",domProps:{innerHTML:t._s(e.teaser)}}),t._v(" "),e.audiolink?n("div",{staticClass:"player-wrapper px-4 sm:px-16 sm:py-3",attrs:{id:"list-audio-"+e.id},domProps:{innerHTML:t._s(e.audiolink)}}):t._e(),t._v(" "),e.annotations.length>0?n("ul",{staticClass:"pb-0 sm:px-8"},t._l(e.annotations,(function(e,r){return n("li",{staticClass:"bg-a100c-3-text rounded shadow mt-4 mb-6 px-4 py-3 sm:px-4 sm:py-6 lg:max-w-3xl"},[e.title?n("h4",{staticClass:"font-semibold md:text-lg px-4 py-2"},[t._v(t._s(e.title))]):t._e(),t._v(" "),n("div",{staticClass:"text-gray-800 px-4 annotation-text-block",domProps:{innerHTML:t._s(e.text)}})])})),0):t._e(),t._v(" "),t._l(t.places_with_relations,(function(r,l){return t.places_with_relations?n("div",[r.relations[0].from.id==e.id?n("div",[r.relations.length>0?n("div",{staticClass:"pb-0 px-8 sm:px-16"},t._l(r.relations,(function(l,o){return n("div",{},[0==o?n("div",{staticClass:"mb-2"},[1==r.relations.length&&l.from.layer_id==l.to.layer_id?n("p",[t._v("Jump to:")]):n("p",[t._v("See also:")])]):t._e(),t._v(" "),l.to.title&&e.layer_id==l.from.layer_id?n("div",[n("p",{staticClass:"leading-tight mb-4"},[l.from.layer_id==l.to.layer_id?n("span",[n("a",{staticClass:"text-link",on:{click:function(e){return t.scrollToEntry(l.to.id)}}},[t._v("\n                      "+t._s(l.to.title)+"\n                    ")])]):n("span",[n("a",{staticClass:"text-link",on:{click:function(e){t.jumpToLayerAndEntry(l.to.id,t.returnLayerSlug(l.to.layer_id))}}},[t._v("\n                      "+t._s(l.to.title)+"\n                    ")]),t._v("\n                    ("),n("nuxt-link",{staticClass:"text-link",attrs:{to:{path:"/layer/"+t.returnLayerSlug(l.to.layer_id),hash:"map"}}},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"}})]),t._v("\n                      "+t._s(t.returnLayerTitle(l.to.layer_id))+"\n                    ")]),t._v(")\n\n                  ")],1)])]):t._e()])})),0):t._e()]):t._e()]):t._e()})),t._v(" "),n("footer",{staticClass:"flex pt-8 pb-4 lg:max-w-3xl pl-4 md:pl-16 lg:pl-14 pr-4 md:pr-12 lg:pr-4"},[n("p",{staticClass:"flex-auto text-gray-500 px-0 py-2"},[n("button",{staticClass:"text-link2",on:{click:function(n){return t.recenterMap(e.id,e.lat,e.lon)}}},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})]),t._v("\n            Show on the map\n          ")])]),t._v(" "),n("p",{staticClass:"flex-auto text-gray-500 text-right x-0 py-2"},[n("button",{staticClass:"text-link2",on:{click:t.scrollToTop}},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"}})]),t._v("\n            To top\n          ")])])])],2)}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);