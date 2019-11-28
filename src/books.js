import React from 'react';
import './style.css';



class Books extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
            <div>    
            <div id="sidebar">
    <div class="toggle-btn" onClick="toggleSideBar()">
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

        <div className="wrap">
                <div className="card">
                <div className="container">
                    <h4>bookname</h4>
                    <h4>bookname</h4>
                    <h4>bookname</h4>
                    <h4>bookname</h4>
                    <h4>Select
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
                    <h4> Select
                    <input className="inputbox2" type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
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
                 <div class="card">
                        <div class="container">
                                 
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>
                                
                                    <input class="ch" type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                            </h4>
                        </div> 
                 
                     </div>
                     </div>
                 
    </div>
        );
    }
}
export default Books;

