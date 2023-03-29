import { Component } from "react";

import "./index.css"

class Verify extends Component{
    state = {opt : "1567", number: ""};


    onClickbutton = () =>{
        const {number} = this.state
      if (number.length === 4){
        <button className="buttonotp" type="button" >Verify OTP</button>
      }else{
        alert("Please Enter Vaild Phone Number")
      }
    }

    render(){

        const {number} = this.state
        return(
           <div className="bg-container">
                <div>
                    <h1 className="heading">TASKOO</h1>
                    <img src = "https://res.cloudinary.com/dgvec2ipx/image/upload/v1679994363/Data_analysis_Case_Study_nfxpg4.png"
                    className="taskoo" alt= "log"/>
                </div>
                <div className="taskoon-container">
                    <h1 className="tittle">Mangage every Task</h1>
                    <p className="paragraph">Balance work,life and everything in between with Taskoon</p>
                    <div className="phone-container">
                        <p className="phoneenter">Enter OTP</p>
                        <input className="input" type="text" placeholder="Enter Phone Number" value = {number}/>
                        <br/>
                        <button className="buttonotp" type="button" onClick={this.onClickbutton}>Verify</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Verify