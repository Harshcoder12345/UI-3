

function formShow() {
   const forms = document.getElementsByTagName('form');
   console.log(forms);
   
 
      forms[0].classList.remove('d-none'); 
     forms[0].classList.add('d-flex'); 
     forms[0].style.width = "300px"
     forms[0].style.backgroundColor = "gray"

    let a = document.getElementById('exampleInputEmail1').value 


     

   
   
 }

document.getElementById('btn1').addEventListener('click', formShow)