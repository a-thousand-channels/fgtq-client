(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{346:function(t,n,e){"use strict";e.r(n);var o={props:{},components:{},methods:{navigate_top:function(){console.log("<-- top "+this.$route.hash),this.$router.push({name:"index",hash:""})},navigate_left:function(){console.log("<-- from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#info":"#list"==this.$route.hash&&(t="#map"),t&&(location.hash=t)},navigate_right:function(){console.log("--\x3e from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#list":"#info"==this.$route.hash&&(t="#map"),t&&(location.hash=t)}},data:function(){return{}},computed:{},mounted:function(){}},r=e(52),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"static z-50 invisible md:visible"},[e("div",{staticClass:"absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3"},[e("p",{staticClass:"text-red-300 bg-red-100 px-2 py-0.5 rounded-sm text-sm items-center whitespace-nowrap"},[t._v("\n      Navigate with arrow keys:\n      "),e("button",{staticClass:"whitespace-nowrap rounded-lg pl-1 pr-2",on:{click:function(n){return t.navigate_left()}}},[e("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})]),t._v("\n        Back\n      ")]),t._v(" |\n      "),e("button",{staticClass:"whitespace-nowrap rounded-lg pl-1 pr-2",on:{click:function(n){return t.navigate_top()}}},[e("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"}})]),t._v("\n        Start\n      ")]),t._v(" |\n      "),e("button",{staticClass:"whitespace-nowrap rounded-lg pl-1 pr-2",on:{click:function(n){return t.navigate_right()}}},[e("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})]),t._v("\n        Forward\n      ")])])])])}),[],!1,null,null,null);n.default=component.exports}}]);