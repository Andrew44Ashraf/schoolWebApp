import React from 'react';
import './style.css';


class Agreement extends React.Component{
    constructor(){
        super();
        this.state = {
            message:'',
            accepted:false
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
        <ol>
                <p className="space"></p>
               
                <li>
                Für die Klassen 1 bis 4 werden keine Bücherzettel verteilt, da alle Schulbücher neu von der Schule gekauft werden müssen!
                </li>
                <li>
                 Bei den  Bücherzetteln für Klassen 5 bis 12 müssen alle Felder mit „ja“ = Kauf von der Schule  bzw. „nein“ = Selbstbeschaffung  ausgefüllt sein. Leere Felder werden automatisch mit „ ja“ von uns gefüllt.                </li>
                <li>
                Die von Ihnen bestellten Bücher müssen beim Bücherverkauf in der Schule abgenommen werden (Es werden keine Bücher zurückgenommen!).
                </li>
                <li>
                 Für die Bücherzettel besteht eine Bringepflicht, d.h. sie sind pünktlich und unterschrieben  abzugeben. Verspätete Einreichungen werden nicht berücksichtigt. Sie müssen sich in diesem Fall die Bücher selbst besorgen.                </li>
                <li>
                Bei Verwendung von gebrauchten Büchern ist unbedingt zu beachten, dass das Buch in total sauberen Zustand sein muss, d. h. weder geschriebene Bemerkungen dürfen sichtbar sein, noch dürfen markierte Unterstreichungen vorhanden sein – auch Radierungen  bzw. Löschungen mit Korrektor sind unzulässig.                </li>
                <li>
                Alle Arbeitshefte müssen von der Schule gekauft werden.                </li>
                <li>
                Jede Schülerin muss alle Schulbücher (auch Atlas, Wörterbücher usw.) besitzen, d.h. auch bei Geschwistern  muss jedes Kind alle Bücher besitzen.                </li>
                <li>
                Falls ein Schulbuch später nachgekauft werden muss, weil es den Anforderungen nicht entspricht,  wird ein Aufpreis von 10% des Bücherpreises erhoben.                </li>
        </ol>  
        <div className='p2'>
       {/* <p className='p2'>  </p> */}
       By cheching the box you accepted and agreed  <input  type="checkbox"   value="I accept and Agree" className= "checkbox1"/>
       </div>
            <input 
                  type="button" 
                  className="agreebtn" 
                  value="Sign up"
                  onClick = {()=>this.sendDataBackend()} 
            />
        </div>
        );



    }
}
export default Agreement;