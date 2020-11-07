const toScroll = (id: string): void => {
  const target = document.getElementById(id);
  if (target == null) return;
  const rectTop = target.getBoundingClientRect().top;
  const { pageYOffset } = window;
  const top = rectTop + pageYOffset;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};

export default toScroll;
