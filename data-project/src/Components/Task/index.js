import { Component } from "react";
import {Link} from "react-router-dom";

class Task extends Component{
    render(){
        return(
            <div className="nav-container">
                <nav className="nav-container">
                    <h1 className="heading">TASKOO</h1>
                        <ul className="unorder-list">
                            <Link><li>On Time</li></Link>
                            <Link><li>Pending</li></Link>
                            <Link><li>Delayed</li></Link>
                        </ul>
                </nav>
            </div>
        )
    }
}

export default Task