import React, { Component } from 'react';

// class Main extends Component {
//   constructor() {
//     super();

//     this.state = {
//       id: '112126428',
//       url: 'https://i.imgflip.com/261o3j.jpg',
//       width: 1200,
//       height: 800,
//     };
//   }

//   getMeme = () => {
//     const arr = memesData.data.memes;
//     const number = () => Math.floor(Math.random() * arr.length);
//     return arr[number()];
//   };

//   upDateMeme = () => {
//     const meme = this.getMeme();
//     this.setState({
//       id: meme.id,
//       url: meme.url,
//       with: meme.width,
//       height: meme.height,
//     });
//   };

//   render() {
//     return (
//       <main>
//         <div className="main--input">
//           <input type="text" id="upper" defaultValue="Shut up" />
//           <input type="text" id="lower" defaultValue="and take my money" />
//           <button onClick={this.upDateMeme}>Generate new meme</button>
//         </div>
//         <img src={this.state.url} alt="random meme" />
//       </main>
//     );
//   }
// }

function Main() {
  const [meme, setMeme] = React.useState({
    topText: 'MEME IT',
    bottomText: 'LIKE YOU MEAN IT',
    imageURL: 'https://i.imgflip.com/261o3j.jpg',
  });

  const [allMemes, setAllMemes] = React.useState();

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  function changeMeme() {
    const arr = allMemes;
    const number = Math.floor(Math.random() * arr.length);
    const url = arr[number].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageURL: url,
    }));
  }

  function updateText(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="main--input">
        <input
          type="text"
          id="upper"
          value={meme.topText}
          name="topText"
          onChange={updateText}
        />
        <input
          type="text"
          id="lower"
          value={meme.bottomText}
          name="bottomText"
          onChange={updateText}
        />
        <button onClick={changeMeme}>Generate new meme</button>
      </div>
      <div className="main--meme">
        <img src={meme.imageURL} alt="random meme" />
        <h2 className="main--meme-text top">{meme.topText}</h2>
        <h2 className="main--meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Main;
