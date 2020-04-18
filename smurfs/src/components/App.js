import React, { Component } from "react";
import "./App.css";
import SmurfCard from './SmurfCard';


class App extends Component {

  initialState = {
    smurf: [],
    name: "",
    age: "",
    height: ""
  };

  state = this.initialState

  componentDidMount() {
    console.log('bk: App.js: CDM: component mounted')
    fetch('http://localhost:3333/smurfs')
        .then(res => res.json())
        // .then(newRes => console.log('bk: App.js: CDM: newRes: ', newRes))
        .then( result => this.setState({ smurf: result } ))
        .catch(err => console.error(err))
  }

  componentDidUpdate(prevState) {
    console.log("bk: App.js: CDU: component updated");
    if (prevState.smurf !== this.state.smurf) {
      // console.log("bk: App.js: CDU: user state has changed");
      // console.log('CDU: user state: ', this.state.users);
      // console.log('CDU: user name: ', this.state.userName);

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState(() => this.initialState)

    this.forceUpdate()
  }

  handleNameChange = e => {
    this.setState({...this.state, name: e.target.value});
  }
  handleAgeChange = e => {
    this.setState({...this.state, age: e.target.value});
  }
  handleHeightChange = e => {
    this.setState({...this.state, height: e.target.value});
  }

  addNewSmurf = (e) => {
    const smurfName = this.state.name;
    const smurfAge = this.state.age;
    const smurfHeight = this.state.height;

    let addedSmurf = {
      name: smurfName,
      age: Number(smurfAge),
      height: smurfHeight
    };
    // console.log('bk: addedSmurf: obj: addedSmurf: ', addedSmurf)

    // this.refs.inputName.value = '';
    // this.refs.inputAge.value = '';
    // this.refs.inputHeight.value = '';

    return this.state.smurf.push(addedSmurf);
  }

  render() {
    return (
      <>
        <div className="App">
          {console.log('state: ', this.state)}
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>

        <p>Please Enter The Information Below To Add A New Smurf To The Village</p>

        <form onSubmit={this.handleSubmit} id='smurf-form'>
          <section>
            <input 
              type="text"
              ref='inputName'
              placeholder='Enter Smurf Name'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <input 
              type="text"
              ref='inputAge'
              placeholder='Enter Age'
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
            <input 
              type="text"
              ref='inputHeight'
              placeholder='Enter Height'
              value={this.state.height}
              onChange={this.handleHeightChange}
            />
            <button onClick={this.addNewSmurf}>Send</button>
          </section>
          
        </form>

        {this.state.smurf.map(newSmurf => (
            <SmurfCard smurf={newSmurf} key={newSmurf.id}/>
          ))}
      </>
    );
  }
}

export default App;
