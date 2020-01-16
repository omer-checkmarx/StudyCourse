import React, { Component } from 'react'
import HomePage from './components/HomePage.js';
import Header from './components/Header.js';
import AddRoom from './components/AddRoom.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Room from './components/Room.js';

export default class App extends Component {
 
  
  
  state={
    rooms:[{roomName:'', roomColor:'', roomType:''}]
  }
  
  UpdateTheState=(r)=>{
    this.setState({rooms:r}) //CR: Problem: rooms its a list and you change it to a single room. you need to add the room to the list and not change the entire rooms variable
    console.log(this.state.rooms.roomName); //CR: Rooms suppose to be a list of items, rooms. you cant access roonName of a list because its not an object its a list
    
  }
  
  
  
  
   render() {
    return (
      <div className="App">
        <Header/>
        
        <Router>
  
          <Switch>
  
            <Route exact path="/"> 
              <HomePage roomname={this.state.rooms.roomName} roomcolor={this.state.rooms.roomColor} room={this.state.rooms}/>
            </Route>
  
            <Route path="/add"> 
              <AddRoom update={this.UpdateTheState}/>
            </Route>
  
            <Route path="/room"> 
              <Room/>
            </Route>
  
          </Switch>
          
        </Router>
      </div>
    );
  }
}
