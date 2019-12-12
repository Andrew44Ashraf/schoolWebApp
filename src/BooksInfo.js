import React from 'react';
import './style.css';
import AdminSideBar from './AdminSidebar';

class BooksInfo extends React.Component {
    constructor(props){
        super(props);
    }

render() {
    
    return (
    
       
      
  <div className="info"> 
  
       <h3 className="p2"> Select grade to show report </h3>
                  <select className = "dropDown2" onChange = {this._handleChange}>
                    <option value = "grade 5" >  Grade 5</option>
                    <option value = "grade 6"  > Grade 6</option> 
                    <option value = "grade 7" > Grade 7</option> 
                    <option value = "grade 8" > Grade 8</option> 
                    <option value = "grade 9" > Grade 9</option> 
                    <option value = "grade 10" > Grade 10</option> 
                    <option value = "grade 11" > Grade 11</option> 
                    <option value = "grade 12" > Grade 12</option>
                    <option value = "ALL" > All </option> 
                    
                  </select>
    <div class="grid-container">
  <div class="grid-item1">Subject</div>
  <div class="grid-item1">ISBN</div>
  <div class="grid-item1">Author</div>  
  <div class="grid-item1">Company</div>
  <div class="grid-item1">New/Old</div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>  
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  
</div>
  

<label className="Remarks-par">**Remarks</label>
<textarea  id="Remarks" rows="4" cols="50">
</textarea>
<p className="Remark-par">Will be updated each time you submit a new remark</p>
   
<button className="Remarks-btn">Submit</button>
          </div>
          

    );
  }
}

export default BooksInfo;