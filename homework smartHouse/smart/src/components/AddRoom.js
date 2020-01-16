import React, { Component } from 'react'
import HomePage from './HomePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // room: {name:'',type:"",color: ''},
            roomName:'',
            roomColor: '',
            roomType: '',
        }
    }

    roomNameUpdate=(e)=>{
        this.setState({roomName:e.target.value})
        
    }

    roomColor=(el)=>{
        this.setState({roomColor:el.target.value})
    }
    roomTypeUpdate=(el)=>{
        this.setState({roomType:el.target.value})
    }

    AddTheRoom=()=>{
        let room = {
            roomName: this.state.roomName,
            roomColor: this.state.roomColor,
            roomType: this.state.roomType,
        }
        this.datasToHomepage(room)
        console.log(room)
    }

datasToHomepage=(room)=>{
    this.props.update(room)


}
    
    render() {
        return (
            <div>
                {/* {this.datasToHomepage()} */}
                {/* <HomePage roomname={this.roomName} roomcolor={this.state.roomColor} plusRoom={this.AddTheRoom}/> */}
                <select onChange={this.roomTypeUpdate}>
                    <option value="">Room Type...</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="kitchen">kitchen</option> 
                </select> <br/>
                <input onChange={this.roomNameUpdate} placeholder="Name of the room"/><br/>
                <input onChange={this.roomColor} placeholder="Color of the room"/><br/>
                <button onClick={this.AddTheRoom}>Add room</button>
                <Link to="/"><button>Go back</button></Link> 

            </div>
        )
    }
}   
