import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: '' // Uncommented this line
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase()) //gfttrtedtrfsrfrfr
    );

    return (
      <div className="App">
        <SearchBox 
        placeholder='Search Moster'
        headleCharge={e => this.setState({ SearchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
