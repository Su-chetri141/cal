const btn=document.querySelectorAll(".number span");
const output=document.querySelector(".screen");
const equal=document.getElementById("equal");
const clear=document.getElementById("c");
const del=document.getElementById("d");
btn.forEach(button=>{
button.addEventListener("click",(e)=>
{
   
   const value=e.target.innerText;
if(value=== "=")return
   
   output.innerText+=value;
  
});


});

clear.addEventListener("click",()=>{

   output.innerText="";
   
});

equal.addEventListener("click",()=>{
 const result= eval(output.innerText);
 output.innerText = result;
 

});
del.addEventListener("click",()=>
{
   output.innerText=output.innerText.slice(0,-2);
});



//modes
const light=document.getElementById("light");
const dark=document.getElementById("dark");
light.addEventListener("click",()=>{
   document.body.classList.remove("dark-mode");
   document.body.classList.add("light-mode");
   light.style.display="none";
   dark.style.display="block";
});
dark.addEventListener("click",()=>{
   document.body.classList.remove("light-mode");
   document.body.classList.add("dark-mode");
   light.style.display="block";
   dark.style.display="none";
});