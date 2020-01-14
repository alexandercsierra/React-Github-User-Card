import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import axios from 'axios'
import Card from './components/Card'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: {
        login: "alexandercsierra",
        name: "Alex Sierra",
        avatar: "https://avatars3.githubusercontent.com/u/26785156?s=400&u=a809604c8a7843c7707b4cce73d3790325ea435c&v=4",
        bio: "Learning Full Stack Development one line at a time at Lambda School",
        location: "Maine, USA",
        url: "https://github.com/alexandercsierra"
      },
      followers: []
    }    
  }


  // {
  //   login: "alexandercsierra",
  //   name: "Alex Sierra",
  //   avatar: "https://avatars3.githubusercontent.com/u/26785156?s=400&u=a809604c8a7843c7707b4cce73d3790325ea435c&v=4",
  //   bio: "Learning Full Stack Development one line at a time at Lambda School",
  //   location: "Maine, USA",
  //   url: "https://github.com/alexandercsierra"
  // }

  // componentDidMount(){
  //   axios.get("https://api.github.com/users/alexandercsierra")
  //     .then(res => this.setState({user: res.data}))
  //     .catch(err => console.log(err))
  //   axios.get("https://api.github.com/users/alexandercsierra/followers")
  //     .then(res => this.setState({followers: res}))
  //     .catch(err => console.log(err))
  // }

// username: this.state.user.login
// name: this.state.user.name
// avatar: this.state.user.avatar_url
// bio: user.bio
// location: user.location
// url: this.state.user.url

  
    
  render(){
    console.log(this.state);
    return (
      <div className="App">
        Stuff
        <Card user={this.state.user}/>
      </div>
    );
  }
}

export default App;
