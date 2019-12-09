import React from 'react';
import './style.css';
import SideBar from './Sidebar';
import Cards from './Cards';



class Books extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            view:true
        }
    }
    toggleSidbar(){
        this.setState({view:!this.state.view
        });
    }

    render(){

        return(
        <div>
            {this.state.view && <SideBar/>}   
            <Cards/>
        </div>  
        );
    }
}
export default Books;

