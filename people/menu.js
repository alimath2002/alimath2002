const numrows=10;

let pagenum=Number(document.getElementById('pagenumbers').textContent);
pagenum=pagenum-1;
let graduateNames=["Shadi Shaaban","Ali Hassan-zadeh","Zeinab Sabouri","Iman Tabatabaee","Roozbeh Kassaiian",
    "Baharaeh Kordi","Mona Rahmani","Payam Aghsaee","Majid Deiri","Maryam Akhavan","Navid Tahvildari","Hamed Haddadzadegan"
,"Suzan Sharifan","Alireza Sheikh","Ali Asghar Marjani","Payam Zekavat","Sommayeh Ghazvini","Rozita Kian","Samaneh Marvi","Farrokh Shoaee"
,"Nayyer Sadeghi","Reza Ghasemizadeh","Hoda Davari","Andisheh Davari","Sima Behzadi","Ali Tohidi","Meysam Fazeli","Elham Sharifi",
"Soheil Nozari","Ammar Safaie","Mohammad Ali Olyaie","Mohammad Ali Tofighi","Ahmad Taheri","Amir Heshmati-Far","Maryam Delbekhah"
,"Fatereh Mousazadeh","Reza Sahebi","Samira Soltani","Mehrdad Jaafarzadeh","Azadeh Mousavi","Arefeh Ghazi-Nezami"];
let gradgender=['f','m','f','m','m','f','f','m','m','f','m','m','f',
    'm','m','m','f','f','f','m','m','m','f','f','f','m','m','f','m','m','m','m','m','m','f','f','m','f','m','f','f'];
let gradyear=["2000","2002","2003","2003","2003","2004","2004","2004","2005","2006","2007","2007","2007","2007","2007",
    "2008","2008","2008","2008","2009","2009","2009","2010","2010","2011","2011","2011","2011",
    "2012","2013","2013","2013","2014","2015","2015","2014","2014","2014",
    "2017","2017","2019","2019"];
    
let thesis=["Effects of bottom topography on selective withdrawal in reservoirs",
    "Scour at toe of vertical breakwaters due to breaking waves"
    ,"unsteady exchange flow with frictional effects",
    "Non-linear effects in selective withdrawal in a reservoir with bottom topography"
    ,"Experimental study of effects of bottom topography on selective withdrawal",
    "Study of effects of lateral contraction on selective withdrawal of a two-layer fluid through a line sink"
    ,"Numerical simulation of excitation of internal waves by surface waves in dam reservoirs",
    "Effects of lateral contraction on selective withdrawal of a stratified fluid through a line sink",
    "Experimental study of flow in stratified reservoirs with irregular geometry",
    "Effects of high sills on flow of stratified flows",
    "Analytical solution of two-dimensional nonlinear interaction of surface and interfacial waves"
    ,"Selective withdrawal through a point sink in a linearly stratified reservoir with topographic effects"
    ,"Selective withdrawal of a two-layer fluid through a point sink with topographic effects",
    "Flood routing using finite volume method and GIS",
    "Three-dimensional modeling of salinity and flow in Urmia lake",
    "Gravity currents in inhomogeneous vegetated areas of lakes"
    ,"Experimental study of vertical variation of vegetation density on vertical mixing"
    ,"Theoretical and experimental study of selective withdrawal of a two-layer fluid over bed topography",
    "Theoretical and experimental study of exchange flow between open water and canopy"
    ,"Experimental study of transverse dispersion in canopies","Nonlinear interaction of a surface wave with harmonic interfacial waves"
    ,"Exchange flow caused by temperature gradient between open water and vegetated area"
    ,"Transverse dispersion in inclined canopy"
    ,"Exchange flow in canopies due to inhomogeneous sun heating and wind"
    ,"Theoretical study of the effects of a diffuse layer on nonlinear interaction of a surface wave with interfacial waves"
    ,"Wind-induced currents in canopies"
    ,"","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","",""];

let othernotes=[,"","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","",""];

function changelist() {



    
  
for (let i = 0; i < numrows; i++) {

    let pagenum=Number(document.getElementById('pagenumbers').textContent);
    pagenum=pagenum-1;

    let index=i+(pagenum)*10;
    
    document.getElementById('thesis'+(i+1)).textContent=thesis[index];    
    document.getElementById('name'+(i+1)).textContent=graduateNames[index];

    document.getElementById('Year'+(i+1)).textContent=gradyear[index];
    
    document.getElementById('othercontent'+(i+1)).textContent=othernotes[index];
    if(gradgender[index]=='f'){
      document.getElementById('personim'+(i+1)).src='../images/unknownwoman.jpg';

    }else{

           document.getElementById('personim'+(i+1)).src='../images/unknown.jpg';

    }


}

for (let i = 0; i < numrows; i++) {

    if (document.getElementById('name'+(i+1)).textContent=='') {
        document.getElementById('stu'+(i+1)).style.display='none'
        
    }else{document.getElementById('stu'+(i+1)).style.display='grid'}
}



};


//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//.then(response =
//.catch(error => console.error(error));

//fetch("https://sharif.edu/~jamali/") .then((res) => res.text()) .then((text) => { // do something with "text" 
  //; }).catch((e) => console.error(e));

//  document.getElementById('searchinput').oninput


function searching(searched) {

//searched=searched.toLocaleLowerCase;
searched=searched.toLocaleLowerCase();
    let k=1;

for (let i = 0; i < graduateNames.length; i++) {

    
    let element=graduateNames[i];
    element=element.toLocaleLowerCase();

    if(element.search(searched)>=0){

        

        document.getElementById('searchresults'+k).textContent=graduateNames[i]+" | "+thesis[i];
        document.getElementById('searchresults'+k).value=i;
        document.getElementById('searchresults'+k).style.display='block';
        k=k+1;
       
    }
    if(k>5){break;}

}if(k<5){
    for (let index = k-1; index <5+1; index++) {
        document.getElementById('searchresults'+index).style.display='none';
        
    }
}



    
}




  function  bpage(a)
{
    let numpage=(graduateNames.length-(graduateNames.length%numrows))/numrows+1;
    a=Number(document.getElementById('pagenumbers').textContent)+a;
    if(a<1){
        a=numpage;
        
    }
    if (a>numpage) {
        a=1;
        
    }

    document.getElementById('pagenumbers').textContent=a;
    
    
}


function forget(){

    for (let index =1; index <5+1; index++) {
        document.getElementById('searchresults'+index).style.display='none';
        
    }

}


function linkedlist(value1){
bpage(Math.ceil(value1/numrows)-1);
changelist();
};