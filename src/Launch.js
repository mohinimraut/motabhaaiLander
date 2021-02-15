import React from 'react'
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import discover from '../src/images/discover-02.png';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import twitter from '../src/images/twitter.png';

import logo_subtext from '../src/images/logo_subtext.png';
import group from '../src/images/Group 40.png';

   var firebaseConfig = {
    apiKey: "AIzaSyCXEiszXdQb9EqEb1kYmRsCJo9TPfYujc4",
    authDomain: "test-form-eb682.firebaseapp.com",
    projectId: "test-form-eb682",
    storageBucket: "test-form-eb682.appspot.com",
    messagingSenderId: "25020950362",
    appId: "1:25020950362:web:383e4622d0e8826d40f563"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Reference emailInfo collections
    let emailInfo=firebase.database().ref("infos")
    var countDownDate = new Date("Feb 27, 2021 15:37:25").getTime();
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days;
    document.getElementById("ipadday").innerHTML = days;
    document.getElementById("mobileday").innerHTML = days;


    document.getElementById("demo2").innerHTML =  hours;
    document.getElementById("ipadhours").innerHTML = hours;
    document.getElementById("mobilehours").innerHTML = hours;


    document.getElementById("demo3").innerHTML = minutes;
    document.getElementById("ipadminutes").innerHTML = minutes;
    document.getElementById("mobileminutes").innerHTML = minutes;

    document.getElementById("demo4").innerHTML =  seconds;
    document.getElementById("ipadsecond").innerHTML =  seconds; 
    document.getElementById("mobilesecond").innerHTML =  seconds; 

      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo1").innerHTML = "EXPIRED";
      document.getElementById("demo2").innerHTML = "EXPIRED";
      document.getElementById("demo3").innerHTML = "EXPIRED";
      document.getElementById("demo4").innerHTML = "EXPIRED";

      document.getElementById("ipadday").innerHTML = "EXPIRED";
      document.getElementById("ipadhours").innerHTML = "EXPIRED";
      document.getElementById("ipadminutes").innerHTML = "EXPIRED";
      document.getElementById("ipadsecond").innerHTML = "EXPIRED";

      document.getElementById("mobileday").innerHTML = "EXPIRED";
      document.getElementById("mobilehours").innerHTML = "EXPIRED";
      document.getElementById("mobileminutes").innerHTML = "EXPIRED";
      document.getElementById("mobilesecond").innerHTML = "EXPIRED";
       }
      }, 1000);

