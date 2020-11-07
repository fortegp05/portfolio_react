import React, { FC, useEffect } from 'react';
import scrollTop from '../../ui/ScrollTop';
import './FabScrollToTop.css';

const SHOW_FAB_HEIGHT = 300;

const FabScrollToTop: FC = () => {
  const scrollListener = () => {
    const fab = document.getElementById('actFab');
    if (fab == null) return;
    if (window.pageYOffset < SHOW_FAB_HEIGHT) {
      fab.classList.remove('show');
    } else {
      fab.classList.add('show');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
  }, []);

  return (
    <button type="button" id="actFab" onClick={scrollTop}>
      <img src="images/up_arrow.png" alt="" />
    </button>
  );
};

export default FabScrollToTop;
