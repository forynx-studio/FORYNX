'use strict';
const english=document.documentElement.lang==='en';
const menuOpenLabel=english?'Open menu':'فتح القائمة';
const menuCloseLabel=english?'Close menu':'إغلاق القائمة';
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?menuCloseLabel:menuOpenLabel);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',menuOpenLabel);}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});}
const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
