import React from 'react';
import './style.css';
import SideBar from './Sidebar';
import Cards from './Cards';



class Books extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
        <div>
            <SideBar/>   
            <Cards/>
        </div>  
        );
    }
}
export default Books;

