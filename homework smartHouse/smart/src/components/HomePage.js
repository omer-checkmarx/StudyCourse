import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class HomePage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             roomList: [],
        }
    }
    
    pushRoomToArr = () =>{
        let oldRoomList = this.state.roomList;
        this.setState({roomList:[...oldRoomList,this.props.room]})
        console.log(this.roomList);
        
    }

    render() {
        return (
            <div>
                
                       {this.state.roomList.map((element)=>{
                            return <div><Link to="/room"> <button style={{backgroundColor:this.props.roomcolor}}>
                            {element.props.roomname}'s room </button></Link></div> })}
                    
                  <Link to="/add"><button>ADD</button></Link> 
                 
            </div>
        )
    }
}

