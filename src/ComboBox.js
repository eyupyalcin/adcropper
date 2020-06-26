import React, { Component } from 'react'
import "./ComboBox.css"


class ComboBox extends Component {
    constructor(props){
        super(props)
        this.state={
            deger:""
        }
    }

    sec = (e) =>{
        this.setState({
            deger : e.options[e.selectedIndex].value
        })

        console.log(this.state.deger)

            

    }
    render() {
        console.log(this.state.deger)
        
       
        return (
            <div >
                <select className="combo" name="cars" id="cars">
                    <option></option>
                    <option onClick={this.sec} value="picture1">picture1</option>
                    <option onClick={this.sec} value="picture2">picture2</option>
                    <option onClick={this.sec} value="picture3">picture3</option>
                    <option onClick={this.sec} value="picture4">picture4</option>

                </select>

                
               
                
                
            </div>
        )
    }
}

export default ComboBox;
