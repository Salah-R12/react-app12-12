import React from 'react';
import Compteur from './Compteur'
import Message from './Message';

function App() {
  return (
   

    <div className="App">
      <h1>Bienvenue sur notre site</h1>
      <Compteur />
      <Message texteCeci est un message important" />
    </div>
  );
}

export default App;
