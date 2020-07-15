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
      

        </form>
      </div>
    );
  }

}
export default App;