class Launch extends React.Component {
    constructor(props) {
    super(props);
    this.state = {email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({email: event.target.value});
    }
    
    handleSubmit(event) {
       const email=this.state.email;
       alert('A name was submitted: ' + this.state.email);
       event.preventDefault();
       this.saveEmailInfo(email);
       alert("hhhhhhhhh"+email)
      }

     //save info to Firebase
    saveEmailInfo(email){
    let newContactInfo=emailInfo.push();
    newContactInfo.set({
    email:email
    })
    }

  render(){
    return (
    <div>
     <div id="cont" style={{}}>
      <div className="row" >
    
       <div id="webviewleftmancontainer" className="col-sm-6" style={{backgroundColor:"#add8e6"}}>
       <div className="row">
       <img src={logo_subtext} class="img-fluid" id="optionalstuff" alt="home img" style={{width:'20%',height:'20%'}}/>  
      </div>

      <div id="extrasmalllogo" className="row" style={{backgroundColor:"white"}}>
       <img src={group} class="img-fluid" id="optionalstuffs" alt="home img" style={{width:'50%',height:'50%'}}/>  
      </div>

           <div class="row hometitle1 ml-2 justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}}>
           Free Digital platform 
           </div>
           <div>
           <div class ="row justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
    
    for sellers to promote,manage &
    </div>
    <div class ="row justify-content-center text-center pl-5" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
    
     sell their goods and services.
    </div>
    
              </div>
          
           <div class="row justify-content-center text-center" id="mainimg">
           <img src={discover} class="img-fluid freedigitalman" alt="home img"/>  
           </div>
    
           <div id="timercontainer" class="row justify-content-center text-center" style={{color:"#2c3d63",fontWeight:"bold",fontFamily:"Comfortaa",marginTop:"-20px"}}>
           <p id="demo"></p>
               <div class="col-2" style={{flexDirection:"column",}}>
               <div class="launchnum">
               <p id="demo1"></p>
               </div>
               <div>
                   Days
               </div>
               </div>
              
              <div class="col-2" style={{flexDirection:"column"}}>
              <div class="launchnum">
              <p id="demo2"></p>
               </div>
               <div>
                   Hours
               </div>
              </div>
              
              <div class="col-2"style={{flexDirection:"column"}}>
              <div class="launchnum">
              <p id="demo3"></p>
               </div>
               <div>
                   Minutes
               </div> 
              </div>
               
               <div id="secondcontainer" class="col-2" style={{flexDirection:"column"}}>
               <div class="launchnum">
               <p id="demo4"></p>
               </div>
               <div id="#secondt">
                   Second
               </div>
               </div>
               
           </div>








       </div>
    
    {/* 768 to 991.98 this range */}
    <div class="" id="ipadview">
     
    <div className="row">
       <img src={logo_subtext}  id="optionalstuff" alt="home img" style={{width:'20%',height:'20%',marginLeft:10}}/>  
      </div>
      <div class="row">

        <div class="col-md-6">
          <div class="row">
        <div class="row hometitle1 ml-2 justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}}>
           Free Digital platform 
           </div>
           <div>
           <div class ="row hometitle2" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
           for sellers to promote,manage &
           </div>
           <div class ="row hometitle3" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
           sell their goods and services.
           </div>
    
              </div>
              </div>
              <div class="row">
              <div id="timercontainer" class="row" style={{color:"#2c3d63",fontWeight:"bold",fontFamily:"Comfortaa"}}>
           <p id="demo"></p>
               <div class="col-2" style={{flexDirection:"column",}}>
               <div class="launchnum">
               <p id="ipadday"></p>
               </div>
               <div class="launchnum1">
                   Days
               </div>
               </div>
              
              <div class="col-2" style={{flexDirection:"column"}}>
              <div class="launchnum">
              <p id="ipadhours"></p>
               </div>
               <div class="launchnum1">
                   Hours
               </div>
              </div>
              
              <div class="col-2"style={{flexDirection:"column"}}>
              <div class="launchnum">
              <p id="ipadminutes"></p>
               </div>
               <div class="launchnum1">
                   Minutes
               </div> 
              </div>
               
               <div id="secondcontainer" class="col-2" style={{flexDirection:"column"}}>
               <div class="launchnum">
               <p id="ipadsecond"></p>
               </div>
               <div class="launchnum1">
                   Second
               </div>
               </div>
           </div>
          </div>
        </div>
        <div class="col-md-6">
        <div class="row justify-content-center text-center" id="mainimg">
           <img src={discover} class="img-fluid freedigitalman" alt="home img"/>  
           </div>
        </div>
      </div>
    </div>
    
    




    
    {/* @media (min-width: 576px) and (max-width: 767.98px)  */}

 <div class="" id="msview" style={{}}>
     


<div class="container mcon" style={{backgroundColor:"#add8e6"}}>
  <div></div>
<div className="row" >
        <img src={logo_subtext}  id="optionalstuff" alt="home img" style={{width:'20%',height:'20%'}}/>  
       </div>
       <div class="row">
       <div class="col-sm-6" style={{backgroundColor:"#add8e6"}}>
       <div class="row phonehead ml-2 justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}}>
            Free Digital platform 
            </div>
            <div class ="row phonehead1" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
     
     for sellers to promote,manage &
     </div>
     <div class ="row phonehead2" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
     
      sell their goods and services.
     </div>
  
     <div class="row">
               <div id="timercontainer" class="row" style={{color:"#2c3d63",fontWeight:"bold",fontFamily:"Comfortaa"}}>
            <p id="demo"></p>
                <div class="col-2" style={{flexDirection:"column",}}>
                <div class="launchnum">
                <p id="mobileday"></p>
                </div>
                <div class="mobtime">
                    Days
                </div>
                </div>
               
               <div class="col-2" style={{flexDirection:"column"}}>
               <div class="launchnum">
               <p id="mobilehours"></p>
                </div>
                <div class="mobtime">
                    Hours
                </div>
               </div>
               
               <div class="col-2"style={{flexDirection:"column"}}>
               <div class="launchnum">
               <p id="mobileminutes"></p>
                </div>
                <div class="mobtime">
                    Minutes
                </div> 
               </div>
                
                <div id="secondcontainer" class="col-2" style={{flexDirection:"column"}}>
                <div class="launchnum">
                <p id="mobilesecond"></p>
                </div>
                <div class="mobtime">
                    Second
                </div>
                </div>
                
            </div>
          </div>
         </div>

         
         
          <div class="col-sm-6">
          <div class="row " id="mainimg">
            <img src={discover} class="img-fluid freedigitalman" alt="home img"/>  
            </div>
          </div>
       </div>
       
</div>

   
     </div>
     
     
 
    
       <div id="rightmaincontainer" className="col-lg-6 pt-5" style={{}}>
       <button id="btnhide" type="button" class="btn-sm btnstay"><p class="parastay">STAY TUNED</p></button>

       <div class="row mt-5 justify-content-center text-center">
           <img src={logo_subtext} id="optionalstuf" alt="home" style={{width:'150px',height:'100px'}}/>  
           </div>

          

           <div class="row" style={{fontSize:"20px"}}>
          <p id="parastay" style={{letterSpacing:"10px"}}>STAY TUNED</p>
      </div>
  
         <div id="extrasmalllaunch" style={{}}>
         <div class="row justify-content-center text-center">
               <h3 style={{fontFamily:"Comfortaa",fontWeight:"bold",color:"#2c3d63",fontSize:"40px"}}>We Will Launch Soon</h3>
           </div>
           <div class="row">
               <p style={{fontFamily:"Comfortaa"}}>Subscribe to get notification as soon as we launch!</p>
           </div>
         </div>
           
         <form class="emailstorecontainer" onSubmit={this.handleSubmit}>
      <div class="row justify-content-center" style={{flexDirection:"row"}}>
          <div className="col-5" style={{}}>
          <input type="email" id="emailplaceholder" value={this.state.email} onChange={this.handleChange} class="form-control email" placeholder="Enter your email" style={{fontFamily:"Comfortaa",border:"1px solid #D3D3D3",height:"3rem",borderRadius:"10px"}}/>
          </div>
    
          <div className="col-3" style={{width:"8rem"}}>
          <button style={{fontFamily:"Comfortaa",fontWeight:"bold",backgroundColor:"#add8e6",fontSize:"12PX",height:"3rem",borderRadius:"10px"}} type="submit" value="Submit" class="btn btn-info homebuttontest">NOTIFY ME</button>
          </div>
      </div>
      </form>
    
      <div id="launchicon" class="row justify-content-center hometitle mt-2" style={{}}>
         
          <div class="col-1">
          <img src={twitter}  alt="home img" style={{width:'20px',height:'20px'}}/>  
     
          </div>
          <div class="col-1">
          <img src={facebook}  alt="home img" style={{width:'20px',height:'20px'}}/>  
     
          </div>
          <div class="col-1">
          <img src={instagram}  alt="home img" style={{width:'20px',height:'20px'}}/>  
     
         
          </div>
      </div>
     

    

<div id="extrasmallbottomlast"  style={{}}>
      <table class="table" style={{backgroundColor:"#2c3d63",color:"white",fontFamily:"Comfortaa"}}>
    <tbody style={{}}>
      <tr id="tablemainrow">
      <td id="tableaddresstext" style={{borderRight:"1px solid white"}}>Add:Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107</td>
     <div id="tableemaildiv" style={{}}><td id="tableemailname" style={{}}>Email:hello@motabhaai.com</td></div>
     <div id="tableemaildiv" style={{}}><td id="tableemailname" style={{}}>Website: <a href='https://www.motabhaai.com/lander'>motabhaai.com</a></td></div>
      </tr>
    </tbody>
  </table>
</div>

     <div id="addemailcontainer" class="row justify-content-center" style={{fontSize:"12px",backgroundColor:"#2c3d63",color:"white",fontFamily:"Comfortaa",paddingLeft:"30px",paddingTop:"15px",marginTop:"216px"}}>
   
<div id="addtextcon" class="col-sm-5" style={{ }}>
<div class="row">
<div  id="addt" class="col-xl-2" style={{}}><p style={{textAlign:"left"}}>Add:</p></div>
<div  id="addtext" class="col-xl-10" style={{}}><p style={{textAlign:"left",marginLeft:"-15px"}}>Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107</p></div>
</div>
</div>
<div id="emailtextcontainer" class="col-sm-5 justify-content-center" style={{}}>
<div class="row justify-content-center pl-5" style={{}}>
<div  id="emailt" class="col-sm-2" style={{}}><p style={{textAlign:"left",margin:"5px"}}>Email: </p></div>
<div id="emailtext" class="col-sm-10" style={{}}><p style={{textAlign:"left",margin:"5px"}}>hello@motabhaai.com</p></div>
</div>
</div>
</div>
  
     <div id="newbottom1800" class="row justify-content-center" style={{fontSize:"12px",backgroundColor:"#2c3d63",color:"white",fontFamily:"Comfortaa",height:"12%",paddingLeft:"30px",paddingTop:"15px",marginTop:"275px"}}>

   <div id="addtextcon" class="col-xl-5" style={{ }}>
   <div class="row">
   <div  id="addt" class="col-xl-2" style={{}}><p style={{textAlign:"left"}}>Add:</p></div>
   <div  id="addtext" class="col-xl-10" style={{}}><p style={{textAlign:"left",marginLeft:"-15px"}}>Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107</p></div>
   </div>
   </div>
   
   <div id="emailtextcontainer" class="col-xl-5 justify-content-center" style={{}}>
   <div class="row justify-content-center pl-5" style={{width:"180px",paddingLeft:"25px"}}>
   <div  id="emailt" class="col-xl-3" style={{textAlign:"right"}}>Email:</div>
   <div id="emailtext" class="col-xl-9" style={{textAlign:"center"}}>hello@motabhaai.com</div>
   </div>
   </div>
   
   </div>

        <div id="desktopbottom" class="row" style={{backgroundColor:"#2c3d63",color:"white",fontFamily:"Comfortaa",padding:"20px",fontSize:"13px"}}>
          <div id="desktopadd" class="col-sm-1" style={{textAlign:"center",fontFamily:"Comfortaa"}}>Add:</div>
          <div id="desktopadddetail" class="col-sm-5" style={{fontFamily:"Comfortaa",textAlign:"left"}}>Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107</div>
          {/* <div class="col-sm-1" style={{}}></div> */}
          <div id="desktope" class="col-sm-1" style={{textAlign:"center",fontFamily:"Comfortaa"}}><div class="row">Email:</div>
            <div class="row">Website:</div></div>
          <div id="dektopemail" class="col-sm-4" style={{fontFamily:"Comfortaa"}}>
          <div class="row">hello@motabhaai.com</div>
            <div id="largelink" class="row" style={{}}><a href='https://www.motabhaai.com/lander'>motabhaai.com</a></div>
          </div>
         
        </div>
     

        <div id="ipadbottom" class="row" style={{backgroundColor:"#2c3d63",color:"white",fontFamily:"Comfortaa",padding:"20px",fontSize:"13px"}}>
          <div class="col-sm-1" style={{textAlign:"center",fontFamily:"Comfortaa"}}>Add:</div>
          <div id="ipadaddressdetail" class="col-sm-5" style={{fontFamily:"Comfortaa",textAlign:"left",}}>Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107</div>
          <div id="ipadline" class="col-sm-1" style={{borderLeft:"2px solid #add8e6"}}></div>
 
          <div id="emailipad" class="col-sm-1" style={{fontFamily:"Comfortaa",flexDirection:"column"}}>
          <div class="row">Email:</div>
            <div class="row">Website:</div>
          </div>
          
          <div id="emailtextipad" class="col-sm-4" style={{fontFamily:"Comfortaa",flexDirection:"column"}}>
            <div class="row">hello@motabhaai.com</div>
            <div id="smalllink"  class="row"><a href='https://www.motabhaai.com/lander'>motabhaai.com</a></div>
           </div>
        </div>
       </div>
       
        </div>
    
          </div>
      
      




      </div>
      
      
      
      
      
      
      )
    }
   
}

export default Launch;
