

var numofpoints=Math.ceil(window.pageweidth/100);
var randarr=[];
let steptime=40;
let points=[];
let opacity=[];
var heightofplaneb=document.getElementById('planepoints').style.height.match(/^(\d+\.?\d*)([a-z%]*)$/i)[1];


for (let index = 0; index < numofpoints; index++) {

document.getElementById('planepoints').innerHTML=document.getElementById('planepoints').innerHTML+`<div class style="border-radius: 50%; width: 100px;background-color: rgba(255, 255, 255, 0.334);height: 100px;position:absolute;right: 35%;" class="fpoints" id="n${index+1}"></div>
`



    opacity[index]=0;
randarr[index]=[Math.random(),Math.random(),Math.random(),Math.random()] 

points[index]={id:index+1,
    velocityx:(Math.random()-0.5)*0.3
    ,velocityy:(Math.random()-0.5)*0.7
    ,xpos:randarr[index][0]*100,
     duration:Math.random()*5+4.5
    ,ypos:Math.ceil(randarr[index][1]*heightofplaneb)
    ,opacity:randarr[index][0]*0.75,opacity0:0
    ,yposl:Math.ceil(randarr[index][3]*heightofplaneb)
    ,xposl:(randarr[index][2]*100)
    ,radius:randarr[index][3]*heightofplaneb/7+20,draw(){

document.getElementById('n'+this.id).style.top=this.ypos+'px';
document.getElementById('n'+this.id).style.right=this.xpos+'%';
document.getElementById('n'+this.id).style.backgroundColor=`rgba(255, 255, 255, ${this.opacity0})`;
document.getElementById('n'+this.id).style.height=this.radius+'px';
document.getElementById('n'+this.id).style.width=this.radius+'px';

if(this.opacity0<this.opacity & this.duration >1){
    this.opacity0=this.opacity0+0.005;
    
}
if (this.duration <0.7) {
this.vanishing()

}

this.xpos=this.xpos-this.velocityx;
this.ypos=this.ypos-this.velocityy;
this.duration=this.duration-steptime/1000;

if (this.duration<0) {
 this.vanishing()  

}

if (this.xpos<3 |this.xpos>97) 
{this.vanishing()}
if (this.ypos > heightofplaneb-this.radius| this.ypos<this.radius)
{this.vanishing()}

}

,makenew(){
this.xpos=Math.random()
this.ypos=Math.random()*heightofplaneb;
this.xposl=Math.random()*100;
this.yposl=Math.random()*heightofplaneb;
this.xpos=Math.random()*100;
this.opacity=Math.random()*0.75;
this.opacity0=0;
this.duration=Math.random()*10+2;
this.radius=Math.random()*heightofplaneb/7+20;
this.velocityx=(Math.random()-0.5)*0.25;
this.velocityy=(Math.random()-0.8)*0.7;
}
,vanishing(){
      this.opacity0=this.opacity0-0.03
      if (this.opacity0<0) {
        this.makenew()
        
      }
}

}




}

setInterval(() => {

    for (let index = 0; index < numofpoints; index++) {
points[index].draw()

    }
    
},steptime);

