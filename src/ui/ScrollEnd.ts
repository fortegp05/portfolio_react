const scrollEnd = (): void => {
  const element = document.documentElement;
  const top = element.scrollHeight - element.clientHeight;
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};

export default scrollEnd;
