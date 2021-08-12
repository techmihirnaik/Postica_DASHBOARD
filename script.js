function validation(){
var firstname=document.getElementById("fname").Value;
if (firstname==""){
    document.getElementById('firstname').innerHTML="**Please fill this filed";
    return false;
}

}