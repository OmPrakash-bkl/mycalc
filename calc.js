
document.getElementById("result").innerHTML="0";
var val_container="";
function send(val){
    if(val==="C"){
            document.getElementById("result").innerHTML="0";
            val_container="";
    }
    else{
        val_container=val_container+val;
       
        document.getElementById("result").innerHTML=val_container;
       
    }
}
function show_result(){
    document.getElementById("result").innerHTML=eval(val_container);
    val_container="";
}
function root(value){
    document.getElementById("result").innerHTML=Math.sqrt(val_container);
}

