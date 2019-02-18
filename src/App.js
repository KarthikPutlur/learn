import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';
import './App.css';
import MoveStuffAround from './MoveStuffAround.js';


class App extends Component {
    
    constructor(){
        
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
          
        
    }

    render() { 
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        }) 
        return (
            <div  >
                <div  className='tc pa2 bg1'>
                    <h1 className='f-subheadline lh-title bg   b--white white  "Lucida Grande", sans-serif '>EDG Application Security Dashboard</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div> 
                <div  className='b--black'>  
            <MoveStuffAround /> 
            </div>
            </div>
            
        
        );
    }   
}

export default App;