console.log("print hwllo world"); 

 

function currentTime(){
    let content = document.getElementById('content');
    let date = new Date();
let time = date.toLocaleTimeString();
content.innerHTML = time;

   }
    setInterval(currentTime , 1000);

