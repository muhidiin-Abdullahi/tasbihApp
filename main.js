const value = document.querySelector("#value")
const incrimentBtn = document.querySelector("#incrimentBtn")
const resetBtn = document.querySelector("#resetBtn")
const decrementBtn = document.querySelector("#decrementBtn")

let startValue = 0;
let endValue = 0;

incrimentBtn.addEventListener("click", function(){
   startValue++
   value.innerHTML= startValue;

   if(startValue == 10){
      value.style.color = "red"
   }
   else{
      value.style.color = "black"
   }
   
})



resetBtn.addEventListener("click", function(){
   startValue = 0;
   value.innerHTML = startValue;
   
})
decrementBtn.addEventListener("click", function(){
  if(startValue > 0){
   startValue--;
   value.innerHTML = startValue;

   if(startValue == 10){
      value.style.color = "red"
   }
   else{
      value.style.color = "black"
   }
   
  }

    
   
})

