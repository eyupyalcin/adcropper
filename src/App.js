import React from 'react';
import './App.css';
import Buttons from  "./Buttons"
import Slider from "./Slider"
import SearchBar from "./SearchBar"
import ComboBox from "./ComboBox"
import Pictures from "./Pictures"

function App() {
  return (
    <div className="App">
     <Buttons/><br/><br/><br/><br/><br/>
     <Slider/> <br/>
     <SearchBar/><br/>
     {/* <ComboBox/> */}
     <Pictures/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
