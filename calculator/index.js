let screen=document.getElementById("inputbar"); 
buttons=document.querySelectorAll("button"); 
let screenValue=""; 
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText; 
        if(buttonText=="X"){
            buttonText="*"; 
             
            screen.value+=buttonText; 



        }
        else if(buttonText=="+"){
            screen.value+=buttonText; 

        }
        else if(buttonText=="-"){
            screen.value+=buttonText; 

        }
        else if(buttonText=="DEL"){
            screen.value="";
        }
        else if(buttonText == "="){
            screen.value=eval(screen.value); 
            
        }
        else {
            screen.value+=buttonText; 


        }
    })
}
 

