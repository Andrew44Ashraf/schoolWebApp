import React from 'react';
import './style.css';

import { VictoryBar, VictoryChart } from 'victory';


class Analytics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data:{
            x:'324',
            y:'asdasd'
          }
        }
    }
render() {
    const data = {'China':1415046,
"India":1354052,
"United States":326767,
"Indonesia":266795,
"Brazil":210868}
    return (
  <div>
      <p>Welcom to Analytics </p>
      <div>
                  <select className = "dropDown" onChange = {this._handleChange}>
                    <option value = "grade 5" >  PLEASE CHOOSHE YOUR Grade</option>
                    <option value = "grade 5" >  Grade 5</option>
                    <option value = "grade 6"  > Grade 6</option> 
                    <option value = "grade 7" > Grade 7</option> 
                    <option value = "grade 8" > Grade 8</option> 
                    <option value = "grade 9" > Grade 9</option> 
                    <option value = "grade 10" > Grade 10</option> 
                    <option value = "grade 11" > Grade 11</option> 
                    <option value = "grade 12" > Grade 12</option> 
                    
                  </select>
                  </div>
      <VictoryChart
            style={{tickLabels: {fontSize: 120}}}
      width='960'
      height='500'
      domainPadding={50}
      padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
    >
      <VictoryBar data={this.state.data} x="country" y="population" />
    </VictoryChart>
  
          </div>
        
          
    );
  }
}

export default Analytics;   