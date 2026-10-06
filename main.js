function toggleTheme(){
  const el=document.documentElement;
  const next=el.getAttribute('data-theme')==='dark'?'light':'dark';
  el.setAttribute('data-theme',next);
  try{localStorage.setItem('theme',next)}catch(e){}
}
(function(){try{const t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})();
