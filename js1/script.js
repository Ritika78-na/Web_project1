var btn=document.querySelector('button')
var h5= document.querySelector('h5')
var check=0

btn.addEventListener('click',function(){
  if(check==0){
     h5.innerHTML='Friend'
     h5.style.color='green'
     btn.innerHTML='Remove Friend'
     check=1
  }
  else{
     h5.innerHTML='Strenger'
     h5.style.color='Red'
     btn.innerHTML='Add Friend'
     check=0
  }
})