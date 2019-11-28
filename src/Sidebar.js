import React from 'react';
import './style.css';


class SideBar extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return(

<div id="sidebar">
    <div class="toggle-btn" onclick="toggleSideBar()">
        <span></span>
        <span></span>
        <span></span>
    </div>
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
        );




    }

}
export default SideBar;