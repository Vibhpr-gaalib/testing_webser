
const button = document.querySelector("button");
const form   = document.querySelector('form');
const data = document.querySelector('input');

button.addEventListener('click',()=>{
   console.log(data.value);
})


form.addEventListener('submit', (e) =>{
   e.preventDefault();
  
})

button.addEventListener


// fetch('https://api.darksky.net/forecast/a1be0fddb3fa380b3e3a33ab2f4a46c1/37.8267,-122.4233').then((value)=>{
//           value.json().then((data)=>{
//             console.log(data);
//           });
// });

