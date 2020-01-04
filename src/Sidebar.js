import React from 'react';
import './style.css';
import { throwStatement } from '@babel/types';


class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            view:true,
            studentName:'',
            Grade: '',
            studentId:''
        }
      
    }
   
    async getStudentData(){
       
        var ID = this.props.match.params.id;
        const user = {
                "ID":ID
            }
           
            var res = await this.SendPostRequest(user);
         
       
           
           
        }
            
           
        
  
    
    async SendPostRequest(user) {
        
   
      const params = {
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          },              
          body:{
             user
          },
          json:true
        }
        try{      
        var response = await fetch('http://localhost:5000/StudentInfo',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                user
            })
        })
    }catch(e){
        console.error(e);
    }
    const body = await response.json();
    console.log('Student Info')
    console.log( body.student.Grade)
    this.setState({studentName:body.student.Name, Grade:body.student.Grade, studentId:body.student.StudentID})
    console.log(this.state.studentId)
    return response;
  }
    
 componentDidMount(){
           this.getStudentData();  
        }
        
  

    render(){
        return(
            <div>
          
<div id="sidebar">
   
<input type="button" className="toggle-btn" onClick={this.__toggleSideBar}/>

        
 
    
     <ul>
        
     <li>
             <p> Name : {this.state.studentName}</p>
     </li>
     
     <li>
             <p>ID: {this.state.studentId}</p>
     </li>
     <li>
             <p> Grade: {this.state.Grade}</p>
     </li>
     
     
 </ul>

   
    

</div>

</div>
        );




    }

}
export default SideBar;