import"./vendor.b72a5394.js";const d=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}};d();function l(e){return document.querySelector(e)}function u(e){return document.querySelectorAll(e)}Element.prototype.z=Element.prototype.querySelector;Element.prototype.Z=Element.prototype.querySelectorAll;function c(){Element.prototype.computedStyle=function(e){return getComputedStyle(this).getPropertyValue(e)}}c();function h(){HTMLElement.prototype.slideToggle=y}function y(e=400,t="ease"){if(this.slideState||(this.slideState="open"),this.slideState==="opening"||this.state==="closing"){this.animation.reverse(),this.slideState==="opening"?this.slideState="closing":this.slideState="opening";return}this.style.overflow="hidden",this.style.removeProperty("display");const i={height:[this.computedStyle("height"),"0px"],paddingBlock:[this.computedStyle("padding-block"),"0px"],borderBlockWidth:[this.computedStyle("border-block-width"),"0px"],marginBlock:[this.computedStyle("margin-block"),"0px"],outlineWidth:[this.computedStyle("outline-width"),"0px"],boxShadow:[this.computedStyle("box-shadow"),"0 0 0 0 transparent"]};if(this.slideState==="closed")for(let r in i)i[r].reverse();this.animation=this.animate(i,{duration:e,easing:t}),this.slideState=this.slideState==="closed"?"opening":"closing",this.animation.onfinish=()=>{this.slideState==="opening"?(this.slideState="open",this.style.removeProperty("overflow")):(this.slideState="closed",this.style.display="none",this.style.removeProperty("overflow"))}}function f(){EventTarget.prototype.on=EventTarget.prototype.addEventListener,NodeList.prototype.on=function(e,t,i){this.forEach(r=>r.on(e,t,i))},EventTarget.prototype.trigger=async function(e,t){this.dispatchEvent(new CustomEvent(e,t))},NodeList.prototype.trigger=async function(e,t){this.forEach(i=>i.trigger(e,t))},EventTarget.prototype.off=EventTarget.prototype.removeEventListener,NodeList.prototype.off=function(e,t,i){this.forEach(r=>r.off(e,t,i))}}const a={sliding:h,events:f,style:c,init(e){e.forEach(t=>a[t]())}};a.init(["events"]);const g=l('canvas[is="particle-canvas"]');function p(e){const t=e.currentTarget,i=t.name,r=t.type=="checkbox"?!t.checked:parseFloat(t.value);g.options[i]=r}l('input[type="range"]').on("input",p);u('input[type="checkbox"]').on("input",p);
//# sourceMappingURL=index.e56c895b.js.map
