import React,{ Component } from "react";
import { NavBar } from "./components/navbar/NavBar";

export class App extends Component{
    render(){
        return (
        <React.Fragment> 
            {/* React.Fragnment is an altenative to <div> or <> */}
            <NavBar/>
        </React.Fragment> 
        )
    }
}