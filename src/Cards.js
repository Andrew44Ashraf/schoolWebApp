import React from 'react';
import './style.css';
import Agreement from './Agreement';


class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alreadySelcted:false,
            book:[],
            counter:0,
            ObligatoryCOunter:0,
            id:''

        }
        
    
        
    }
    
    async SubmitBooks(use){
       
        //var ID = this.props.match.params.id;
       
        const user = {
                "ID":''
            }
           
            var res = await this.SendPostRequestSubmit(user);
           console.log(res)
       
           
           
    }
    async getBooksBackend(){
       
        var ID = this.props.match.params.id;
        this.setState({id:ID})
        console.log(this.state.id)
        const user = {
                "ID":ID
            }
           
            var res = await this.SendPostRequestFirst(user);
           
       
           
           
        }
     
           
        
  
    async Allign(readBooks){
        console.log('sad')
        this.setState({book:readBooks});
        console.log(readBooks)

    }
    async SendPostRequestSubmit(user) {
        
   
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
          var response = await fetch('http://localhost:5000/Student',{
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
      
    
      return response;
    }
    async SendPostRequestFirst(user) {
       

        try{      
        var response = await fetch('http://localhost:5000/StudentBooks',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                user
            })
        })
    }catch(e){
        console.error(e);
        console.log('error')
    }
    const body = await response.json();
    
    await this.Allign(body.Books)
    console.log('our books');
    console.log(this.state.book);
   
   
  
    return response;
  }
    
async componentDidMount(){
           await this.getBooksBackend();  
        }
        

    YesFunc(value){
        var currentcount = this.state.counter
        if(this.choosenBooks.includes(value)){
            var index = this.choosenBooks.indexOf(value)
            this.choosenBooks.splice(index,1)
            this.setState({counter:currentcount--})
        }
        else{
            this.choosenBooks.push(value)
            this.setState({counter:currentcount++})

        }
        
    }

    NoFunc(value){
        var currentcount = this.state.counter
        if(this.choosenBooks.includes(value)){
            var index = this.choosenBooks.indexOf(value)
            this.choosenBooks.splice(index,1)
            this.setState({counter:currentcount--})
        }
       
        
    }
        
    render(){
        
            let cards = []
            
            
              for (var i = 0; i < this.state.book.length; i++){
                  if(this.state.book[i].Obligatory === '0'){
                 
                cards.push( <div className="card">
                <div class="container">
                    <h4>Book Name: {this.state.book[i].Name}</h4>
                    <h4>ISBN: {this.state.book[i].ISBN}</h4>
                    <h4>Author: {this.state.book[i].Company}</h4>
                    <h4>Subject: {this.state.book[i].Subject}</h4>
                    <h3 className="s">Yes
                    <input  type="checkbox" id="fruit1" name="fruit-1" value='sa' />
                    No
                    <input  type="checkbox" id="fruit1" name="fruit-1" value='s'/>
                            </h3>
                </div> 
    
                </div>);
                  
                  }else{
                cards.push( <div className="card">
                <div class="container">
                    <h4>Book Name: {this.state.book[i].Name}</h4>
                    <h4>ISBN: {this.state.book[i].ISBN}</h4>
                    <h4>Author: {this.state.book[i].Company}</h4>
                    <h4>Subject: {this.state.book[i].Subject}</h4>
                    <h3 className='s'> Obligatory </h3> 
                    </div> 
    
                     </div>
                    );
                }
              
      
           } 
          
        return(
            
           
 <div>
            <div>
            {cards}
           
            </div>
         
            <input className="submit-cards "
             type= 'button'
             value = 'submit'
              onClick ={()=>
              this.props.history.push('/Choosen')} />
                
             </div>
        );




    }

}
export default Cards;