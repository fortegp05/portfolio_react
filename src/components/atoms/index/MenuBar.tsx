import React, { FC } from 'react';
import './MenuBar.css';
import toScroll from '../../../ui/ToScroll';
import scrollEnd from '../../../ui/ScrollEnd';

const MenuBar: FC = () => {
  return (
    <nav className="menubar">
      <ul>
        <li>
          <button type="button" onClick={() => toScroll('AreaProfile')}>
            Profile
          </button>
        </li>
        <li>
          <button type="button" onClick={() => toScroll('AreaProject')}>
            Projects
          </button>
        </li>
        <li>
          <button type="button" onClick={scrollEnd}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
