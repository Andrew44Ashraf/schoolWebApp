import React from 'react';
import './style.css';



class Agreement extends React.Component{
    constructor(){
        super();
        this.state = {
            message:'',
            accepted:false,
            message:""
        }
        this.toggleState = this.toggleState.bind(this);
    }





    
 
    async sendDataBackend(){
            const{token} = this.props.match.params;
            console.log(token)
                const user={
                        "token": token
                }

            var res = await this.SendPostRequest(user);
       
            
      
 
    }
    toggleState(){
        this.setState({accepted:true});
    }
    async SendPostRequest(user){
      
        if (this.state.accepted == true){
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
            var response = await fetch('http://localhost:5000/Validate',{
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
        console.log(body)
       console.log(body.Response)
        if(body.Response ==="ok"){
            console.log("asd")
            this.props.history.push("/Login");
        }else {
            this.setState({message:body.Response});
        }
       
       return body;
        }
    }

    render(){
        return(
            <div className='agree-body' >
                <h3  >Hallo {this.props.name}</h3>
                <h2>
                    Bitte lesen Sie den folgenden Abschnitt sorgfältig durch.
                    يرجى قراءة القسم التالي بعناية
                    
                </h2>
              
                    
                     <h1>für deutsch bitte runterscrollen</h1> 

                     <ul direction = "rtl">
        <li direction = "rtl" margin-right= "20px">
                <p> الصفوف من الأول حتى الرابع الإبتدائى الكتب إلزامية لكافة المواد . </p>
        </li>
        
        <li>
                <p> بالنسبة للصفوف من الخامس إلى الحادى عشر فإننا نوجه عنايتكم لضرورة ملء خانة "نعم" فى حالة الشراء من المدرسة وخانة "لا" فى حالة الشراء بمعرفتكم . أما الخانات التى تترك خالية سوف نعتبرها "نعم". </p>
        </li>
        <li>
                <p> فى حالة عدم تسليم استمارة طلب الكتب فى الموعد المحدد فلن يلتفت إلى الطلب. ويتحتم عليكم شراء الكتب بمعرفتكم </p>
        </li>
        <li>
                <p> فى حالة استخدام كتب مستعملة لابد أن تكون نظيفة جداً وخالية من أية ملاحظات مدونة أو تسطير أو محو بالممحاة أو المصحح (كوركتور </p>
        </li>
        <li>
                <p> يلتزم الطالبات بشراء جميع كراسات التدريبات المصاحبة للكتب الدراسية من المدرسة </p>
        </li>
        <li>
                <p> لابد أن تكون جميع الكتب( بما فيها الأطلس والمعاجم) بحوزة كل تلميذة على حدة دائما . بما فى ذلك الأخوات.</p>
        </li>
        <li>
                <p>  حال عدم مطابقة أى كتاب مدرسى للمواصفات يجب توفيره فوراً بمعرفتكم .</p>
        </li>
        <li>
                <p> يتحتم عليكم إستلام جميع الكتب التى طلبتموها من المدرسة دون إستثناء حيث إننا لن نقبل اى تعديل فى الطلب .</p>
        </li>
        <li>
                <p> يتحتم عليكم إستلام جميع الكتب التى طلبتموها من المدرسة دون إستثناء حيث إننا لن نقبل اى تعديل فى الطلب .</p>
        </li>
        
    </ul>        
        <div className='p2'>
       <p className='p2'>  </p> 
       By cheching the box you accepted and agreed  <input  type="checkbox"   value="I accept and Agree" className= "checkbox1" onClick = {this.toggleState}/>
       </div>
            <input 
                  type="button" 
                  className="agreebtn" 
                  value="Sign up"
                  onClick = {()=>this.sendDataBackend()} 
            />
            <p>
            {this.state.message}</p>
        </div>
        );



    }
}
export default Agreement;
