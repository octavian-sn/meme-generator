import React, { Component } from 'react';

function Main() {
  return (
    <main>
      <div className="main--input">
        <input type="text" id="upper" defaultValue="Shut up" />
        <input type="text" id="lower" defaultValue="and take my money" />
        <button>Generate new meme</button>
      </div>
    </main>
  );
}

export default Main;
