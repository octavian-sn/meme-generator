import React, { Component } from 'react';
import github from '../assets/gitb.png';

export default function Credits() {
  return (
    <div className="credits">
      <div className="credits--image">
        <a href="https://github.com/octavian-sn/meme-generator">
          <img src={github} alt="github logo" />
        </a>
      </div>
      <div className="credits--text">Created by Octavian Șulic</div>
    </div>
  );
}
