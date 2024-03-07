const button=document.querySelectorAll('.button')
const body =document.querySelector('body')

button.forEach(function(button){
    


button.addEventListener('click', (e)=>{

if(e.target.id==='grey'){


    body.style.backgroundColor='gray';
}
if(e.target.id==='white'){


    body.style.backgroundColor='white';
}
if(e.target.id==='blue'){


    body.style.backgroundColor='blue';
}
if(e.target.id==='red'){


    body.style.backgroundColor='red';
}
})
})