import React from 'react';
import './style.css';
import Papa from 'papaparse';
import AdminSideBar from './AdminSidebar';




class Admin extends React.Component {
    constructor(props) {
      super(props);
      this.updateData = this.updateData.bind(this);
      this.importCSV = this.importCSV.bind(this);
      this.SendStudentInfo = this.SendStudentInfo.bind(this)
     
      this.state = {
        csvfile: undefined,
        fileName:'',
        message:'',
        isValidFormat:false,
        grade:'', 
        studentSheet:[]
      };
      this.sheet = {
        'data':''
      }
      

    }
  
    handleChange = event => {
      this.setState({
        csvfile: event.target.files[0],
        fileName:event.target.files[0].name
      });
    
    };
    async validinfo(){
      var csvName = this.state.fileName;
        var size = csvName.length;
        if (csvName[size-1]==='v' && csvName[size-2] === 's' && csvName[size-3]=== 'c'){
            this.setState({message:'',
            isValidFormat:true
        }); 
        }else{
            this.setState({message:'Please upload a CSV file Extension'});
        }
    }
    async importCSV() {
      await this.validinfo()
      if(this.state.isValidFormat === true){

        const { csvfile } = this.state;
         await Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
  
    }
    }
    async SendStudentInfo(){
      try {
        
      
         await this.importCSV();
         console.log(this.sheet)
          const user={
                  "data":this.sheet
          } 

      var res = await this.SendPostRequest(user);
 
    } catch (error) {  
      console.log(error)
  }


}

async SendPostRequest(user){

 
      const params = {
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          },              
          body:{
             "data":user,
             'grade':this.state.grade
          },
          json:true
      }
      try{      
      var response = await fetch('http://localhost:5000/CSVStudents',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            "data":user,
            'grade':this.state.grade
          })
      })
  }catch(e){
      console.error(e);
  }
  const body = await response.json();
  console.log(body)
 console.log(body.Response)
  
 
 return body;
  
}

_handleChange = (event) => {
  this.setState({ grade: event.target.value });
}

   async updateData(result) {
      var data = result.data;
     this.sheet ={
       'data': data
     }
      return data ;
    }

    render() {
      console.log(this.state.csvfile);
      return (
        <div>
        <AdminSideBar {...this.props}/>
       <div>
         <h3 className="p1"> Select grade to show report </h3>
                  <select className = "dropDown" onChange = {this._handleChange}>
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
                  </div>
    <div className="wrap2">
            <div className="card2">
              <div className="container2">
                  {/* <h4>Student Name</h4>
                  <h4>Student Data</h4>
                   */}
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

            <div className="App1">
              <h3  className="i">Set the final date to be edited</h3>
            <input className="date" type="date" name="bday"/>
            <input className="submit-btn" type="submit"/>
</div>

<div className="App2">
<h3 className="i">Import Student data</h3>
              <input
                className="ch-file"
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                name="file"
                placeholder={null}
                onChange={this.handleChange}
              />
              <p className="p-center" />
              <button className='btn2 i' onClick={this.SendStudentInfo}> Upload Student sheet</button>
              <p className="warning">
                  {this.state.message}
              </p>
              </div>

              <div className="App3">
              <h3 className='i' >Import books</h3>
              <input
                className="ch-file"
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                name="file"
                placeholder={null}
                onChange={this.handleChange}
              />
              <p className="p-center" />
              <button className='btn2 i' onClick={this.importCSV}> upload books sheet</button>
              <p className="warning">
                  {this.state.message}
              </p>
              </div> 



            </div>
          
            
      );
    }
  }
  
  export default Admin;