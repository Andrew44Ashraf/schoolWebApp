import React from 'react';
import './style.css';
import { throwStatement } from '@babel/types';


class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            view:true
        }
        this.__toggleSideBar = this.__toggleSideBar.bind(this);
    }
    __toggleSideBar = (event) =>{
        this.setState({view:!this.state.view
        });
        console.log(
            'sdasd'
        )
    }

    render(){
        return(
            <div>
            <input type="button" className="toggle-btn" onClick={this.__toggleSideBar}/>
{this.state.view && 
<div id="sidebar">
   
        
        
 
    
     <ul>
        
     <li>
             <p>Student name</p>
     </li>
     
     <li>
             <p>Student ID</p>
     </li>
     <li>
             <p>Student Grade</p>
     </li>
     <li>
             <p>Student class</p>
     </li>
     
 </ul>

   
    

</div>
}
</div>
        );




    }

}
export default SideBar;