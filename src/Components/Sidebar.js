// Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>My Sidebar</h3>
      </div>
      <ul className="list-unstyled components">
        <p>Dummy Heading</p>
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#page1">Page 1</a>
        </li>
        <li>
          <a href="#page2">Page 2</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
