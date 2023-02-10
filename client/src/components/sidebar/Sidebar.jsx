import React from 'react';
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <ul>
          <li>
            <Icon path={mdiHome} size={1} />
            Home
          </li>
          <li>Axl Mrt</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Amis</li>
        </ul>
      </div>
    </div>
  );
}
