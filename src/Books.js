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
    func(){
       console.log('asdsad')
        var ID = this.props.match.params.id;
        
        console.log(ID)
        return (<p></p>)

    }
    

    render(){

        return(

        <div>
            {() => this.func()}
        
           <SideBar {...this.props}/>
           <Cards {...this.props}/>
          
        </div>  
        );  
    }
}
export default Books;

