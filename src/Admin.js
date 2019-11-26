import React from 'react';
import './style.css';
import Papa from 'papaparse';



class Admin extends React.Component {
    constructor() {
      super();
      this.state = {
        csvfile: undefined,
        fileName:'',
        message:'',
        isValidFormat:false
      };
      this.updateData = this.updateData.bind(this);
      this.importCSV = this.importCSV.bind(this);
    }
  
    handleChange = event => {
      this.setState({
        csvfile: event.target.files[0],
        fileName:event.target.files[0].name
      });
    
    };
  
    async importCSV() {
        var csvName = this.state.fileName;
        var size = csvName.length;
        if (csvName[size-1]=='v' && csvName[size-2] == 's' && csvName[size-3]== 'c'){
            this.setState({message:'',
            isValidFormat:true
        }); 
        }else{
            this.setState({message:'Please upload a CSV file Extension'});
        }
      if(this.state.isValidFormat == true){  
        const { csvfile } = this.state;
        await Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
    }
    }
  
    updateData(result) {
      var data = result.data;
      console.log('this data');
      console.log(data[1]);
    }

    render() {
      console.log(this.state.csvfile);
      return (
        <div className="App">
          <h2>Import CSV File!</h2>
          <input
            className="csv-input"
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            placeholder={null}
            onChange={this.handleChange}
          />
          <p />
          <button className='btn' onClick={this.importCSV}> Upload Student sheet!</button>
          <p>
              {this.state.message}
          </p>
        </div>
      );
    }
  }
  
  export default Admin;