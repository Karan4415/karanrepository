import { render } from "@testing-library/react"
import React from "react"
export default class Counter extends React.Component {
    constructor(){
        super()
        this.state ={
                rec:0
        }
    }
    myfunc() {
        //alert()
        //this.props.name ="karan"
        this.setState({
            rec: this.state.rec + 1
        })
    }
    render() {
        console.log(this);
        return (
            <>
                {/*<></> is called as fregmentaion */}
                <button onClick={() => { this.myfunc() }}>add</button>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.state.rec}</p>


            </>
        )

    }
}
