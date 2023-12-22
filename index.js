let inbut = document.querySelector("input")


let buttons = document.querySelectorAll("button")

let clear = document.querySelector(".clear")

let equal = document.querySelector(".equal")




buttons.forEach(element => {
    
    element.addEventListener("click",()=>{
        if(element.innerHTML == "=" || element.innerHTML == "C"){return}
        else{ inbut.value += element.innerHTML}
        
    })

});

///////////////////////////////////////////////////////////
equal.addEventListener("click",()=>{
  
    
inbut.value = eval(inbut.value)


    result ()
})


//////////////////////////////////////////////////////////////////////////////////////////////////
function result () {
    if(inbut.value == "null" || inbut.value == "undefined"){inbut.value = ``}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

clear.addEventListener("click",()=>{
inbut.value = ``
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



buttons.forEach(element => {

    
    setTimeout(() => {
        
    element.style.backgroundColor  = "white"
    
    },500);
    
    });
    
    
    buttons.forEach(element => {
        
    setTimeout(() => {
        
    element.style.backgroundColor  = "black"
    
    },1000);
    
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////


let multiplied = document.getElementById("multiplied")

let plus = document.getElementById("plus")

let by = document.getElementById("by")

let minus = document.getElementById("minus")



multiplied.addEventListener("click",()=>{
   
   if(inbut.value.includes("+") || (inbut.value.includes("/"))||(inbut.value.includes("-") )||inbut.value.includes("ERROR")){inbut.value="ERROR"}
    
})


plus.addEventListener("click",()=>{
   
    if(inbut.value.includes("*") || (inbut.value.includes("/"))||(inbut.value.includes("-") )||inbut.value.includes("ERROR")){inbut.value="ERROR"}
     
 })



by.addEventListener("click",()=>{
   
    if(inbut.value.includes("+") || (inbut.value.includes("*"))||(inbut.value.includes("-"))||inbut.value.includes("ERROR")){inbut.value="ERROR"}
     
 })

 

minus.addEventListener("click",()=>{
   
    if(inbut.value.includes("+") || (inbut.value.includes("/"))||(inbut.value.includes("*") )||(inbut.value.includes("ERROR"))){inbut.value="ERROR"}
     


 })

 