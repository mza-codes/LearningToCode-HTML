function display(){
    var text=document.getElementById("value").value
    document.getElementById("heading").innerHTML=text
    alert("'"+text+"' will be printed")
    if(text=="abc"){
        alert("Usual inputs !")
    }
}