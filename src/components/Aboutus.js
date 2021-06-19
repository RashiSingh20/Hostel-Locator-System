import React from 'react';
import "../style/Aboutus.css";
import Card from './Card';
 import sakshi from "../images/sakshi.jpg";
import Amishajha from "../images/Amishajha.jpg";
import Rashi from "../images/Rashi.jpg";

function Aboutus() {
    return (
        <div className="aboutus">
            <h1>OUR TEAM</h1>
       <div className="card_container">
            <Card 
            name="Sakshi kulkarni"
            imageurl={sakshi}/>
            
            <Card 
            name="Amisha Jha"
            imageurl={Amishajha}/>
             <Card 
            name="Rashi Singh"
            imageurl={Rashi}/>
             <Card 
            name="Nilesh Sankrityayan"
            />
             <Card 
            name="Harshvardhan Chavan"
            />
        </div>
        </div>
    )
}

export default Aboutus;