(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{328:function(t){t.exports=JSON.parse('{"0":{"id":"57","slug":"manu","title":"Manu","url":"https://orte.link/public/maps/from-gay-to-queer/layers/manu.json"},"1":{"id":"60","slug":"thomas-b","title":"Thomas B","url":"https://orte.link/public/maps/from-gay-to-queer/layers/thomas.json"},"2":{"id":"61","slug":"arno","title":"Arno","url":"https://orte.link/public/maps/from-gay-to-queer/layers/arno.json"},"3":{"id":"62","slug":"marcio","title":"Marcio","url":"https://orte.link/public/maps/from-gay-to-queer/layers/marcio.json"},"4":{"id":"63","slug":"tunten-terror-tour-93","title":"Tunten Terror Tour \'93","url":"https://orte.link/public/maps/from-gay-to-queer/layers/tunte-terror-tour-93.json"},"5":{"id":"64","slug":"annette","title":"Annette","url":"https://orte.link/public/maps/from-gay-to-queer/layers/anette.json"},"6":{"id":"65","slug":"unsere-traeume","title":"Unsere Träume","url":"https://orte.link/public/maps/from-gay-to-queer/layers/65.json"},"7":{"id":"67","slug":"thomas-and-nils","title":"Thomas and Nils","url":"https://orte.link/public/maps/from-gay-to-queer/layers/thomas-and-nils.json"},"8":{"id":"59","slug":"ulf","title":"Ulf","url":"https://orte.link/public/maps/from-gay-to-queer/layers/ulf.json"},"9":{"id":"68","slug":"vortragsreihe-500-jahre-unterdrueckung-und-widerstand","title":"Vortragsreihe 500 Jahre Unterdrückung und Widerstand","url":"https://orte.link/public/maps/from-gay-to-queer/layers/68.json"}}')},331:function(t,e,n){t.exports=n.p+"img/client-splash-background-light.595bd31.jpg"},332:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("04177602",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n(332)},342:function(t,e,n){var r=n(53),o=n(146),l=n(331),d=r((function(i){return i[1]})),m=o(l);d.push([t.i,"/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Work Sans, Graphik, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n:-moz-focusring {\n\toutline: auto;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-color:currentColor;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}h1{font-size:1.5rem;line-height:2rem;}h2{font-size:1.25rem;line-height:1.75rem;}.invisible{visibility:hidden;}.static{position:static;}.absolute{position:absolute;}.sticky{position:-webkit-sticky;position:sticky;}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem;}.bottom-0{bottom:0px;}.left-1\\/2{left:50%;}.z-50{z-index:50;}.z-40{z-index:40;}.float-right{float:right;}.m-10{margin:2.5rem;}.m-1{margin:0.25rem;}.my-2{margin-top:0.5rem;margin-bottom:0.5rem;}.my-4{margin-top:1rem;margin-bottom:1rem;}.mx-5{margin-left:1.25rem;margin-right:1.25rem;}.my-1{margin-top:0.25rem;margin-bottom:0.25rem;}.mx-1{margin-left:0.25rem;margin-right:0.25rem;}.my-0{margin-top:0px;margin-bottom:0px;}.mx-0{margin-left:0px;margin-right:0px;}.mt-4{margin-top:1rem;}.mb-4{margin-bottom:1rem;}.mr-6{margin-right:1.5rem;}.mb-6{margin-bottom:1.5rem;}.mb-2{margin-bottom:0.5rem;}.block{display:block;}.inline-block{display:inline-block;}.inline{display:inline;}.flex{display:flex;}.hidden{display:none;}.h-full{height:100%;}.max-h-screen{max-height:100vh;}.max-h-72{max-height:18rem;}.max-h-56{max-height:14rem;}.min-h-screen{min-height:100vh;}.w-full{width:100%;}.w-8{width:2rem;}.max-w-full{max-width:100%;}.flex-auto{flex:1 1 auto;}.flex-shrink{flex-shrink:1;}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:var(--tw-transform);}.-translate-y-1\\/3{--tw-translate-y:-33.333333%;transform:var(--tw-transform);}.transform{transform:var(--tw-transform);}.flex-col{flex-direction:column;}.content-center{align-content:center;}.items-center{align-items:center;}.items-stretch{align-items:stretch;}.justify-center{justify-content:center;}.self-center{align-self:center;}.overflow-x-auto{overflow-x:auto;}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.whitespace-nowrap{white-space:nowrap;}.rounded{border-radius:0.25rem;}.rounded-sm{border-radius:0.125rem;}.rounded-lg{border-radius:0.5rem;}.border{border-width:1px;}.border-2{border-width:2px;}.border-solid{border-style:solid;}.border-transparent{border-color:transparent;}.bg-red-100{--tw-bg-opacity:1;background-color:rgba(255, 228, 230, var(--tw-bg-opacity));}.bg-opacity-30{--tw-bg-opacity:0.3;}.bg-opacity-0{--tw-bg-opacity:0;}.fill-current{fill:currentColor;}.p-4{padding:1rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem;}.py-0{padding-top:0px;padding-bottom:0px;}.px-0{padding-left:0px;padding-right:0px;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.px-8{padding-left:2rem;padding-right:2rem;}.pb-4{padding-bottom:1rem;}.pl-1{padding-left:0.25rem;}.pr-2{padding-right:0.5rem;}.pb-10{padding-bottom:2.5rem;}.pl-0{padding-left:0px;}.pt-2{padding-top:0.5rem;}.pb-0{padding-bottom:0px;}.pt-8{padding-top:2rem;}.pl-4{padding-left:1rem;}.pr-4{padding-right:1rem;}.pt-1{padding-top:0.25rem;}.text-left{text-align:left;}.text-right{text-align:right;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.font-semibold{font-weight:600;}.font-bold{font-weight:700;}.leading-tight{line-height:1.25;}.text-red-300{--tw-text-opacity:1;color:rgba(253, 164, 175, var(--tw-text-opacity));}.text-gray{--tw-text-opacity:1;color:rgba(255, 0, 0, var(--tw-text-opacity));}.shadow{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.drop-shadow{--tw-drop-shadow:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));filter:var(--tw-filter);}.filter{filter:var(--tw-filter);}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}body{font-family:Work Sans,Graphik,sans-serif!important}.bg-a100c-1-splash{background:#ff00f9;background:linear-gradient(90deg,rgba(255,0,249,.25),rgba(255,117,0,.35) 50%,rgba(255,0,35,.25));background-image:url("+m+');background-size:cover}.bg-a100c-1-hover{background:#ff00f9;background:linear-gradient(90deg,rgba(255,0,249,.65),rgba(255,117,0,.6) 50%,rgba(255,0,35,.65))}.bg-a100c-white-100{background-color:#fff}.bg-a100c-white{background-color:hsla(0,0%,100%,.8)}.text-a100c-1{color:#ff6d6d;background:-webkit-linear-gradient(120deg,rgba(255,0,35,.65),rgba(255,117,0,.65) 50%,rgba(255,0,249,.65));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}h2.beta:after{content:"(Beta)";padding:3px 2px;margin-left:4px;display:inline-block;font-family:monospace;color:#666;font-size:.6em;line-height:1;vertical-align:text-top}a.text-link,button.text-link{text-decoration:none;background-image:linear-gradient(120deg,rgba(255,0,249,.35),rgba(255,117,0,.35) 50%,rgba(255,0,35,.35));background-repeat:no-repeat;background-size:100% .2em;background-position:0 100%}button{opacity:1;cursor:pointer;transition:all .3s}button:disabled,button[disabled]{opacity:.5;filter:grayscale(1);cursor:disabled;transition:all .3s}@media (min-width: 640px){.sm\\:absolute{position:absolute;}.sm\\:relative{position:relative;}.sm\\:inset-0{top:0px;right:0px;bottom:0px;left:0px;}.sm\\:top-4{top:1rem;}.sm\\:right-4{right:1rem;}.sm\\:my-4{margin-top:1rem;margin-bottom:1rem;}.sm\\:mx-5{margin-left:1.25rem;margin-right:1.25rem;}.sm\\:mt-7{margin-top:1.75rem;}.sm\\:mr-10{margin-right:2.5rem;}.sm\\:max-h-80{max-height:20rem;}.sm\\:max-h-56{max-height:14rem;}.sm\\:min-w-min{min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;}.sm\\:max-w-md{max-width:28rem;}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}.sm\\:px-10{padding-left:2.5rem;padding-right:2.5rem;}.sm\\:px-2{padding-left:0.5rem;padding-right:0.5rem;}.sm\\:px-4{padding-left:1rem;padding-right:1rem;}.sm\\:px-16{padding-left:4rem;padding-right:4rem;}.sm\\:py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.sm\\:px-8{padding-left:2rem;padding-right:2rem;}.sm\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.sm\\:py-4{padding-top:1rem;padding-bottom:1rem;}.sm\\:pt-0{padding-top:0px;}.sm\\:pb-8{padding-bottom:2rem;}.sm\\:pl-4{padding-left:1rem;}.sm\\:pt-4{padding-top:1rem;}.sm\\:pt-6{padding-top:1.5rem;}.sm\\:pt-2{padding-top:0.5rem;}}@media (min-width: 768px){.md\\:visible{visibility:visible;}.md\\:mt-8{margin-top:2rem;}.md\\:px-12{padding-left:3rem;padding-right:3rem;}.md\\:pl-16{padding-left:4rem;}.md\\:pr-12{padding-right:3rem;}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:max-h-96{max-height:24rem;}.lg\\:max-h-64{max-height:16rem;}.lg\\:max-w-3xl{max-width:48rem;}.lg\\:px-8{padding-left:2rem;padding-right:2rem;}.lg\\:py-8{padding-top:2rem;padding-bottom:2rem;}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem;}.lg\\:px-4{padding-left:1rem;padding-right:1rem;}.lg\\:py-4{padding-top:1rem;padding-bottom:1rem;}.lg\\:pl-14{padding-left:3.5rem;}.lg\\:pr-4{padding-right:1rem;}}',""]),d.locals={},t.exports=d},348:function(t,e,n){"use strict";n.r(e);n(84);var r={props:{layers:{type:Object,required:!0}},data:function(){return{custom_data_url:"",slug:"",layers_json_url:"",disabled:!0}},mounted:function(){this.$route.query.layer&&(this.custom_data_url=this.$route.query.layer,this.disabled=!1)},methods:{onChange:function(t){"Select a map"!=t.target.value?(this.slug=t.target.value,this.disabled=!1):this.disabled=!0}}},o=(n(341),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("div",{staticClass:"relative flex overflow-x-auto items-top justify-center min-h-screen bg-pink-100 bg-a100c-1-splash sm:items-center sm:pt-0"},[n("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-12"},[n("div",{staticClass:"flex justify-center sm:mt-8 sm:pt-0"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"mt-2 md:mx-24 lg:mx-24 bg-transparent overflow-hidden sm:rounded-lg p-2"},[n("div",{staticClass:"mt-2 pt-2 text-gray-800 text-center"},[n("select",{staticClass:" bg-a100c-white rounded text-lg shadow px-3 py-2 outline-none max-w-xs md:max-w-md lg:max-w-lg",attrs:{id:"layer-selector"},on:{change:function(e){return t.onChange(e)}}},[n("option",[t._v("\n              Select a map ...\n            ")]),t._v(" "),n("option",{staticClass:"text-lg py-1",attrs:{value:""}},[t._v("\n              Alle Layer\n            ")]),t._v(" "),t._l(t.layers,(function(e){return n("option",{staticClass:"text-lg py-1",domProps:{value:e.slug}},[t._v("\n                "+t._s(e.title)+"\n            ")])}))],2)]),t._v(" "),n("p",{staticClass:"mt-2 pt-2 text-gray-800 text-center"},[n("nuxt-link",{staticClass:"bg-white bg-a100c-1-hover text-white text-bold drop-shadow text-center px-4 py-2 rounded-lg",attrs:{to:{path:"/layer/"+this.slug},tag:"button",disabled:this.disabled}},[t._v("View map")])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 overflow-hidden bg-a100c-white shadow sm:rounded-lg  md:px-4 lg:px-8 p-2"},[n("h2",{staticClass:"text-3xl beta"},[n("span",{staticClass:"text-a100c-1  font-semibold"},[t._v('"From Gay To Queer"')]),t._v(" — A project by Queer narratives, mapped")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 mb-4 bg-a100c-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2"},[n("p",{staticClass:"text-gray-600"},[t._v("\n          In a process of research, interviewing, mapping and contextualization, we have tried to understand how queer (sub)cultures have developed from their separated LGBTI* niches, with the focus on Bremen in the 1990s. This is a spotlight, there are so many other voices, narrations and traces that hopefully will be collected and documented, too.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 mb-4 bg-a100c-white overflow-hidden shadow sm:rounded-lg md:px-4 lg:px-8 py-4 p-2"},[n("p",{staticClass:"text-gray-600"},[t._v("\n          This map is part of "),n("a",{staticClass:"text-link",attrs:{href:"https://citydataexplosion.tumblr.com/intersections-and-constellations",target:"_blank"}},[t._v("„Intersections + Constellations: From gay to queer“")]),t._v(", 2021."),n("br"),t._v("\n          The content is mixed english and german.\n        ")]),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-gray-600"},[t._v("\n          We would be very excited about feedback and contributions.\n          If you have questions or remarks, please contact us via "),n("a",{staticClass:"text-link",attrs:{href:"mailto:queer-narratives-mapped@citydataexplosion.de"}},[t._v("queer-narratives-mapped@citydataexplosion.de")]),t._v(".\n        ")])])}],!1,null,null,null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var r=n(328),o={asyncData:function(t){t.params;return{layers:r}},data:function(){return{title:"From Gay To Queer — A mapping by Queer narratives, mapped"}},mounted:function(){}},l=n(52),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Splash",{attrs:{layers:t.layers}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Splash:n(348).default})}}]);