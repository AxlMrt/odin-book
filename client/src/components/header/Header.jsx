import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import './header.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>odinbook</h1>
      </div>
      <nav>
        <div className="search_container">
          <Icon path={mdiMagnify} size={1} color="gray"/>
          <input
            type="text"
            name=""
            id=""
            placeholder="Rechercher sur Odinbook"
          />
        </div>
      </nav>
      <div>
        <div className="roundediv"></div>
        <div className="roundediv"></div>
        <div className="roundediv"></div>
      </div>
    </header>
  );
}
