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
        <li>Name:
                <p>the actual name</p>
        </li>
        
        <li>ID:
                <p>the actual name</p>
        </li>
        <li>Grade:
                <p>the actual name</p>
        </li>
        <li>Class:
                <p>the actual name</p>
        </li>
        
    </ul>
    

</div>
        );




    }

}
export default SideBar;