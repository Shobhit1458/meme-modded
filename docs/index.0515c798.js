function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a,n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},r=i.parcelRequire5078;function l(t={}){return t={files:null,...t},Array.isArray(t.files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator}function d(t,e,a){if(!e.has(t))throw new TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}function c(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,d(t,e,"get"))}function u(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(t,e,a){u(t,e),e.set(t,a)}function m(t,e,a){return function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=a}}(t,d(t,e,"set"),a),a}function p(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}function f(t,e){u(t,e),e.add(t)}null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},i.parcelRequire5078=r),r.register("kyEFX",(function(e,a){var n,i;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};n=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)o[e[a]]=t[e[a]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"eq2Ey":"index.0515c798.js","9jzSS":"Anton-Regular.e58ab3fe.ttf","hr5Pp":"Oswald-Regular.89ec7d89.ttf","5TebC":"Oswald-Bold.0f6a7ca6.ttf","3ENF9":"Roboto-Regular.ca197847.ttf","5yAXK":"Roboto-Bold.fdb9b54a.ttf","k2KZ9":"RobotoCondensed-Regular.d585f5c7.ttf","4h4UX":"RobotoCondensed-Bold.e1f96d4b.ttf","8pomG":"CourierPrime-Regular.3a25a501.ttf","l2v76":"CourierPrime-Bold.3d6bf689.ttf","eKMWr":"OpenSans-Regular.edf9e01b.ttf","dXO1Z":"OpenSans-Bold.8fceb72b.ttf","9FH7D":"index.bb12d64f.css"}')),a={},n=function(){return R},Object.defineProperty(a,"WebShare",{get:n,set:undefined,enumerable:!0,configurable:!0});const b=document.createElement("template"),g=String.raw;b.innerHTML=g`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var v,w,y=new WeakMap,E=new WeakMap,S=new WeakMap,x=new WeakMap,k=new WeakMap,A=new WeakSet,C=new WeakSet;class R extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){p(this,C,T).call(this,"shareUrl"),p(this,C,T).call(this,"shareTitle"),p(this,C,T).call(this,"shareText"),p(this,C,T).call(this,"shareFiles"),p(this,C,T).call(this,"disabled"),c(this,y)&&c(this,y).addEventListener("slotchange",c(this,k)),c(this,E)&&c(this,E).addEventListener("click",c(this,x))}disconnectedCallback(){c(this,y)&&c(this,y).removeEventListener("slotchange",c(this,k)),c(this,E)&&c(this,E).removeEventListener("click",c(this,x))}attributeChangedCallback(t){"disabled"===t&&c(this,E)&&(c(this,E).disabled=this.disabled,c(this,E).setAttribute("aria-disabled",this.disabled),c(this,E).part&&c(this,E).part.contains("button")&&c(this,E).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return c(this,S)}set shareFiles(t){m(this,S,t)}async share(){if(!this.disabled)try{const t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,R)}constructor(){super(),f(this,A),f(this,C),h(this,y,{writable:!0,value:void 0}),h(this,E,{writable:!0,value:void 0}),h(this,S,{writable:!0,value:null}),h(this,x,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),h(this,k,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(c(this,E)&&c(this,E).removeEventListener("click",c(this,x)),m(this,E,p(this,A,L).call(this)),c(this,E)&&(c(this,E).addEventListener("click",c(this,x)),"BUTTON"===c(this,E).nodeName||c(this,E).hasAttribute("role")||c(this,E).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(b.content.cloneNode(!0))),m(this,y,this.shadowRoot.querySelector('slot[name="button"]')),m(this,E,p(this,A,L).call(this))}}function L(){return c(this,y)?c(this,y).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}function T(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function B(t,e,a){if(!e.has(t))throw new TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}function M(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,B(t,e,"get"))}function F(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function I(t,e,a){F(t,e),e.set(t,a)}function N(t,e,a){return function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=a}}(t,B(t,e,"set"),a),a}function _(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}function z(t,e){F(t,e),e.add(t)}R.defineCustomElement(),v={},w=function(){return ot},Object.defineProperty(v,"CapturePhoto",{get:w,set:undefined,enumerable:!0,configurable:!0});const O=(t,e,a)=>(Number.isNaN(e)&&(e=0),Number.isNaN(a)&&(a=0),Math.min(Math.max(t,Math.min(e,a)),Math.max(e,a))),U=document.createElement("template");U.innerHTML='\n  <style>\n    :host { all: initial; display: block; box-sizing: border-box; }\n    :host *, :host *::before, :host *::after { box-sizing: inherit; }\n    :host([hidden]), [hidden] { display: none; }\n    :host video { display: block; }\n    :host #output:empty { display: none; }\n  </style>\n  <video part="video" playsinline></video>\n  <canvas hidden></canvas>\n  <div part="actions-container">\n    <slot name="capture-button">\n      <button part="capture-button" type="button">\n        <slot name="capture-button-content">Capture photo</slot>\n      </button>\n    </slot>\n    <slot name="facing-mode-button" hidden>\n      <button part="facing-mode-button" type="button">\n        <slot name="facing-mode-button-content">Toggle facing mode</slot>\n      </button>\n    </slot>\n    <slot name="actions"></slot>\n  </div>\n  <slot></slot>\n  <div part="output-container" id="output"></div>\n';var W=new WeakMap,$=new WeakMap,X=new WeakMap,H=new WeakMap,q=new WeakMap,P=new WeakMap,V=new WeakMap,Y=new WeakMap,D=new WeakMap,j=new WeakMap,G=new WeakMap,K=new WeakMap,Z=new WeakMap,J=new WeakSet,Q=new WeakSet,tt=new WeakMap,et=new WeakMap,at=new WeakSet,nt=new WeakSet,it=new WeakSet;class ot extends HTMLElement{static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}static isSupported(){return Boolean(navigator.mediaDevices?.getUserMedia)}static defineCustomElement(t="capture-photo"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,ot)}connectedCallback(){if(_(this,it,ct).call(this,"noImage"),_(this,it,ct).call(this,"facingMode"),_(this,it,ct).call(this,"cameraResolution"),_(this,it,ct).call(this,"pan"),_(this,it,ct).call(this,"tilt"),_(this,it,ct).call(this,"zoom"),_(this,it,ct).call(this,"calculateFileSize"),N(this,W,!0),N(this,H,this.shadowRoot.querySelector("canvas")),N(this,q,this.shadowRoot.getElementById("output")),N(this,P,this.shadowRoot.querySelector("video")),N(this,V,this.shadowRoot.querySelector('slot[name="capture-button"]')),N(this,Y,_(this,nt,dt).call(this)),N(this,D,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),N(this,j,_(this,at,lt).call(this)),M(this,P)?.addEventListener("loadedmetadata",M(this,Z)),M(this,V)?.addEventListener("slotchange",M(this,tt)),M(this,Y)?.addEventListener("click",M(this,K)),M(this,D)?.addEventListener("slotchange",M(this,et)),M(this,j)?.addEventListener("click",M(this,G)),!ot.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),M(this,j)?.removeEventListener("click",M(this,G)),M(this,Y)?.removeEventListener("click",M(this,K)),M(this,P)?.removeEventListener("canplay",M(this,Z)),M(this,V)?.removeEventListener("slotchange",M(this,tt)),M(this,D)?.removeEventListener("slotchange",M(this,et))}attributeChangedCallback(t,e,a){if(!M(this,W))return;const n=this.getTrackCapabilities(),i=this.getTrackSettings();if("no-image"===t&&e!==a&&_(this,J,st).call(this),"facing-mode"===t&&e!==a&&M(this,$)?.facingMode){const t=["user","environment"].includes(this.facingMode);i?.facingMode&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==a&&"string"==typeof this.cameraResolution){const[t,e]=this.cameraResolution.split("x").map((t=>Number(t))),a=t>=n?.width?.min&&t<=n?.width?.max,o=e>=n?.height?.min&&e<=n?.height?.max;i?.width&&i?.height&&a&&o&&(this.stopVideoStream(),this.startVideoStream())}if("pan"===t&&e!==a&&M(this,$)?.pan){const t=this.pan>=n?.pan?.min&&this.pan<=n?.pan?.max;i?.pan&&t&&_(this,Q,rt).call(this,"pan",this.pan)}if("tilt"===t&&e!==a&&M(this,$)?.tilt){const t=this.tilt>=n?.tilt?.min&&this.tilt<=n?.tilt?.max;i?.tilt&&t&&_(this,Q,rt).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==a&&M(this,$)?.zoom){const t=this.zoom>=n?.zoom?.min&&this.zoom<=n?.zoom?.max;i?.zoom&&t&&_(this,Q,rt).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){t?this.setAttribute("calculate-file-size",""):this.removeAttribute("calculate-file-size")}stopVideoStream(){if(!M(this,P)||!M(this,X))return;const[t]=M(this,X).getVideoTracks();t?.stop(),M(this,P).srcObject=null,N(this,X,null)}async startVideoStream(){if(!ot.isSupported()||M(this,X))return;this.setAttribute("loading","");const t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){const[e,a]=this.cameraResolution.split("x").map((t=>Number(t)));t.video.width=e,t.video.height=a}try{N(this,X,await navigator.mediaDevices.getUserMedia(t)),M(this,P).srcObject=M(this,X),_(this,Q,rt).call(this,"pan",this.pan),_(this,Q,rt).call(this,"tilt",this.tilt),_(this,Q,rt).call(this,"zoom",this.zoom);this.getTrackSettings()?.facingMode&&(M(this,D).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}async capture(){if(!this.loading)try{const t=M(this,H).getContext("2d"),e=M(this,P).videoWidth,a=M(this,P).videoHeight;M(this,H).width=e,M(this,H).height=a,t.drawImage(M(this,P),0,0,e,a);const n=M(this,H).toDataURL("image/png");if("string"==typeof n&&n.includes("data:image")){if(!this.noImage){const t=new Image;t.src=n,t.width=e,t.height=a,t.part="output-image",_(this,J,st).call(this),M(this,q)?.appendChild(t)}const t={dataURI:n,width:e,height:a};if(this.calculateFileSize)try{const e=await fetch(n),a=(await e.blob()).size;a&&(t.size=a)}catch(t){}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return ot.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!M(this,X))return{};const[t]=M(this,X).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!M(this,X))return{};const[t]=M(this,X).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}constructor(){super(),z(this,J),z(this,Q),z(this,at),z(this,nt),z(this,it),I(this,W,{writable:!0,value:void 0}),I(this,$,{writable:!0,value:void 0}),I(this,X,{writable:!0,value:void 0}),I(this,H,{writable:!0,value:void 0}),I(this,q,{writable:!0,value:void 0}),I(this,P,{writable:!0,value:void 0}),I(this,V,{writable:!0,value:void 0}),I(this,Y,{writable:!0,value:void 0}),I(this,D,{writable:!0,value:void 0}),I(this,j,{writable:!0,value:void 0}),I(this,G,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),I(this,K,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),I(this,Z,{writable:!0,value:t=>{const e=t.target;e.play().then((()=>{this.dispatchEvent(new CustomEvent("capture-photo:video-play",{bubbles:!0,composed:!0,detail:{video:e}}))})).catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))})).finally((()=>{this.removeAttribute("loading")}))}}),I(this,tt,{writable:!0,value:t=>{"capture-button"===t.target?.name&&(M(this,Y)?.removeEventListener("click",M(this,K)),N(this,Y,_(this,nt,dt).call(this)),M(this,Y)&&(M(this,Y).addEventListener("click",M(this,K)),"BUTTON"===M(this,Y).nodeName||M(this,Y).hasAttribute("role")||M(this,Y).setAttribute("role","button")))}}),I(this,et,{writable:!0,value:t=>{"facing-mode-button"===t.target?.name&&(M(this,j)?.removeEventListener("click",M(this,G)),N(this,j,_(this,at,lt).call(this)),M(this,j)&&(M(this,j).addEventListener("click",M(this,G)),"BUTTON"===M(this,j).nodeName||M(this,j).hasAttribute("role")||M(this,j).setAttribute("role","button")))}}),N(this,W,!1),N(this,$,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(U.content.cloneNode(!0)))}}function st(){M(this,q)&&Array.from(M(this,q).childNodes).forEach((t=>t.remove()))}function rt(t,e){if(!M(this,X)||!t||!e)return;const[a]=M(this,X).getVideoTracks(),n=this.getTrackCapabilities();this.getTrackSettings()?.[t]&&a.applyConstraints({advanced:[{[t]:O(Number(e),n?.[t]?.min,n?.[t]?.max)}]})}function lt(){return M(this,D)?M(this,D).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))):null}function dt(){return M(this,V)?M(this,V).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))):null}function ct(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}ot.defineCustomElement();const ut=(t,...e)=>{if(!Array.isArray(t))throw new TypeError("Expected an array for first argument");return t.filter(((t,a)=>-1===e.indexOf(a)))},ht=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];var mt;mt=new URL(r("kyEFX").resolve("9jzSS"),import.meta.url).toString();var pt;pt=new URL(r("kyEFX").resolve("hr5Pp"),import.meta.url).toString();var ft;ft=new URL(r("kyEFX").resolve("5TebC"),import.meta.url).toString();var bt;bt=new URL(r("kyEFX").resolve("3ENF9"),import.meta.url).toString();var gt;gt=new URL(r("kyEFX").resolve("5yAXK"),import.meta.url).toString();var vt;vt=new URL(r("kyEFX").resolve("k2KZ9"),import.meta.url).toString();var wt;wt=new URL(r("kyEFX").resolve("4h4UX"),import.meta.url).toString();var yt;yt=new URL(r("kyEFX").resolve("8pomG"),import.meta.url).toString();var Et;Et=new URL(r("kyEFX").resolve("l2v76"),import.meta.url).toString();var St;St=new URL(r("kyEFX").resolve("eKMWr"),import.meta.url).toString();var xt;xt=new URL(r("kyEFX").resolve("dXO1Z"),import.meta.url).toString();const kt=[{name:"Anton",label:"Anton",path:e(mt),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:e(pt),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:e(ft),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:e(bt),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:e(gt),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:e(vt),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:e(wt),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:e(yt),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:e(Et),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:e(St),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:e(xt),style:"normal",weight:"400"}],At=async(t,e,a={})=>{try{const n=new FontFace(t,`url(${e})`,{...a});await n.load(),document.fonts.add(n)}catch(t){console.error(t)}},Ct=async(t={})=>{const e=await fetch(t.url),a=await e.blob(),n=t.mimeType||a.type||"";if(!ht.includes(n))throw new Error(`This is not an accepted image format. Accepted MIME types are: ${ht.join(", ")}`);let i=t.filename||"";if(!t.filename){const e=n.split("/")[1];i=`${t.url}.${e}`}return new File([a],i,a)},Rt=document.getElementById("errorsContainer"),Lt=t=>{const e=t.currentTarget;e.removeEventListener("click",Lt),Rt.removeChild(e.parentNode)},Tt=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");const a=`\n    ${t}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,n=document.createElement("div");n.className=`alert alert-${e} alert-dismissible text-break mb-2 fade`,n.innerHTML=a,n.querySelector("button").addEventListener("click",Lt),Rt.appendChild(n),setTimeout((()=>n.classList.add("show")),100)},Bt=(t,e)=>{e?(t.style.display="block",t.setAttribute("data-open",""),document.body.classList.add("modal-open"),t.dispatchEvent(new CustomEvent("modal-open",{bubbles:!0,detail:{modalId:t.id}}))):(t.style.display="none",t.removeAttribute("data-open"),document.body.classList.remove("modal-open"),t.dispatchEvent(new CustomEvent("modal-close",{bubbles:!0,detail:{modalId:t.id}})))},Mt=(t,e={})=>{const a=`\n    <div class="d-flex align-items-center">\n      <button class="btn" data-button="delete-text-box" aria-label="Remove"></button>\n\n      <input class="form-control m-2" type="text" value="${e.text}" data-input="text" autocomplete="off" placeholder="Text #${t+1}" style="min-width: 0;">\n\n      <div class="d-flex align-items-center pr-2">\n        <input class="form-control" type="color" value="${e.fillColor}" data-input="fillColor" title="Fill color">\n        <input class="form-control" type="color" value="${e.shadowColor}" data-input="shadowColor" title="Outline color">\n        <button class="btn btn-secondary settings-button" data-button="settings" aria-label="Settings"></button>\n      </div>\n    </div>\n\n    <div class="p-2 ${e._isSettingsOpen?"":"d-none"}" data-section="settings">\n      <div class="form-row">\n        <div class="col-6 mb-3">\n          <label for="fontInput_${t}" class="mb-1 d-block text-truncate">Font: </label>\n\n          <select class="custom-select" data-input="font" id="fontInput_${t}">\n            <optgroup label="Web fonts">\n              <option value="Impact">Impact</option>\n              <option value="Arial">Arial</option>\n              <option value="Arial Black">Arial Black</option>\n              <option value="Helvetica">Helvetica</option>\n              <option value="Comic Sans MS">Comic Sans MS</option>\n              <option value="Times">Times</option>\n              <option value="Times New Roman">Times New Roman</option>\n              <option value="Courier New">Courier New</option>\n              <option value="Verdana">Verdana</option>\n              <option value="Georgia">Georgia</option>\n              <option value="Palatino">Palatino</option>\n              <option value="Garamond">Garamond</option>\n              <option value="Bookman">Bookman</option>\n              <option value="Trebuchet MS">Trebuchet MS</option>\n            </optgroup>\n            <optgroup label="Google fonts">\n              ${kt.map((({name:t,label:e})=>`<option value="${t}">${e}</option>`))}\n            </optgroup>\n          </select>\n        </div>\n\n        <div class="col-3 mb-3">\n          <label for="fontSizeInput_${t}" class="mb-1 d-block text-truncate">Size:</label>\n          <input class="form-control" type="number" min="1" value="${e.fontSize}" data-input="fontSize" id="fontSizeInput_${t}">\n        </div>\n\n        <div class="col-3 mb-3">\n          <label for="fontWeightInput_${t}" class="mb-1 d-block text-truncate">Weight:</label>\n          <select class="custom-select" data-input="fontWeight" id="fontWeightInput_${t}">\n            <option value="normal" selected>Normal</option>\n            <option value="bold">Bold</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="form-row">\n        <div class="col-6 mb-3">\n          <label for="shadowWidthInput_${t}" class="mb-1 d-block text-truncate">Shadow width:</label>\n          <input class="form-control" type="number" min="0" max="10" value="${e.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${t}">\n        </div>\n\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="textRotateInput_${t}">Rotate:</label>\n          <input class="form-control" type="number" value="${e.rotate}" data-input="rotate" id="textRotateInput_${t}" min="-360" max="360">\n        </div>\n      </div>\n\n      <div class="form-row">\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="offsetYInput_${t}">Vertical offset:</label>\n          <input class="form-control" type="number" value="${e.offsetY}" data-input="offsetY" id="offsetYInput_${t}">\n        </div>\n\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="offsetXInput_${t}">Horizontal offset:</label>\n          <input class="form-control" type="number" value="${e.offsetX}" data-input="offsetX" id="offsetXInput_${t}">\n        </div>\n\n        <div class="col-12">\n          <div class="move-text-actions mb-3">\n            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="-" aria-label="Up"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="+" aria-label="Right"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="+" aria-label="Down"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="-" aria-label="Left"></button>\n          </div>\n        </div>\n      </div>\n\n      <div class="form-row">\n        <div class="col-lg-12">\n          <div class="custom-control custom-checkbox">\n            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${t}" data-input="allCaps">\n            <label class="custom-control-label" for="allCapsCheckbox_${t}">ALL CAPS</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,n=document.createDocumentFragment(),i=document.createElement("div");return i.className="bg-light border shadow-sm mb-3 rounded",i.setAttribute("data-section","textBox"),i.setAttribute("data-index",t),i.innerHTML=a,i.querySelector('[data-input="font"]').value=e.font,i.querySelector('[data-input="allCaps"]').checked=e.allCaps,n.appendChild(i)},Ft=document.getElementById("videoModal"),It=document.getElementById("downloadModal"),Nt=document.getElementById("closeVideoModalBtn"),_t=document.getElementById("canvas"),zt=document.getElementById("canvasPlaceholder"),Ot=document.getElementById("instructions"),Ut=_t.getContext("2d"),Wt=document.getElementById("imageUploadMethodSelect"),$t=document.getElementById("fileInput"),Xt=document.getElementById("imageUrlForm"),Ht=document.getElementById("addTextboxBtn"),qt=document.getElementById("inputsContainer"),Pt=document.getElementById("generateMemeBtn"),Vt=document.getElementById("openVideoModalBtn"),Yt=document.getElementById("downloadMemeBtn"),Dt=document.getElementById("downloadMemePreview"),jt=document.getElementById("downloadMemeModalCloseBtn"),Gt=document.querySelector("web-share"),Kt=document.getElementById("gallery"),Zt=document.getElementById("solidColorForm"),Jt=document.querySelectorAll(".upload-method");let Qt=null,te="meme.png",ee=null;const ae={_isSettingsOpen:!1,text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Anton",fontSize:40,fontWeight:"normal",shadowBlur:3,offsetY:0,offsetX:0,rotate:0,allCaps:!0};let ne=[{...ae}];const ie=t=>{null!=t&&(Ut.clearRect(0,0,_t.width,_t.height),"string"==typeof t?(Ut.fillStyle=t,Ut.fillRect(0,0,_t.width,_t.height)):Ut.drawImage(t,0,0,_t.width,_t.height),ne.forEach((function(t,e){Ut.font=`${t.fontWeight} ${t.fontSize}px ${t.font}`;const a=e+1,n=Ut.measureText("M").width+20,i=_t.width/2,o=t.shadowBlur,s=!0===t.allCaps?t.text.toUpperCase():t.text;Ut.fillStyle=t.fillColor,Ut.textAlign="center",Ut.save(),0!==o&&(Ut.shadowOffsetX=0,Ut.shadowOffsetY=0,Ut.shadowBlur=o,Ut.shadowColor=t.shadowColor),t.rotate?(Ut.translate(i+t.offsetX,n*a+t.offsetY),Ut.rotate(t.rotate*Math.PI/180),Ut.fillText(s,0,0),Ut.rotate(-t.rotate*Math.PI/180),Ut.translate(-(i+t.offsetX),-(n*a+t.offsetY))):Ut.fillText(s,i+t.offsetX,n*a+t.offsetY),Ut.restore()})))},oe=t=>{let e=t.target.width,a=t.target.height;e>a?e>800&&(a*=800/e,e=800):a>600&&(e*=600/a,a=600),_t.width=e,_t.height=a,Qt=t.target,ie(Qt),Pt.disabled=!1,_t.hidden=!1,Ot.hidden=!0},se=t=>{if(!t)return;const e=new Image,a=new FileReader;te=`${t.name.replace(/\.[^.]+$/,"")}-meme.png`,a.addEventListener("load",(function(t){const a=t.target.result;e.addEventListener("load",oe),e.src=a})),a.readAsDataURL(t)},re=(t,e,a)=>{"checkbox"===t.type?ne[e][a]=t.checked:"number"===t.type?ne[e][a]=Number(t.value):ne[e][a]=t.value,ie(Qt)},le=(t,e,a)=>()=>{const n=document.querySelectorAll('[data-section="textBox"]')[a],i=n.querySelector('[data-input="offsetY"]'),o=n.querySelector('[data-input="offsetX"]');"offsetY"===t&&("-"===e&&(ne[a].offsetY-=1),"+"===e&&(ne[a].offsetY+=1),i.value=ne[a].offsetY),"offsetX"===t&&("-"===e&&(ne[a].offsetX-=1),"+"===e&&(ne[a].offsetX+=1),o.value=ne[a].offsetX),ie(Qt),ee=requestAnimationFrame(le(t,e,a))};$t.addEventListener("change",(t=>{Xt.imageUrl.value="",se(t.target.files[0])})),Vt.addEventListener("click",(()=>{const t=document.createElement("capture-photo");t.noImage=!0,Ft.querySelector(".modal-body").appendChild(t),Bt(Ft,!0)})),Nt.addEventListener("click",(()=>Bt(Ft,!1))),Ht.addEventListener("click",(()=>{const t=ne.length,e=Mt(t,ae);ne.push({...ae}),qt.appendChild(e),e.querySelector('[data-input="text"]').focus()})),Pt.addEventListener("click",(async()=>{const t=_t.toDataURL("image/png"),e=t.replace("image/png","image/octet-stream");if(Yt.download=te,Yt.href=e,Dt.src=e,l())try{const e=await Ct({url:t,filename:"meme.png",mimeType:"image/png"}).catch((t=>Tt(t.message,"danger")));e&&(Gt.shareFiles=[e],Gt.shareUrl=window.location.href,Gt.shareTitle=document.title,Gt.hidden=!1)}catch(t){console.error(t)}Bt(It,!0)})),Yt.addEventListener("click",(()=>Bt(It,!1))),jt.addEventListener("click",(()=>Bt(It,!1))),Xt.addEventListener("submit",(async t=>{t.preventDefault();const e=t.target,a=e.querySelector('button[type="submit"]'),n=e.imageUrl.value;if(n.trim()){a.disabled=!0,a.querySelector(".spinner").hidden=!1,a.querySelector(".label").hidden=!0;try{const t=await Ct({url:n}).catch((t=>Tt(t.message,"danger")));t&&(se(t),$t.value=$t.defaultValue)}catch(t){Tt(`Failed to load image from "${n}".`,"danger")}finally{a.disabled=!1,a.querySelector(".spinner").hidden=!0,a.querySelector(".label").hidden=!1}}})),zt.addEventListener("dragover",(t=>{t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"})),zt.addEventListener("drop",(t=>{t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.files,[a]=e;ht.includes(a.type)&&($t.value=$t.defaultValue,Xt.imageUrl.value="",se(a))})),qt.addEventListener("input",(t=>{const e=t.target,a=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n;e.matches('[data-input="text"]')?n="text":e.matches('[data-input="fillColor"]')?n="fillColor":e.matches('[data-input="shadowColor"]')?n="shadowColor":e.matches('[data-input="font"]')?n="font":e.matches('[data-input="fontSize"]')?n="fontSize":e.matches('[data-input="fontWeight"]')?n="fontWeight":e.matches('[data-input="shadowBlur"]')?n="shadowBlur":e.matches('[data-input="offsetY"]')?n="offsetY":e.matches('[data-input="offsetX"]')?n="offsetX":e.matches('[data-input="rotate"]')&&(n="rotate"),n&&re(e,a,n)})),qt.addEventListener("change",(t=>{const e=t.target,a=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n;e.matches('[data-input="allCaps"]')&&(n="allCaps"),n&&re(e,a,n)})),qt.addEventListener("click",(t=>{const e=t.target;if(e.matches('[data-button="settings"]')){const t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach(((e,a)=>{const n=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?(n.hidden=!n.hidden,ne[a]._isSettingsOpen=!ne[a]._isSettingsOpen):(n.hidden=!0,ne[a]._isSettingsOpen=!1)}))}if(e.matches('[data-button="delete-text-box"]')){const t=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let a=!0;ne[t].text.trim()&&(a=window.confirm("Are you sure you want to remove this text box?")),a&&(ne=ut(ne,t),qt.querySelectorAll('[data-section="textBox"]').forEach((t=>t.remove())),ne.forEach(((t,e)=>qt.appendChild(Mt(e,t)))),ie(Qt))}})),qt.addEventListener("pointerdown",(t=>{const e=t.target;if(!e.closest('[data-section="textBox"]'))return;const a=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),n=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');if(!n&&!i)return;const o=e.getAttribute("data-move"),s=e.getAttribute("data-sign");ee=requestAnimationFrame(le(o,s,a))})),qt.addEventListener("pointerup",(t=>{const e=t.target,a=e.matches('[data-move="offsetY"]'),n=e.matches('[data-move="offsetX"]');(a||n)&&(cancelAnimationFrame(ee),ee=null)})),qt.addEventListener("pointerout",(t=>{const e=t.target,a=e.matches('[data-move="offsetY"]'),n=e.matches('[data-move="offsetX"]');(a||n)&&ee&&(cancelAnimationFrame(ee),ee=null)})),Wt.addEventListener("change",(t=>{Jt.forEach((e=>e.hidden=e.id!==t.target.value))})),Kt.addEventListener("click",(async t=>{const e=t.target.closest("button");if(!e)return;const a=e.querySelector("img");try{const t=await Ct({url:a.src}).catch((t=>Tt(t.message,"danger")));t&&(se(t),$t.value=$t.defaultValue,Xt.imageUrl.value="")}catch(t){Tt(`Failed to load image: "${a.alt}".`,"danger")}})),Zt.addEventListener("input",(t=>{t.target===Zt.canvasColor&&(Qt=t.target.value),"string"==typeof Qt&&(_t.width=Number(Zt.canvasWidth.value)||600,_t.height=Number(Zt.canvasHeight.value)||400,ie(Qt),Pt.disabled=!1,_t.hidden=!1,Ot.hidden=!0)})),document.addEventListener("web-share:error",(()=>{Tt("There was an error while trying to share your meme.","danger")})),document.addEventListener("capture-photo:error",(t=>{console.error(t.detail.error),Tt(t.detail.error.message,"danger")})),document.addEventListener("capture-photo:success",(t=>{Bt(Ft,!1);const e=new Image;e.addEventListener("load",oe),e.src=t.detail.dataURI,$t.value&&($t.value=$t.defaultValue,Xt.imageUrl.value="",te="meme.png")})),document.addEventListener("modal-close",(t=>{if("videoModal"===t.detail.modalId){Ft.querySelector("capture-photo").remove()}})),document.addEventListener("keyup",(t=>{"Escape"===t.code&&(Ft.hasAttribute("data-open")&&Bt(Ft,!1),It.hasAttribute("data-open")&&Bt(It,!1))})),window.addEventListener("beforeunload",(t=>{if(null!==Qt)return t.preventDefault(),t.returnValue=""})),ne.forEach(((t,e)=>{qt.appendChild(Mt(e,t))})),$t.accept=ht.join(","),kt.forEach((({name:t,path:e,style:a,weight:n})=>{At(t,e,{style:a,weight:n})}));
//# sourceMappingURL=index.0515c798.js.map
