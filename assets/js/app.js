!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new Swiper(".swiper-container",(r(n={direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:100,simulateTouch:!0},"slidesPerView","auto"),r(n,"width","100%"),r(n,"pagination",{el:".tabs",bulletClass:"tabs-item",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">TAB '+(e+1)+"</span>"}}),r(n,"scrollbar",{el:".swiper-scrollbar"}),n));$(".menu-btn").on("click",(function(e){e.preventDefault,$(this).toggleClass("menu-btn_active"),$(document).click((function(e){$(e.target).closest(".menu-btn").length||($(".menu-btn").removeClass("menu-btn_active"),e.stopPropagation())}))})),$(".menu-btn, .nav-list").click((function(){$(".nav-list").toggleClass("nav-list--active")})),$(document).click((function(e){$(e.target).closest(".menu-btn").length||($(".nav-list").removeClass("nav-list--active"),e.stopPropagation())}))}]);