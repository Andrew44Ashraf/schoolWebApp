import React, { Component } from 'react';

class Validation extends Component {
    async sendDataBackend(){
        
        
        const data={
               "Token":this.props.match.params.token


 
        }
    var res = await this.SendPostRequest(data);
   

   


}
async SendPostRequest(data){


    const params = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },              
        body:{
           data
        },
        json:true
    }
    try{      
    var response = await fetch('http://localhost:5000/mailregisteration',{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
             data
        })
    })
}catch(e){
    console.error(e);
}
const body = await response.json();
console.log(body);

return response
}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Validation;