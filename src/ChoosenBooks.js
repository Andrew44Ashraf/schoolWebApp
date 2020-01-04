import React from 'react';
import './style.css';
import SideBar from './Sidebar';



class ChoosenBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message:'',
            accepted:false,
            message:""
        }
      
    }
    render(){
        return(
<div>
            <div className="wrap2">
            <div className="card2">
              <div className="container2">

                  <div class="row">
  <div class="column" >
    <h2>Book Name</h2>
    <p>Some text..</p>
  </div>
  <div class="column" >
    <h2>Quantatity</h2>
    <p>Some text..</p>
  </div>
</div>
              </div> 
              <button className="print-btn">Print</button>
        </div>
        
            </div>

            

</div>


        );
    }

}
export default ChoosenBooks;