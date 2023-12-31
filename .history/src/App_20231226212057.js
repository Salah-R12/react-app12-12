import React from 'react';
import Compteur from './Compteur'
import Message from './Message';
import Login from './Login';

function App() {
  return (
   

    <div className="App">
      <h1>Bienvenue sur notre site</h1>
      <Compteur />
      <Message text="Ceci est un message important" />
    </div>
  );
}

export default App;
