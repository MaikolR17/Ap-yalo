import { Component } from 'react';
import React from 'react';
import './App.css';

import PersonCard from '../PersonCard/PersonCard';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      listaNombres: [{
          name: "Doe",
          lastName: "Jane",
          age: 45,
          hairColor: "Black",
        },
        {
          name: "Smith",
          lastName: "John",
          age: 88,
          hairColor: "Brown",
        },
        {
          name: "Fillmore",
          lastName: "Millard",
          age: 50,
          hairColor: "Brown",
        },
        {
          name: "Smith",
          lastName: "Maria",
          age: 62,
          hairColor: "Brown",
        }],
    }
  };

  addAge = (index) => {
    const updatedListaNombres = [...this.state.listaNombres]
    updatedListaNombres[index].age += 1;
    this.setState({
      listaNombres: updatedListaNombres,
    })
  }
  
  render = () => {
    return (
        <div>
          {this.state.listaNombres.map((personas, index) => {
            return (<PersonCard key={index}
              name={personas.name}
              lastName={personas.lastName}
              age={personas.age}
              hairColor={personas.hairColor}
              addAge={() => this.addAge(index)} />)
          })}
        </div>
      );
  }
}

export default App;
