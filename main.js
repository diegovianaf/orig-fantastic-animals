(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:v,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",v="suspendedYield",f="executing",d="completed",p={};function y(){}function m(){}function g(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(C([])));L&&L!==n&&r.call(L,o)&&(b=L);var k=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=g,c(k,"constructor",g),c(g,"constructor",m),m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(M.prototype),c(M.prototype,a,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new M(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n,r){t(this,e),this.internalLinks=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.internalLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.internalLinks.length&&this.addLinkEvent(),this}}]),e}(),o=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="active"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,r){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(r),this.activeClass="active"}return r(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),s=function(){function e(n,r,i){t(this,e),this.openButton=document.querySelector(n),this.closeButton=document.querySelector(r),this.modalContainer=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutModal=this.clickOutModal.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle("active")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutModal",value:function(t){t.target===this.modalContainer&&this.toggleModal()}},{key:"addModalEvents",value:function(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.clickOutModal)}},{key:"init",value:function(){return this.openButton&&this.closeButton&&this.modalContainer&&this.addModalEvents(),this}}]),e}(),c=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function u(t,e,n){var r=document.documentElement,i="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(i),e.forEach((function(t){r.removeEventListener(t,o)})),n())}t.hasAttribute(i)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,o)}))})),t.setAttribute(i,""))}var l=function(){function e(n,r){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.events=void 0===r?["touchstart","click"]:r,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return r(e,[{key:"activeDropdownMenu",value:function(t){t.preventDefault();var e=t.currentTarget;e.classList.add(this.activeClass),u(e,this.events,(function(){e.classList.remove("active")}))}},{key:"addDropdownMenusEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}]),e}(),h=function(){function e(n,r,i){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(r),this.activeClass="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}return r(e,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),u(this.menuList,this.events,(function(){t.menuList.classList.remove(t.activeClass),t.menuButton.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){return t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}]),e}(),v=function(){function e(n,r){t(this,e),this.storeOperation=document.querySelector(n),this.activeClass=r}return r(e,[{key:"dataStoreOperation",value:function(){this.weekDays=this.storeOperation.dataset.week.split(",").map(Number),this.dayTime=this.storeOperation.dataset.time.split(",").map(Number)}},{key:"dataNow",value:function(){this.dateNow=new Date,this.dayNow=this.dateNow.getDay(),this.timeNow=this.dateNow.getUTCHours()-3}},{key:"itsOpen",value:function(){var t=-1!==this.weekDays.indexOf(this.dayNow),e=this.timeNow>=this.dayTime[0]&&this.timeNow<this.dayTime[1];return t&&e}},{key:"activateOpen",value:function(){this.itsOpen()&&this.storeOperation.classList.add(this.activeClass)}},{key:"init",value:function(){return this.storeOperation&&(this.dataStoreOperation(),this.dataNow(),this.activateOpen()),this}}]),e}();function f(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){f(o,r,i,a,s,"next",t)}function s(t){f(o,r,i,a,s,"throw",t)}a(void 0)}))}}var p=n(757),y=n.n(p),m=function(){function e(n,r,i){t(this,e),this.numbers=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}return r(e,[{key:"animaNumbers",value:function(){var t=this;this.numbers.forEach((function(e){return t.constructor.incrementNumber(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumbers())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementNumber",value:function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,i=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())}}]),e}();function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(){function e(n){var r,i;t(this,e),this.sections=document.querySelectorAll(n),this.halfWindow=.6*window.innerHeight,this.checkDistance=(r=this.checkDistance.bind(this),20,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];i&&clearTimeout(i),i=setTimeout((function(){r.apply(void 0,e),i=null}),20)})}return r(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.halfWindow)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("active"):t.element.classList.contains("active")&&t.element.classList.remove("active")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();new i('[data-navbar="smooth"] a[href^="#"]').init(),new o('[data-anime="accordion"] dt').init(),new a('[data-tab="navbar"] li','[data-tab="content"] section').init(),new s('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),new c("[data-toolTip]").init(),new b('[data-anime="scroll"]').init(),new l("[data-dropdown]").init(),new h('[data-menu="button"]','[data-menu="list"]').init(),new v("[data-week]","open").init(),function(t,e){var n=document.querySelector(".numbers-grid");function r(t){var e=function(t){var e=document.createElement("div");return e.classList.add("animal-number"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-number>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function i(){new m("[data-number]",".numbers","active").init()}function o(){return(o=d(y().mark((function e(){var n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(t){return r(t)})),i(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(Error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("../../animalsapi.json"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-price").innerText=(1e3/t.EUR.sell).toFixed(4)})).catch((function(t){return console.log(Error(t))}))})()})();