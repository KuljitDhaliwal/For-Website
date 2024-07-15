const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
}
);

setTimeout(() => {
    scroll.update();
  }, 1000);
