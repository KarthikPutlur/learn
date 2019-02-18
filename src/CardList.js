import React from 'react';
import Card from './Card.js';
import App2 from './App2.js';
import data from  './Appls.js';


const CardList = ({robots}) => {
    return (
        <div>
            {
            robots.map((user,i) => {
                return (
                    <div key ={i} className='tc ba b--black-20 w-20 bw1 bg2 washed-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
                        <App2 data={data[i]}/> 
                        <Card 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}/>
                    </div>
                    
                );
                                     }) 
            }                         
        </div>
    );
}

export default CardList;