import './style.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Router, Route, Switch,Redirect } from "react-router";

class AdminSidebar extends React.Component{
    constructor(props){
        super(props);
        this.RouteBooksInfo = this.RouteBooksInfo.bind(this);
        this.RouteAnalytics = this.RouteAnalytics.bind(this);
        this.RouteBooks = this.RouteBooks.bind(this);


    }
    RouteAnalytics(){
        this.props.history.push("/Admin/Analytics");
    }
    RouteBooks(){
        var token = 'asdasdas23324'
        this.props.history.push('/Admin/'+token);
    }
    RouteBooksInfo(){
        this.props.history.push('/Admin/BooksInfo');
    }
    render(){
    return( 
    <div>
     
     <div id="sidebar2">
    <div class="toggle-btn" onclick="toggleSideBar()">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul>
        <li>
               <button className="tog-btn" onClick = {this.RouteAnalytics}>Analytics</button>
        </li>
        
        <li>
                <button className="tog-btn" onClick = {this.RouteBooksInfo}>Books Info </button>
        </li>
        <li>
                <button className="tog-btn" onClick = {this.RouteBooks}>Admin </button>
        </li>
       
        
    </ul>
    

</div>
</div>
        );
    }
}
export default AdminSidebar;