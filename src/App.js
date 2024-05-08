import React from 'react';
import './App.css';

import PersonCard from './/Componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        name={"Doe"}
        lastName={"Jane"}
        age={"45"}
        hairColor={"Black"}
      />
      <PersonCard
        name={"Smith"}
        lastName={"John"}
        age={"88"}
        hairColor={"Brown"}
      />
      <PersonCard
        name={"Fillmore"}
        lastName={"Millard"}
        age={"50"}
        hairColor={"Brown"}
      />
      <PersonCard
        name={"Smith"}
        lastName={"Maria"}
        age={"62"}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
