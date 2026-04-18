let arr1= ['Sarthak','Harsh','Akarsh','Vedant','Adarsh','Satwik','Ayush']
var num = Math.floor(Math.random()*arr1.length)
console.log(arr1[num])


//let arr=['CSK','MI','KKR','RR','LSG','RCB','SRH','PBKS','GT','DC']
//var btn = document.querySelector('button')
//var h1 = document.querySelector('h1')
//btn.addEventListener('click',function(){
//   var num =Math.floor( Math.random()*arr.length)
//   let winner = arr[num]
//   h1.innerHTML = winner
//})




let arr2 = [{
     team: 'CSK',
     prime_color :'yellow',
     secondary:'green'
    },
    {
     team: 'MI',
     prime_color :'blue',
     secondary:'golden'  
    },
    {
     team: 'RCB',
     prime_color :'red',
     secondary:'black'
    },
    {
     team: 'KKR',
     prime_color :'purple',
     secondary:'gold'
    }
 
]
var btn = document.querySelector('button')
var h1= document.querySelector('h1')

btn.addEventListener('click',function(){
    var num=Math.floor (Math.random()*arr2.length)
    var winner= arr2[num]

    h1.innerHTML = winner.team
    h1.style.backgroundColor=winner.prime_color
    h1.style.color=winner.secondary
   
})