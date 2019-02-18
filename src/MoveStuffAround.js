import React from 'react'
import Ticker from 'react-ticker'
 
const MoveStuffAround = () => (
    <Ticker speed={25} mode={"chain"} >
        {({ index }) => ( 
            <h1 className="white-90 mw8 fw4 ">***Hurry up to grab the seats for the AppSec Lunch&Learn session***</h1>
                 
            
        )}
    </Ticker>
)
 


export default MoveStuffAround