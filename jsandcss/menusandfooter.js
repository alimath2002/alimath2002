  document.getElementById('headercontent').innerHTML = 
  `
<img src="../images/head.jpg" alt="SUT-civil" style="position: absolute;bottom: 0%;width: 100%;position: fixed;z-index: -3;">
  
  <div  
  id="blurerfoot"></div>
  </div>
  
  <div style="color: white;">
    <div id="menupage" style="position: absolute;right: 0%;width: 74%;
    height: 100%;background:linear-gradient(to bottom ,rgb(82, 82, 238), rgb(11, 11, 99)); z-index: 4;display: none;
    position: fixed;" class="menulittle">
    <div style="display: flex;align-items: center;justify-content: center;align-content: center;">
      <h1 style="text-align: center;">
        Dr. Mirmosadegh jamali
      </h1>
  
    </div>
  <div onclick="openspcmenu(1)" onmousemove="openspcmenu(1)">
    About
    <a href="../index.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue1 ; aboutmenuall" style="display: none;">
       Professor Jamali
    </div>
    </a>
  </div>
  
  <div onclick="openspcmenu(2)" onmousemove="openspcmenu(2)">
    publication
    <a href="../publication/papers.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
       Papers
    </div></a>
    <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
      <a href="../publication/research.html" style=" display: block;width: 100%;height: 100%;"> Research</a>
    </div>
    
  </div>
  <div onclick="openspcmenu(3)" onmousemove="openspcmenu(3)">
  people
   <a href="../people/graduates.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue3 ; aboutmenuall" style="display: none;">
    
      Graduate Students
    </div>
    </a>
<a href="../people/undergraduates.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue3 ; aboutmenuall" style="display: none;">
      underGraduate Students
    </div>
    </a>
  </div>
  <div onclick="openspcmenu(4)" onmousemove="openspcmenu(4)">
    Courses
    <a href="../courses/fluidmechanic.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
       Fluid Mechanics
    </div>
    </a>
     <a href="../courses/hydrulics.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
      Hydraulics
    </div>
    </a>
     <a href="../courses/Environmentaleng.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
      Environmental Hydraulics
    </div>
    </a>
    <a href="../courses/creativityeng.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
       Creativity and Innovation in Engineering
    </div>
  </a>

  </div>
  <a href="../news/news.html" style=" display: block;width: 100%;height: 100%;">
  <div onclick="openspcmenu(5)" onmousemove="openspcmenu(5)">
     News & Events
  
  </div>
  </a>
    </div>
  </div>
  
  
    <div style="position: absolute;right: 0%;width: 100%;height:100%; 
    background-color: rgba(5, 4, 4, 0.523); z-index: 3; position: fixed;display: none;"
    onclick="closemenue()" class="menulittle">
  
  
    </div>

  <header >
       
  
  <!--     
        <div style=" display: inline;direction: ltr;display: flexbox; text-align: left;
        margin: 10px 10px 4px 10px ;">
      -->
        <div style="display: flexbox; ">
      <img src="../images/OIP.svg" alt="sharif" style="width: auto; height: 50px;cursor:pointer;display: inline-block; position: fixed;z-index: 1;" 
      id="toplogo">
      
  <div  class="overnav" style="margin-bottom:13px;direction: rtl;padding-top:5px;padding-right:5px;">
    Sharif University of Technology
    
   </div>
  
    <div class="overnav" style="margin-bottom:10px;direction: rtl;padding-right:5px;">
      Department of Civil Engineering
  
  </div>
  <div></div>
  
  
  
  
  
     
  </div>  
            
  
  
  
  
  
     
      
   <div style="text-align: right;">
     <a href="../home/homepage.html" style="color: black;">
     <h2 id="corpname" style="margin-right: 20px;">
         Dr.Mirmosadegh Jamali
         
       </h2>
  
     </a>
  
     
   </div>
  
  
   <script type="text/javascript">
  
    function down(){


      

        let m=document.getElementsByClassName('navbut');

        for (let index = 0; index < m.length; index++) {
        m[index][0].selected='true';
        
    }




    var offsets = document.getElementById('navigation').getBoundingClientRect();
    var top = offsets.top;
    var offsets = document.querySelector("body").getBoundingClientRect();
    var userview = offsets.top;
    var pageweidth =offsets.width;
  
    if(top < 3 & pageweidth>560){
      
      document.getElementById('corpname').style.display="none";
      document.getElementsByClassName('overnav')[0].style.display="none";
      document.getElementsByClassName('overnav')[1].style.display="none";
      
      document.getElementById('navigation').style.position="fixed";
      document.getElementById('navborder').style.position="fixed";
  
    }
    if(userview > -10  & pageweidth>560){
  
   document.getElementById('corpname').style.display="block";
   document.getElementsByClassName('overnav')[0].style.display="block";
   document.getElementsByClassName('overnav')[1].style.display="block";
  
  document.getElementById('navigation').style.position="relative";
  document.getElementById('navborder').style.position="relative";
  
  
  }
  
  
  if(userview > -40  & pageweidth>560){
  
  let a=70+userview*0.5;
  document.getElementById('toplogo').style.height =a+'px';
  
  
  }
    }
    </script>
  
  <div style=""  class="navcontainer">
    
  </div>
  
  </div>
  
  
  <div style="height: 60px;background-color: rgb(255, 255, 255);width: 100%; "  class="navcontainer" id="mainnavcontiner">
    
  
  <div style="background-color: rgb(255, 255, 255);direction: rtl;" id="minimenue">
    <img style="cursor: pointer;" onclick="openmenue()" width="48" height="48" src="https://img.icons8.com/color/48/menu--v1.png" alt="menu--v1"/>
  </div>
  
   <nav id="navigation">
    <div class="navbuttom" style="height: 45px;">
     <a href="../news/news.html" style="display: block;height: 100%;">
    
        News and Events
    
       </a>
    </div>
    <div class="navbuttom">
      
      
     <select name="proj" class="navbut" id="selection" onchange="location=this.value;" style="cursor: pointer;gap:3px ;font-family:bnaz;font-size: 20px ;background:linear-gradient(to bottom ,rgba(96, 136, 236, 0),rgba(49, 110, 243, 0)) ;width:100% ; border:none;  height:100% ;color:black;"> 
       <option value="../" style="background-color: rgb(121, 121, 137);font-size: 0%;pointer-events: none;" selected > Courses</option>
       <option value="../courses/fluidmechanic.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> fluid Mechanics</option>
       <option value="../courses/hydrulics.html" style="background-color: rgb(121, 121, 137);cursor: pointer;">  Hydraulics </option>
       <option value="../courses/Environmentaleng.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> Environmental Hydrodynamics </option>
       <option value="../courses/creativityeng.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> Creativity and Innovation in Engineering</option>
     </select>
  <script type="text/javascript">
  setInterval(()=>{
    let m=document.querySelector("#selection")[0];
    m.selected='true';
  },1000)
   
   
   </script>
  
  
    </div>
    
    <div class="navbuttom">
    <select name="proj"  class="navbut" id="selection4" onchange="location=this.value;" style="cursor: pointer;gap:3px ;font-family:bnaz;font-size: 20px ;background:linear-gradient(to bottom ,rgba(96, 136, 236, 0),rgba(49, 110, 243, 0)) ;width:100% ; border:none;  height:100% ;color:black;"> 
      <option value="../" style="background-color: rgb(121, 121, 137);font-size: 0%;pointer-events: none;" selected > people</option>
      <option value="../people/graduates.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> Graduate Students </option>
      <option value="../people/undergraduates.html" style="background-color: rgb(121, 121, 137);cursor: pointer;">  undergraduate Students </option>
    </select>
  </div>
    
  <div class="navbuttom">
    <select name="proj" class="navbut"  id="selection2" onchange="location=this.value;" style="cursor: pointer;gap:3px ;font-family:bnaz;font-size: 20px ;background:linear-gradient(to bottom ,rgba(96, 136, 236, 0),rgba(49, 110, 243, 0)) ;width:100% ; border:none;  height:100% ;color:black;"> 
      <option value="../" style="background-color: rgb(121, 121, 137);font-size: 0%;pointer-events: none;" selected > publication</option>
      <option value="../publication/papers.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> Papers  </option>
      <option value="../publication/research.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> Research And Studies </option>
    </select>
  </div>
  
     
    <div class="navbuttom">
      <select name="proj" class="navbut"  id="selection1" onchange="location=this.value;" style="cursor: pointer;gap:3px ;font-family:bnaz;font-size: 20px ;background:linear-gradient(to bottom ,rgba(96, 136, 236, 0),rgba(49, 110, 243, 0)) ;width:100% ; border:none;  height:100% ;color:black;"> 
        <option value="../" style="background-color: rgb(121, 121, 137);font-size: 0%;pointer-events: none;" selected > About</option>
        <option value="../index.html" style="background-color: rgb(121, 121, 137);cursor: pointer;"> About Dr. jamali </option>
      </select>
    </div>
  

  
  
  </nav>
  
  
    
     
  </div>
  
  
   
  
  
  </header>
  
  <div id="navborder"
  style="height: 5px;background:linear-gradient(to right ,rgba(20, 205, 97, 0.963),rgba(43, 94, 205, 0.985));z-index: 1;width: 100%;">
  
  </div>
   
    ` 

    function openmenue(){

      document.getElementsByClassName('menulittle')[0].style.display="block";
      document.getElementsByClassName('menulittle')[1].style.display="block";
      
      
      }
      
      function closemenue(){
          
          document.getElementsByClassName('menulittle')[0].style.display="none";
          document.getElementsByClassName('menulittle')[1].style.display="none";
      
      }
      
      
      
      function openspcmenu(ai){
      
          let array2= document.getElementsByClassName('aboutmenuall');
      
          for (let index = 0; index < array2.length; index++) {
              array2[index].style.display="none";
              
          }
          
      
      let array= document.getElementsByClassName('aboutmenue'+ai);
      
      for (let index = 0; index < array.length; index++) {
           array[index].style.display="block";
          
      }
      
      
      }
      
      
  
  
  function down(){    

      let m=document.getElementsByClassName('navbut');

      for (let index = 0; index < m.length; index++) {
      m[index][0].selected='true';
      
  }




  var offsets = document.getElementById('navigation').getBoundingClientRect();
  var top = offsets.top;
  var offsets = document.querySelector("body").getBoundingClientRect();
  var userview = offsets.top;
  var pageweidth =offsets.width;

  if(top < 3 & pageweidth>560){
    
    document.getElementById('corpname').style.display="none";
    document.getElementsByClassName('overnav')[0].style.display="none";
    document.getElementsByClassName('overnav')[1].style.display="none";
    
    document.getElementById('navigation').style.position="fixed";
    document.getElementById('navborder').style.position="fixed";

  }
  if(userview > -10  & pageweidth>560){

 document.getElementById('corpname').style.display="block";
 document.getElementsByClassName('overnav')[0].style.display="block";
 document.getElementsByClassName('overnav')[1].style.display="block";

document.getElementById('navigation').style.position="relative";
document.getElementById('navborder').style.position="relative";


}


if(userview > -40  & pageweidth>560){

let a=70+userview*0.5;
document.getElementById('toplogo').style.height =a+'px';


}

  }


  setInterval(()=>{
    let m=document.querySelector("#selection")[0];
    m.selected='true';
  },1000)
