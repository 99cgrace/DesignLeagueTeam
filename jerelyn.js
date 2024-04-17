//loader
window.addEventListener('loaf', ()=> {
  const loader = document.querySelector('.loader');
  setTimeout(()=> {
    loader.setAttribute('style', 'opacity: 0,');
  },500);
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
    document.bodt.style.overflow = 'initial';
  }, 1000);
});
