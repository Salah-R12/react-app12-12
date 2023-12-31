import React from 'react';
import Compteur from './Compteur'
import Message from './Message';

function App() {
  return (
    <Compteur />
    <Message texte="Ceci est un message important" />
  );
}

export default App;
