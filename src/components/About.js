import Aboutus from './Aboutus';
import '../style/Abt.css';
 import "../style/Aboutproject.css"
import img from "../images/img.png";
import '../style/Contact.css';


function About() {
  return (
    <div>
      <div className="about__us">
      <div className="aboutproject">
            <h1>ABOUT OUR PROJECT</h1>
            <div className="content">
          <div className="image___container">
          <img src={img} alt=""/>
          </div>
       
          <div className="para__container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae mi fermentum eros dictum porttitm, tristique dui. Pellentesque est sapien, tempor vehicula lacinia ut, bibendum in massa. Aliquam volutpat magna at nisi vehicula, ut accumsan nulla dictum. Phasellus luctus maximus lacus non venenatis.</p>
          </div>
         </div>
   
        </div>
  
      </div>
      <div className="about__us">
      <Aboutus/>
      </div>
      <div className="about__us">
             <div className="contact">
            <h1>CONTACT US</h1>

           <form>


           <div className="form-group">
           <input type="text" name="" placeholder="Enter Your Name "/>
           </div>

           <div class="form-group">
                <input type="text" name="" placeholder="Enter Your Email "/>
            </div>
            <div class="form-group">
            <input type="text" name="" placeholder="Enter Your Phone number"/>
            </div>

            <div class="form-message">
            <input type="text" name="" placeholder="Enter Your Message"/>
            </div>
            <button class="btn">Submit</button>
           </form>
      
        </div>
      </div>
      
    </div>
  );
}

export default About;
