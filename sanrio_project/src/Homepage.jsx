import React from 'react';
import './Homepage.css'
// import OtherPage from './components/OtherPage'; // Example of another page
import exampleImage from './Cinnamoroll_Image.webp';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Sanrio's Homepage  <br /> 
      サンリオのホームページへようこそ</h1>
      <img src={exampleImage} alt="Cinn" style={{ maxWidth: '100%', height: 'auto' }} />
      
      
      <a style={{ color: 'gray' }} href="
          https://hellokitty.fandom.com/wiki/List_of_Sanrio_characters" rel="noreferrer">
        <br />Introduction
      </a>

      <a style={{ color: 'gray' }} href="
          https://noiseandkisses.com/apps/note/en/tag/%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA/" rel="noreferrer">
        <br />News
      </a>

      <a style={{ color: 'gray' }} href="
          https://www.sanrio.com/blogs/sanrio" rel="noreferrer">
        <br />Goods
      </a>

      <a style={{ color: 'gray' }} href="
          https://en.wikipedia.org/wiki/Sanrio " rel="noreferrer">
        <br />History
      </a>


    </div>
  );
}



export default App;
