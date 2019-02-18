import React, {Component} from 'react';

import {Chart} from "react-google-charts";




class App2  extends Component {
  render() {
    return (
      <div className="App2 ">
       
        {
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            backgroundColor= "#111111"
            opacity="0.9"
            
            data={this.props.data}
          />
        }
      </div>
    );
  }
}

export default App2;