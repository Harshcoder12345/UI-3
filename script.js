let main = document.getElementById('main')
console.log(main);




function formShow() {
   const forms = document.getElementsByTagName('form');

     forms[0].classList.add('formshow'); 

     forms[0].style.width = "300px"
     forms[0].style.backgroundColor = "white"
     



    let a = document.getElementById('exampleInputEmail1').value 

       main.style.opacity = '0.3'
       main.style.backgroundColor = 'gray'
     

   
   
 }

document.getElementById('btn1').addEventListener('click', formShow)