function fill(value){
    document.getElementById("result").textContent+=value;
}

function reset(){
    document.getElementById("result").textContent="";
}

function delc(){
    var del=document.getElementById("result").textContent.slice(0,-1);
    document.getElementById("result").textContent=del;
}

function final(){
    run=document.getElementById("result").textContent;
    document.getElementById("result").textContent=eval(run);
}


