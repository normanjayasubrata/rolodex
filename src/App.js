import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ monsters: data });

      });
  }
  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})

  }


  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    console.log(filteredMonsters)
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox searchEventHandler={this.onSearchChange} placeholder="Search Monster" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
