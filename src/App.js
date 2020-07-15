import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: 'Pet name',
      breed: 'Pet breed',
      gender: '',
      neutered: null,
      weight: 0,
    }
  }
  onNameChange = (event) => {
      this.setState({
        name: event.target.value
      })
  }
  onBreedChange = (event) => {
    this.setState({
      breed: event.target.value
    })
  }
  birthdayChange = (event) => {
    this.setState({
      birthday: event.target.value
    });
  }

  handleGender = (event) => {
    this.setState({
      gender: event.target.value
    })
  }

  handleNeuterSpray = (event) => {
    
  }
  handleWeight = (event) => {
    this.setState({
    weight: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>Pawtastic</h1>
        <form >
          <label>Name</label>
          <input type="name" 
          placeholder="Pet name"
          value= {this.state.name}
          />
          <label>Breed</label>
          <input type ="breed" 
          placeholder ="Pet breed"
          value ={this.state.breed}
          />
          <label>Birthday</label>
          <input type ="birthday" 
          placeholder ="MM/DD/YYYY"
          value ={this.state.birthday}
          />

        </form>
      </div>
    );
  }

}
export default App;
