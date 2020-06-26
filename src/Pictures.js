
import "./Pictures.css"
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import pic4 from "./pic4.jpg"
import ComboBox from "./ComboBox"

import React, { Component } from 'react'


class Pictures extends Component {
    state = {
        src: [pic1, pic2, pic3, pic4]
    }
   
    render() {
        const res =this.state.src.map((resim) => {
            return <img src={resim} />
        })
        return (
            <div className="up">
                <div className="picture" >
                
                {res}
                
             
            
             
 
             </div>
             <div className="res">
             <ComboBox res = {res}/>
             </div>

            </div>
            
            
        )
    }
}




export default Pictures
