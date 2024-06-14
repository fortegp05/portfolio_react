import React, { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer>
      <small>
        Copyright&copy; <a href="https://twitter.com/FORTEgp05">@FORTEgp05</a> All Rights Reserved.
      </small>
      <span className="pr">
        《
        <a
          href="https://template-party.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Design:Template-Party
        </a>
        》
      </span>
    </footer>
  );
};

export default Footer;
