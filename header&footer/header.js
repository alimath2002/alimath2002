document.getElementById('headercontent').innerHTML=`
<div  alt="SUT-civil" style="position: absolute;bottom: 0%;width: 100%;position: fixed;z-index: -3;" id="backwebimage">
  </div>
  <div  
  id="blurerfoot">
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
    <div class="aboutmenue1 ; aboutmenuall" style="display: none;">
      <a href="index.html" style=" display: block;width: 100%;height: 100%;"> Ali M. Sepehr</a>
    </div>
    
  </div>
  
  <div onclick="openspcmenu(2)" onmousemove="openspcmenu(2)">
    publication
    <a href="../publication/Research&Studies.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
      Research & Studies
    </div></a>
    <a href="../publication/papers.html" style=" display: block;width: 100%;height: 100%;"> 
    <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
      Papers
    </div></a>
   
    
  </div>
  <div onclick="openspcmenu(3)" onmousemove="openspcmenu(3)">
    News & Events
    <a href="../News/news.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue3 ; aboutmenuall" style="display: none;">
      News & Events
    </div></a>
   
    
  </div>
  <div onclick="openspcmenu(4)" onmousemove="openspcmenu(4)">
    Projects

    <a href="../projects/civil.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
      Civil Projects : Simiulation And Softwares
    </div></a>

    <a href="../projects/web.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
       Web programming & Apps
    </div></a>
    
   
  
  </div>
  
 
    </div>
  </div>
  
  
    <div style="position: absolute;right: 0%;width: 100%;height:100%; 
    background-color: rgba(5, 4, 4, 0.523); z-index:1; position: fixed;display: none;"
    onclick="closemenue()" class="menulittle">
  
  
    </div>
  
    
<header >
       
  
  <!--     
        <div style=" display: inline;direction: ltr;display: flexbox; text-align: left;
        margin: 10px 10px 4px 10px ;">
      -->
        <div style="display: flexbox; ">
      <img src="../images/OIP.png" alt="sharif" style="width: auto;cursor:pointer;display: inline-block; position: fixed;z-index:4 ;
      padding-left: 5px; padding-top: 10px;" 
      id="toplogo">
      
 
      
      <div style="text-align: right;">
        <a href="index.html" style="color: black;">
        <h2 id="corpname" style="padding: 20px;background: linear-gradient(to left,rgb(41, 124, 240),rgb(38, 228, 180)); color: aliceblue;
        font-size: 38px;font-family: boldedde;">
            Sharif University of Technology
            
          </h2>
     
        </a>
     
        
      </div>

 
  
    <div class="overnav" style="padding:10px;direction: rtl;padding-right:5px;background: linear-gradient(to left,rgb(41, 124, 240),rgb(38, 228, 180));color: aliceblue;
    font-size: 30px;padding-right:20px ;padding-bottom:14px ;">
      Ali Matin Sepehr
  
  </div>
  <div class="overnav">
    
  </div>
  
  
  
     
  </div>  
            
  
  
  
  <div  class="navcontainer" style="background-color: white;z-index: 2;">
   
  
  
<div style="height: 90px;background: rgb(255, 255, 255);width: 100%;z-index: 2; "  class="navcontainer" id="mainnavcontiner">    
  
  <div style="background-color: rgb(255, 255, 255);direction: rtl;" id="minimenue">
    <img style="cursor: pointer;" onclick="openmenue()" width="48" height="48" src="https://img.icons8.com/color/48/menu--v1.png" alt="menu--v1"/>
  </div>
  
   <nav id="navigation">
    

  <div  style="height: 75px;padding-top:0px;padding-bottom:0px;width: 0px;z-index: 2;" id="removeonphone">
     
    
  </div>


   
    <!-- Navigation button -->
    <button class="nav-button">
      Projects
      <!-- Dropdown menu -->
      <div class="dropdown-menu" >

        <a href="../projects/civil.html" style="z-index: 71;">       Civil Projects : Simiulation And Softwares</a>
        <a href="../projects/web.html" style="z-index: 71;">Web programming & Apps </a>
       

      </div>
    </button>



<button class="nav-button" >
    <a href="../news/news.html" style="color: unset; padding:20px 20px;display: inline-block;">  News & Events </a>
    </button>
    


 <button class="nav-button" >
      publication
      <!-- Dropdown menu -->
      <div class="dropdown-menu" >
      
        <a href="../publication/Research&Studies.html" > Research & Studies</a>
<a href="../publication/papers.html" > Papers</a>


       

      </div>

    </div>
    </button>

 
  
   
  
  
  
  
  </nav>
  
  
     
  </div>
  
  
   
  
  
  </header>
`


var offsets = document.querySelector("body").getBoundingClientRect();
    var userview = offsets.top;
    var pageweidth =offsets.width;


if (pageweidth<700) {

  
document.getElementById('corpname').textContent="Sharif University";
document.getElementsByClassName('overnav')[0].textContent="Civil Engineering";

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
      document.getElementById('mainnavcontiner').style.position="fixed";
      

    }
    if(userview > -10  & pageweidth>560){
  
   document.getElementById('corpname').style.display="block";
   document.getElementsByClassName('overnav')[0].style.display="block";
   document.getElementsByClassName('overnav')[1].style.display="block";
  
  document.getElementById('navigation').style.position="relative";
  document.getElementById('mainnavcontiner').style.position="relative";  
  
  }
  
  
  if(userview > -130  & pageweidth>560 &  document.getElementsByClassName('overnav')[0].style.display=="block"  ){
  
  let a=130+userview*0.4;
  document.getElementById('toplogo').style.height =a+'px';
  
  
  }else{ 
    document.getElementById('toplogo').style.height =75+'px';
  }




    }

