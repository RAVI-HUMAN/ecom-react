// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
<header class="creative-header">
<img src="images/download.png" width="100px;" alt="Image 1" />
        {/* <div class="logo">Your Logo</div> */}
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
 

  );
};

export default Header;
