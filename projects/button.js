
function down(){    

    let array=document.getElementsByClassName('buttonmenuebox');
 
     for (let index = 0; index < array.length; index++) {

         document.getElementsByClassName('buttonmenuebox')[index].style.display='none'
         
     }
 
 }

 function openmenubutton(params) {

    setInterval(() => {
        document.getElementById(params).style.display='block';

    }, 1000);

    
    
 }
