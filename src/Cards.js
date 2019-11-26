import React from 'react';
import './style.css';


class Cards extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return(

<div className ='wrap'>           

<div className="card">
   <div class="container">
       <h4>bookname</h4>
       <h4>bookname</h4>
       <h4>bookname</h4>
       <h4>bookname</h4>
       <h4>
       <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
            </h4>
   </div> 

</div>
<div className="card">
        <div className="container">
            <h4>bookname</h4>
            <h4>bookname</h4>
            <h4>bookname</h4>
            <h4>bookname</h4>
            <h4>
            <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                 </h4>
        </div> 
 
     </div>
     <div class="card">
            <div class="container">
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>
                <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                     </h4>
            </div> 
     
         </div>
<div className="card">
        <div className="container">
            <h4>bookname</h4>
            <h4>bookname</h4>
            <h4>bookname</h4>
            <h4>bookname</h4>
            <h4>
                    
                    <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
            </h4>
        </div> 
 
     </div>

     <div className="card">
            <div className="container">
                     
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>
                    
                        <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                </h4>
            </div> 
     
         </div>
         <div className="card">
                <div className="container">
                         
                    <h4>bookname</h4>
                    <h4>bookname</h4>
                    <h4>bookname</h4>
                    <h4>bookname</h4>
                    <h4>
                        
                            <input className="ch" type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                    </h4>
                </div> 
         
             </div>

         



</div>
        );




    }

}
export default Cards;