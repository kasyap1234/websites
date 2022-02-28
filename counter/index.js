let count=0; 
let variable=document.getElementById("number"); 
function increase(){
    count+=1;
    
    variable.innerText=count; 


}
function decrease(){
    count-=1; 
    variable.innerText=count; 
    
}
function reset(){
    count=0; 
    variable.innerText=count; 
    
}
 

