import React from 'react';
import './style.css';
import Agreement from './Agreement';


class Cards extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return(
<p>
            <div className ='wrap'>           

            <div className="card">
            <div class="container">
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h4>bookname</h4>
                <h3 className="s">select
                <input Style="margin-left:100%" type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                        </h3>
            </div> 

            </div>
            <div className="card">
                    <div className="container">
                        <h4>bookname</h4>
                        <h4>bookname</h4>
                        <h4>bookname</h4>
                        <h4>bookname</h4>
                        <h3 className="s">select
                        <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                        
                            </h3>
                            
                    </div> 
            
                </div>
                <div class="card">
                        <div class="container">
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h3 className="s">select
                            <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                                </h3>
                        </div> 
                
                    </div>
            <div className="card">
                    <div className="container">
                        <h4>bookname</h4>
                        <h4>bookname</h4>
                        <h4>bookname</h4>
                        <h4>bookname</h4>
                        <h3 className="s">select
                                
                                <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                        </h3>
                    </div> 
            
                </div>

                <div className="card">
                        <div className="container">
                                
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h4>bookname</h4>
                            <h3 className="s">select
                                
                                    <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                            </h3>
                        </div> 
                
                    </div>
                    <div className="card">
                            <div className="container">
                            
                                <h4>bookname</h4>
                                <h4>bookname</h4>
                                <h4>bookname</h4>
                                <h4>bookname</h4>
                                <h3 className="s">select
                                    
                                        <input  type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
                                </h3>
                            </div> 
                    
                        </div>

                    

                       
            </div>
             <button className="submit-cards ">submit</button>
             </p>
        );




    }

}
export default Cards;