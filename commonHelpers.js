import{S as d,N as l,P as u,A as f}from"./assets/vendor-faf1aa2b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();window.addEventListener("load",()=>{new d(".swiper",{modules:[l,u,f],direction:"vertical",loop:!0,speed:3e3,effect:"fade",autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});const r={body:document.querySelector("body"),burger:document.querySelector(".header-burger"),headerNav:document.querySelector(".header-nav"),headerLink:document.querySelectorAll(".header-item")};function s(){r.burger.classList.toggle("active"),r.headerNav.classList.toggle("active"),r.body.classList.toggle("lock")}r.burger.addEventListener("click",s);r.headerLink.forEach(i=>{i.addEventListener("click",s)});const p=window.matchMedia("(max-width: 1151px)");p.addEventListener("change",i=>{i.matches||r.headerLink.forEach(o=>{o.removeEventListener("click",s)})});
//# sourceMappingURL=commonHelpers.js.map
